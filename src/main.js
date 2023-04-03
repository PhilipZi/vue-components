import { createApp } from "vue";
import App from "./App.vue";
// import Greeting from "./src/components/Greeting.vue";

let vm = createApp(App);

// vm.component("Greeting", Greeting);

vm.mount("#app");
