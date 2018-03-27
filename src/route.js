import React, { Component } from 'react'

class A extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>Component A</div>
    )
  }
}

class B extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>Component B</div>
    )
  }
}

class wrapper extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>{this.props.children}</div>
    )
  }
}