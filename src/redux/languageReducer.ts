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

// 数据的处理系统
// 通过 action 处理 state
export default (state = defaultState) => {
  return state
}
