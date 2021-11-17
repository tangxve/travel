import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translation_en from './en.json'
import translation_zh from './zh.json'

const resources = {
  en: {
    translation: translation_en
  },
  zh: {
    translation: translation_zh
  }
}

i18n.use(initReactI18next)  // 使用 插件
    .init({
      resources,
      lng: 'zh', // 默认语言
      // header.slogan 可以使用链式调用
      // keySeparator: false, // we do not use keys in form messages.welcome
      interpolation: {
        // 不会为强行转换字符串
        escapeValue: false, // react already safes from xss，react本身会处理xss攻击
      },
    })

export default i18n
