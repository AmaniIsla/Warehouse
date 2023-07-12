<template>
  <!--begin::Wrapper-->
  <div class="w-lg-500px p-10">
    <!--begin::Form-->
    <VForm
      class="form w-100"
      id="kt_login_signin_form"
      @submit="onSubmitLogin"
      :validation-schema="login"
      :initial-values="{ email: 'admin@demo.com', password: 'demo' }"
    >
      <!--begin::Heading-->
      <div class="text-center mb-10">
        <!--begin::Title-->
        <h1 class="text-dark mb-3">Sign In</h1>
        <!--end::Title-->

        <!--begin::Link-->
        <div class="text-gray-400 fw-semobold fs-4">
          New Here?
          <router-link to="/sign-up" class="link-primary fw-bold">Create an Account</router-link>
        </div>
        <!--end::Link-->
      </div>
      <!--begin::Heading-->

      <div class="mb-10 bg-light-info p-8 rounded">
        <div class="text-info">
          Use account <strong>admin@demo.com</strong> and password <strong>demo</strong> to continue.
        </div>
      </div>

      <!--begin::Input group-->
      <div class="fv-row mb-10">
        <!--begin::Label-->
        <label class="form-label fs-6 fw-bold text-dark">Email</label>
        <!--end::Label-->

        <!--begin::Input-->
        <Field
          tabindex="1"
          class="form-control form-control-lg form-control-solid"
          type="text"
          name="email"
          autocomplete="off"
        />
        <!--end::Input-->
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="email" />
          </div>
        </div>
      </div>
      <!--end::Input group-->

      <!--begin::Input group-->
      <div class="fv-row mb-10">
        <!--begin::Wrapper-->
        <div class="d-flex flex-stack mb-2">
          <!--begin::Label-->
          <label class="form-label fw-bold text-dark fs-6 mb-0">Password</label>
          <!--end::Label-->

          <!--begin::Link-->
          <router-link to="/password-reset" class="link-primary fs-6 fw-bold">Forgot Password ?</router-link>
          <!--end::Link-->
        </div>
        <!--end::Wrapper-->

        <!--begin::Input-->
        <Field
          tabindex="2"
          class="form-control form-control-lg form-control-solid"
          type="password"
          name="password"
          autocomplete="off"
        />
        <!--end::Input-->
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="password" />
          </div>
        </div>
      </div>
      <!--end::Input group-->

      <!--begin::Actions-->
      <div class="text-center">
        <!--begin::Submit button-->
        <button
          tabindex="3"
          type="submit"
          ref="submitButton"
          id="kt_sign_in_submit"
          class="btn btn-lg btn-primary w-100 mb-5"
        >
          <span class="indicator-label"> Continue </span>

          <span class="indicator-progress">
            Please wait...
            <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
          </span>
        </button>
        <!--end::Submit button-->
      </div>
      <!--end::Actions-->
    </VForm>
    <!--end::Form-->
  </div>
  <!--end::Wrapper-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2/dist/sweetalert2.js";
import * as Yup from "yup";
import { useAuthStore, User } from "@/stores/auth";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "sign-in",
  components: {
    Field,
    VForm,
    ErrorMessage,
  },
  setup() {
    const store = useAuthStore();
    const router = useRouter();

    const submitButton = ref<HTMLButtonElement | null>(null);

    // Create form validation object
    const login = Yup.object().shape({
      email: Yup.string().email().required().label("Email"),
      password: Yup.string().min(4).required().label("Password"),
    });

    // Form submit function
    const onSubmitLogin = async (values: any) => {
      values = values as User;
      // Clear existing errors
      store.logout();

      if (submitButton.value) {
        submitButton.value.disabled = true;
        submitButton.value.setAttribute("data-kt-indicator", "on");
      }

      try {
        // Send login request using Firebase authentication
        const response = await signInWithEmailAndPassword(getAuth(), values.email, values.password);

        // Check if login was successful
        if (response && response.user) {
          const authUser: User = {
            name: response.user.displayName || "",
            surname: "",
            email: response.user.email || "",
            password: "",
            api_token: "",
          };
          // Set authenticated user
          store.setAuth(authUser);

          Swal.fire({
            text: "You have successfully logged in!",
            icon: "success",
            buttonsStyling: false,
            confirmButtonText: "Ok, got it!",
            heightAuto: false,
            customClass: {
              confirmButton: "btn fw-semobold btn-light-primary",
            },
          }).then(() => {
            // Go to page after successful login
            router.push({ name: "dashboard" });
          });
        } else {
          throw new Error("Invalid login credentials");
        }
      } catch (error) {
        // Handle login error
        Swal.fire({
          text: error.message || "An error occurred during login",
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "Try again!",
          heightAuto: false,
          customClass: {
            confirmButton: "btn fw-semobold btn-light-danger",
          },
        }).then(() => {
          store.errors = {};
        });
      }

      if (submitButton.value) {
        submitButton.value.removeAttribute("data-kt-indicator");
        submitButton.value.disabled = false;
      }
    };

    return {
      onSubmitLogin,
      login,
      submitButton,
    };
  },
});
</script>
