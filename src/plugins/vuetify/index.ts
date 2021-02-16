import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
// import VueI18n from 'vue-i18n'

import { ru, en } from '@/plugins/vuetify/locales'

Vue.use(Vuetify)
// Vue.use(VueI18n)

// const messages = {
//   en: {
//     $vuetify: {
//       dataIterator: {
//         rowsPerPageText: 'Items per page:',
//         pageText: '{0}-{1} of {2}',
//       },
//     },
//   },
//   ru: {
//     $vuetify: {
//       dataIterator: {
//         rowsPerPageText: 'Элементы на странице',
//         pageText: '{0}-{1} или {2}',
//       },
//     },
//   },
// }

// const i18n = new VueI18n({
//   locale: 'en',
//   messages,
// })

export default new Vuetify({
  lang: {
    locales: { en, ru },
    current: 'en',
  },
})
