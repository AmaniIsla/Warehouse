import { ref } from "vue";
import { defineStore } from "pinia";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut , sendPasswordResetEmail, onAuthStateChanged, updateProfile } from "firebase/auth";

import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";

export interface User {
  name: string;
  surname: string;
  email: string;
  password: string;
  api_token: string;
}

export const useAuthStore = defineStore("auth", () => {
  const errors = ref({});
  const user = ref<User>({} as User);
  const isAuthenticated = ref(!!JwtService.getToken());
  const auth = getAuth(); // Get the Firebase Auth instance
  


  function setAuth(authUser: User) {
    isAuthenticated.value = true;
    user.value = authUser;
    errors.value = {};
    JwtService.saveToken(user.value.api_token);

  }

  function setError(error: any) {
    errors.value = { ...error };
  }

  function purgeAuth() {
    isAuthenticated.value = false;
    user.value = {} as User;
    errors.value = {};
    JwtService.destroyToken();

  }

  async function login(credentials: User) {
    try {
      const response = await signInWithEmailAndPassword(getAuth(), credentials.email, credentials.password);
      if (response) {
        const authUser: User = {
          name: response.user.displayName || "",
          surname: "",
          email: response.user.email || "",
          password: "",
          api_token: ""
        };
        setAuth(authUser);
      } else {
        throw new Error("Invalid login credentials");
      }
    } catch (error) {
      setError(error);
    }
  }

  async function logout() {
    try {
      await signOut(getAuth());
      purgeAuth();
    } catch (error) {
      setError(error);
    }
  }

  async function register(credentials: User) {
    try {
      const { email, password, name, surname } = credentials;
      const { user: authUser } = await createUserWithEmailAndPassword(auth, email, password);

      if (authUser) {
        if (auth.currentUser !== null) {
          // Update the user's profile
          await updateProfile(auth.currentUser, { displayName: `${name} ${surname}` });
        }

        // Set the authenticated user data
        setAuth({
          name,
          surname,
          email: authUser.email || "",
          password: "", // Add logic to handle password if needed
          api_token: "", // Add logic to retrieve API token if needed
        });
      }
    } catch (error) {
      setError(error);
    }
  }

  async function forgotPassword(email: string) {
    try {
      await sendPasswordResetEmail(auth, email);
      setError({}); // Clear any existing errors
    } catch (error) {
      setError(error);
    }
  }


  function verifyAuth() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is authenticated, set the user data
        setAuth({
          name: user.displayName || "",
          surname: "", // Add logic to retrieve additional user data if needed
          email: user.email || "",
          password: "", // Add logic to handle password if needed
          api_token: "", // Add logic to retrieve API token if needed
        });
      } else {
        // User is not authenticated, clear the user data
        purgeAuth();
      }
    });
  }

  return {
    errors,
    user,
    isAuthenticated,
    setAuth,
    setError,
    purgeAuth,
    verifyAuth,
    login,
    logout,
    register,
    forgotPassword,
  };
})