<template>
  <!--begin::Toolbar-->
  <div id="kt_app_toolbar" class="app-toolbar py-3 py-lg-6">
    <!--begin::Toolbar container-->
    <div
      id="kt_app_toolbar_container"
      class="app-container d-flex flex-stack"
      :class="{
        'container-fluid': toolbarWidthFluid,
        'container-xxl': !toolbarWidthFluid,
      }"
    >
      <KTPageTitle />
      <!--begin::Actions-->
      <div class="d-flex align-items-center gap-2 gap-lg-3">
        <ul class="nav nav-tabs nav-pills border-0">
          <li class="nav-item">
            <a class="nav-link active" data-bs-toggle="tab" href="#kt_vtab_pane_1">ALL</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#kt_vtab_pane_2">ALTRIA</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#kt_vtab_pane_3">OTHER</a>
          </li>
        </ul>
        <div>
          <button @click="login">Log in</button>
        </div> 
      </div>
      <!--end::Actions-->
    </div>
    <!--end::Toolbar container-->
  </div>
  <!--end::Toolbar-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { toolbarWidthFluid } from "@/core/helpers/config";
import KTPageTitle from "@/layouts/main-layout/toolbar/PageTitle.vue";
import { useAuth0 } from '@auth0/auth0-vue';

export default defineComponent({
  name: "layout-toolbar",
  components: {
    KTPageTitle,
  },
  setup() {
     const { loginWithRedirect } = useAuth0();

    return {
       login: () => {
         loginWithRedirect();
       },
      toolbarWidthFluid,
    };
  },
});
</script>
