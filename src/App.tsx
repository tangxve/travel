import React from 'react'
import styles from './App.module.css'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import { HomePage } from './pages'

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          {/* 匹配顺序 从上到下 一次匹配 */}
          <Route exact path={'/'} component={HomePage} />
          <Route path="/signIn" render={() => <h1>登录</h1>} />
          <Route path="/test" render={() => <h1>test</h1>} />
          {/* 404 页面 什么路径都没有匹配到 */}
          <Route render={() => <h1> 404 页面没有找到</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
