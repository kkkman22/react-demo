import React, { Component } from 'react'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: '旧数据'
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
    console.log('组件接收到父组件的props就会被触发')
  }

  handleClick () {
    this.setState({
      data: '新数据'
    })
  }

  render () {
    console.log('3.render')
    return (
      <div className="App">
        <div>App</div>
        <button onClick={() => {this.handleClick()}}>更新组件</button>
      </div>
    )
  }
}

export default App
// 生命周期节点:
//    1. Mounting : 挂载阶段
//    2. Updating : 运行时阶段
//    3. Unmounting : 卸载阶段
//    4. Error Handing : 错误处理(16版本后新增加只处理render出现的错误,逻辑错误还是抓不到的)




