// import {createApp} from 'vue'
// import App from './App.vue'
// import router from './routers'

// createApp(App)
// .use(router)
// .mount("#app");
import Vue from 'vue';
import App from './App.vue';
import router from './routers';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

