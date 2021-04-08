import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'fa',
  },
  theme: {
    dark:true,
    themes: {
      dark: {
        primary: '#110F1B',
        secondary: '#FA5257',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
      light: {
        primary: '#110F1B',
        secondary: '#FA5257',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
    },
  },
});
