import React, { Component ,Fragment} from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
// BrowserRouter H5模式  HashRouter Hash模式
class A extends Component {
  render () {
    return (
      <div>组件A</div>
    )
  }
}

// class B extends Component {
//   render () {
//     return (
//       <div>组件B</div>
//     )
//   }
// }

// 无状态组件写法
// const B =(props)=>{
//   console.log(props)
//   return(<div>组件B</div>)
// }
//  下面这种写法{match}类似于从props取出match
const B =({match})=>{
  console.log(match)
  return(<div>组件B</div>)
}

class C extends Component {
  constructor (props){
    super(props)
    console.log(this.props)
  }
  render()
  {
    return (
      <div>
        <Switch>
          <Route exact path={`${this.props.match.path}`}  // exact 严格匹配路径
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
  handleRouter(){
    console.log(this.props)
  }
  render () {
    return (<Router>
        {/* Fragment 片段 完全是为了减少不合理的标签嵌套及减少DOM节点*/}
        <Fragment>
          {/*链接导航*/}
          <ul>
            <li><Link to='/a'>A组件</Link></li>
            <li><Link to='/b'>B组件</Link></li>
            <li><Link to={'/c'}>C组件</Link></li>
            <li><Link to={'/c/123'}>C组件(带参数)</Link></li>
          </ul>
          {/*函数式导航*/}
          <button onClick={()=>this.handleRouter()}>GO B组件</button>

          {/* 路由规则*/}
          <Route path='/a' component={A}/>
          <Route path='/b' component={B}/>
          <Route path={'/c'} component={C}/>
          <Route path={'/c/:id'} component={C}/>
        </Fragment>

      </Router>
    )
  }
}

export default App