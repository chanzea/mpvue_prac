module.exports = [
  {
    path: 'pages/entry/index',
    name: 'Index',
    config: {
      navigationBarTitleText: '首页',
      // 引入UI组件，后面会讲到
      usingComponents: {
        'i-tab-bar': '/iview/tab-bar/index',
        'i-tab-bar-item': '/iview/tab-bar-item/index'
      }
    }
  }, {
    path: 'pages/home/index',
    name: 'Index',
    config: {
      navigationBarTitleText: 'list详情',
      usingComponents: {
        'i-button': '/iview/button/index'
      }
    }
  }
]
