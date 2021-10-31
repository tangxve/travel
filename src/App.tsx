import React from 'react'
import styles from './App.module.css'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { HomePage } from './pages'

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Route path={'/'} component={HomePage} />
      </BrowserRouter>
    </div>
  )
}

export default App
