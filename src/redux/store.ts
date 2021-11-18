import { createStore } from 'redux'
// 数据处理
import languageReducer from './language/languageReducer'

// 负责保存数据
const store = createStore(languageReducer)

export default store
