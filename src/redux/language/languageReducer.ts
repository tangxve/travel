import i18n from 'i18next'
import { ADD_LANGUAGE, CHANGE_LANGUAGE, LanguageActionTypes } from './languageActions'

export interface LanguageState {
  language: 'en' | 'zh'
  languageList: Array<{ name: string, code: string }>
}

const defaultState: LanguageState = {
  language: 'zh',
  languageList: [
    { name: '中文', code: 'zh' },
    { name: 'English', code: 'en' }
  ]
}


interface ChangeLanguageAction {
  type: typeof CHANGE_LANGUAGE

}

// 数据的处理系统
// 通过 action 处理 state
export default (state = defaultState, action: LanguageActionTypes) => {
  console.log(state, action)

  if (action.type === CHANGE_LANGUAGE) {
    // 切换语言
    i18n.changeLanguage(action.payload) // 这样处理是不标准的，有副作用
    const newState = { ...state, language: action.payload }

    return newState
  }

  if (action.type === ADD_LANGUAGE) {
    const newState = {
      ...state,
      languageList: [...state.languageList, action.payload]
    }

    return newState
  }
  // 所有的 state 都是不可修改的 immutable
  return state
}
