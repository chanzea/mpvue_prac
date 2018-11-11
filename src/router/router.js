module.exports = [
  {
    path: 'pages/entry',
    name: 'Index',
    config: {
      navigationBarTitleText: '文章详情',
      // 引入UI组件，后面会讲到
      usingComponents: {
        'i-tab-bar': '/dist/tab-bar/index',
        'i-tab-bar-item': '/dist/tab-bar-item/index'
      }
    }
  }, {
    path: 'pages/home',
    name: 'Index',
    config: {
      navigationBarTitleText: 'list详情',
      usingComponents: {
        'i-button': '/dist/button/index'
      }
    }
  }
]
