const locale = 'en'

export default {
  // current locale
  locale,

  // when translation is not available fallback to that locale
  fallbackLocale: 'en',

  // availabled locales for user selection
  availableLocales: [{
    code: 'en',
    flag: 'us',
    name: 'English',
    file: 'en.js'
  }, {
    code: 'es',
    flag: 'es',
    name: 'Español',
    file: 'es.js'
  }, {
    code: 'pt',
    flag: 'pt',
    name: 'Português',
    file: 'pt.js'
  }, {
    code: 'de',
    flag: 'de',
    name: 'Deutsche',
    file: 'de.js'
  }, {
    code: 'fr',
    flag: 'fr',
    name: 'Français',
    file: 'fr.js'
  }, {
    code: 'ar',
    flag: 'sa',
    name: 'العربية',
    file: 'ar.js'
  }, {
    code: 'ko',
    flag: 'kr',
    name: '한국어',
    file: 'ko.js'
  }, {
    code: 'ru',
    flag: 'ru',
    name: 'русский',
    file: 'ru.js'
  }, {
    code: 'zh',
    flag: 'cn',
    name: '中文',
    file: 'zh.js'
  }, {
    code: 'ja',
    flag: 'jp',
    name: '日本語',
    file: 'ja.js'
  }, {
    code: 'pl',
    flag: 'pl',
    name: 'Polskie',
    file: 'pl.js'
  }]
}
