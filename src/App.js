import React, { Component } from 'react'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: '旧数据',
      hasSon: true
    }
    console.log('1.创建构造函数')
  }

  componentWillMount () {
    console.log('2.组件将要加载(此时页面还没有渲染,但是可以就行业务逻辑处理,比如一些异步的交互行为)')
  }

  componentDidMount () {
    console.log('4.组件加载成功')
  }

  componentWillReceiveProps () {
    console.log('componentWillReceiveProps组件接收到父组件的props就会被触发')
  }

  shouldComponentUpdate () {
    console.log('shouldComponentUpdate通过return返回的布尔值判断是否组件更新')
    return true
  }

  componentWillUpdate () {
    console.log('componentWillUpdate组件将要更新,如果shouldComponentUpdate返回值为false将不触发')
  }

  componentDidUpdate () {
    console.log('componentDidUpdate组件更新完成')

  }
  handleClick () {
    console.log('开始更新')
    this.setState({
      data: '新数据'
    })
  }

  onPropsChange () {
    console.log('更新Props')
    this.setState({
      data: '最新数据'
    })
  }
  delComponent(){
    this.setState({
      hasSon: false
    })
  }

  render () {
    console.log('3.render')
    return (
      <div className="App">
        <div>App</div>
        <button onClick={() => {this.handleClick()}}>更新组件</button>
        {this.state.hasSon ? <Son data={this.state.data}/> : null}
        <button onClick={() => {this.onPropsChange()}}>改变Props</button>
        <button onClick={() => {this.delComponent()}}>删除子组件</button>
      </div>
    )
  }
}

class Son extends Component {
  componentWillReceiveProps () {
    console.log('componentWillReceiveProps组件接收到父组件的props就会被触发')
  }
  componentWillUnmount(){
    console.log('componentWillUnmount将要销毁')
  }
  render () {
    return (
      <div>{this.props.data}</div>
    )
  }
}

export default App
// 生命周期节点:
//    1. Mounting : 挂载阶段
//    2. Updating : 运行时阶段
//    3. Unmounting : 卸载阶段
//    4. Error Handing : 错误处理(16版本后新增加只处理render出现的错误,逻辑错误还是抓不到的)




