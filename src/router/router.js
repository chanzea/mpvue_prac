module.exports = [
  {
    path: 'pages/entry/index',
    name: 'Index',
    config: {
      navigationBarTitleText: '发现',
      navigationBarTextStyle: 'white',
      navigationBarBackgroundColor: '#c4483c',
      // 引入UI组件
      usingComponents: {
        'i-tabs': '/iview/tabs/index',
        'i-tab': '/iview/tab/index'
      }
    }
  }, {
    path: 'pages/news/index',
    name: 'Index',
    config: {
      navigationBarTitleText: '视频',
      navigationBarTextStyle: 'white',
      navigationBarBackgroundColor: '#c4483c',
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
      navigationBarBackgroundColor: '#c4483c',
      usingComponents: {
        'i-button': '/iview/button/index'
      }
    }
  }
]
