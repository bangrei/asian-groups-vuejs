import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createApp } from 'vue';
import App from './App.vue';
import "./assets/style.scss";
import router from "./router";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import VueLottiePlayer from "vue-lottie-player";

import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);
library.add(fas);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(store).use(router).use(VueLottiePlayer);
app.mount("#app");

