import { createApp } from "vue";
import { createPinia } from "pinia";
import { Tooltip } from "bootstrap";
import App from "./App.vue";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import router from "./router";
import ElementPlus from "element-plus";
import i18n from "@/core/plugins/i18n";
import ApiService from "@/core/services/ApiService";
import { initApexCharts } from "@/core/plugins/apexcharts";
import { initInlineSvg } from "@/core/plugins/inline-svg";
import { initVeeValidate } from "@/core/plugins/vee-validate";
import { initKtIcon } from "@/core/plugins/keenthemes";
import "@/core/plugins/prismjs";
import { createAuth0 } from '@auth0/auth0-vue';

const app = createApp(App);

const firebaseConfig = {
  apiKey: "AIzaSyDEkTn3yakHh1MdM5ezjOksUenwAfOn1ug",
  authDomain: "warehouse-dashboard-dbc15.firebaseapp.com",
  projectId: "warehouse-dashboard-dbc15",
  storageBucket: "warehouse-dashboard-dbc15.appspot.com",
  messagingSenderId: "418121749706",
  appId: "1:418121749706:web:49f5a6a8a4975d03bfd033",
  measurementId: "G-HGPVEXWX8Y"
};

app.use(createPinia());
app.use(router);
app.use(ElementPlus);

ApiService.init(app);
initApexCharts(app);
initInlineSvg(app);
initKtIcon(app);
initVeeValidate();

app.use(i18n);

app.directive("tooltip", (el) => {
  new Tooltip(el);
});

initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

const auth0Plugin = createAuth0({
  domain: "dev-1rwvk3w26cwqfmkg.us.auth0.com",
  clientId: "ZXGFe001omNWo6CYb5FE4dx5TasWXGz7",
  authorizationParams: {
    redirect_uri: window.location.origin
  }
});

app.use(auth0Plugin);
app.use(auth);

app.mount("#app");
