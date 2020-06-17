import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './../node_modules/bulma/css/bulma.css';

// Import Auth0 config.
import { domain, clientId } from "../auth_config";

// Import custom Auth0 wrapper plugin.
import { Auth0Plugin } from "./auth";

// Install the plugin with config data.
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
        appState && appState.targetUrl
        ? appState.targetUrl : window.location.pathname
    );
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
