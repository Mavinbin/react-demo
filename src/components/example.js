import React, { Component } from 'react'
import { render } from 'react-dom'
import examples from '../examples'

class Example extends Component {
    render() {
        const example = examples[this.props.params.id - 1]
        if (example) {
            return examples[this.props.params.id - 1]()
        } else {
            return <div>案例不存在</div>
        }
    }
}

export default Example