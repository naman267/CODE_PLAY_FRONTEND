import React, { Component } from 'react'
import styles from './App.module.css'
import { BrowserRouter } from 'react-router-dom'
import Main from './main'


import Layout from '../../hoc/Layout/Layout'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={styles.App}>
          <Main />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
