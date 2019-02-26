import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import App from "./app.vue";
import routerConfig from "./router";
import Axios from "axios";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import store from "./store";
import Spider from "../server/spider";
import "@mdi/font/css/materialdesignicons.css";
import Vuelidate from "vuelidate";
import VueTouch from "vue-touch";
Vue.use(VueTouch, { name: "v-touch" });

Vue.prototype.$axios = Axios;
Vue.prototype.$spider = Spider;

Vue.use(Vuelidate);
Vue.use(Vuex);
// Axios.defaults.baseURL = '/api'
Vue.use(Vuetify, {
  iconfont: "md,mdi"
});
Vue.use(VueRouter);
const router = new VueRouter(routerConfig);
new Vue({
  el: "#app",
  router: router,
  store: store,
  render: h => h(App)
});
