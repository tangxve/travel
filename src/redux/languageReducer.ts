import { ReducersMapObject } from 'redux'
import i18n from 'i18next'

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

export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'

interface ChangeLanguageAction {
  type: typeof CHANGE_LANGUAGE

}

// 数据的处理系统
// 通过 action 处理 state
export default (state = defaultState, action: any) => {
  console.log(state, action)

  if (action.type === 'change_language') {
    // 切换语言
    i18n.changeLanguage(action.payload) // 这样处理是不标准的，有副作用
    const newState = { ...state, language: action.payload }

    return newState
  }

  if (action.type === 'add_language') {
    const newState = {
      ...state,
      languageList: [...state.languageList, action.payload]
    }

    return newState
  }
  // 所有的 state 都是不可修改的 immutable
  return state
}
