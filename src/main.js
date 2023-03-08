import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/main.css";

//Plugin
import { dateFilter } from "@/plugins/date-filter.js";

const app = createApp(App);

app.use(store);
app.use(router);

app.config.globalProperties.$filters = {
  formatDate(value) {
    return dateFilter(value);
  },
};

app.mount("#app");
