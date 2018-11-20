module.exports = [
  {
    path: 'pages/entry/index',
    name: 'Index',
    config: {
      navigationBarTitleText: '比赛',
      navigationBarTextStyle: 'white',
      navigationBarBackgroundColor: '#0C3052',
      // 引入UI组件，后面会讲到
      usingComponents: {
        'i-tabs': '/iview/tabs/index',
        'i-tab': '/iview/tab/index'
      }
    }
  }, {
    path: 'pages/news/index',
    name: 'Index',
    config: {
      navigationBarTitleText: '最新',
      navigationBarTextStyle: 'white',
      navigationBarBackgroundColor: '#0C3052',
      usingComponents: {
        'i-button': '/iview/button/index',
        'i-tabs': '/iview/tabs/index',
        'i-tab': '/iview/tab/index'
      }
    }
  }, {
    path: 'pages/home/index',
    name: 'Index',
    config: {
      navigationBarTitleText: '最新',
      navigationBarTextStyle: 'white',
      navigationBarBackgroundColor: '#0C3052',
      usingComponents: {
        'i-button': '/iview/button/index'
      }
    }
  }
]
