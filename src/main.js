import Vue from 'vue'
import App from './App.vue'
import "@/assets/scss/index.scss";
import RouterServiceProvider from "@/providers/RouterServiceProvider";
import LanguageProvider from "@/providers/LanguageProvider";
import "@/providers/PackagesProviders";
import './filters'

Vue.config.productionTip = false

new Vue({
    // el: '#app',
    router: RouterServiceProvider,
    i18n: LanguageProvider,
    render: h => h(App),
}).$mount('#app')
