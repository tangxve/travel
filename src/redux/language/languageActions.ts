export const CHANGE_LANGUAGE = 'change_language'
export const ADD_LANGUAGE = 'add_language'

interface ChangeLanguageAction {
  type: typeof CHANGE_LANGUAGE,
  payload: 'zh' | 'en'
}

interface AddLanguageAction {
  type: typeof ADD_LANGUAGE,
  payload: { name: string, code: string }
}

// 混合类型
export type LanguageActionTypes = ChangeLanguageAction | AddLanguageAction

// 工厂函数
export const changeLanguageActionCreator = (languageCode: 'zh' | 'en'):ChangeLanguageAction => {
  return {
    type: CHANGE_LANGUAGE,
    payload: languageCode
  }
}

export const addLanguageActionCreator = (name: string, code: string):AddLanguageAction => {
  return {
    type: ADD_LANGUAGE,
    payload: { name, code }
  }
}
