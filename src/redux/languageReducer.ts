import { ReducersMapObject } from 'redux'

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
