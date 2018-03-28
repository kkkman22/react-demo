import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class A extends Component {
  render () {
    return (
      <div>组件A</div>
    )
  }
}

class B extends Component {
  render () {
    return (
      <div>组件B</div>
    )
  }
}

class C extends Component {

  render()
  {
    return (
      <div>
        <Switch>
          <Route exact path={`${this.props.match.path}`}
                 render={() => {
                   return (<div>不带参的组件C</div>)
                 }}/>
          <Route path={`${this.props.match.path}/:id`}
                 render={(route) => {
                   return (<div>带参的组件C{route.match.params.id}</div>)
                 }}/>
        </Switch>
      </div>
    )
  }
}



class App extends Component {
  render () {
    return (<Router>
        <div>
          <ul>
            <li><Link to='/a'>A组件</Link></li>
            <li><Link to='/b'>B组件</Link></li>
            <li><Link to={'/c'}>C组件</Link></li>
            <li><Link to={'/c/123'}>C组件(带参数)</Link></li>

          </ul>
          <Route path='/a' component={A}/>
          <Route path='/b' component={B}/>
          <Route path={'/c'} component={C}/>
          <Route path={'/c/:id'} component={C}/>
        </div>

      </Router>
    )
  }
}

export default App