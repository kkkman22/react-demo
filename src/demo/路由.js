/*router原理*/
// router三要素
// 1.历史  通过入栈出栈的方式记录访问页面的过程
// 2.跳转  负责页面跳转及传递参数
// 3.事件  打开新页面或回退到上一页面触发的逻辑

// 常见Router原理
// 1.页面路由      window.location.href= "www.baidu.com"
//      1.1 history.back()

// 2.Hash Router  window.location.href= "#test"
//  2.1 监听Hash值的变化
//    window.onhashChange=function () {console.log(window.location.hash)}

// 3.H5 Router  histroy.pushState('name','title','/path')推入新路由
//  3.1 监听H5 Router的变化
//    window.onpopstate=
//        function (e) {
//              console.log(e.state)
//              console.log(window.location.href)
//              console.log(window.location.pathname)
//              console.log(window.location.hash)
//              console.log(window.location.search)
//              }(H5里面只监听退栈的监听)
//  3.2 history.replaceState('test','title','/path') 替换当前路由

// React-Router
// 1.路由方式
//    1.1 H5模式<BrowserRouter>需要后端设置相应的规则
//    1.2 Hash模式<HashRouter>

// <Route>,路由规则
// <Switch>,路由选项，解决路由多次匹配的问题
// <Link/><NavLink/>, 路由跳转 <NavLink/>是在<Link/>基础上增加了选中状态的处理，比较适合做导航菜单
// <Redirect>,自动跳转
