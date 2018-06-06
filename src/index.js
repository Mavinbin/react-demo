import React, { Component } from 'react'
import { render } from 'react-dom'
import router from './router'
import style from './assets/css/style.css'

class App extends Component {
    render() {
        return router
    }
}

const DOM = document.getElementById('app')

const renderDOM = () => {
    render(<App/>, DOM)
}

renderDOM()

if (module.hot) {
    module.hot.accept([], () => {
        renderDOM()
    })
}