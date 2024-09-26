// Импорты
import { createApp } from "vue";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import App from "./components/App.vue";
import "./index.css";
import TheMain from "./components/TheMain.vue";

const app = createApp(App);

// Компоненты приложения
app.component("the-header", TheHeader);
app.component("the-main", TheMain);
app.component("the-footer", TheFooter);

app.mount("#app");
