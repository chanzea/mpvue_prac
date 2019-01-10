import { baseUrl } from '@/config/index'

/**
 * 获取推荐歌单
 */
export function personalized (start = 0, limit = 6) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${baseUrl}/personalized?limit=${limit}&start=${start}`, // 仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log('res', res)
        if (res.statusCode === 200) {
          resolve(res.data.result)
        }
      },
      fail (err) {
        console.error(err)
        reject(err)
      }
    })
  })
}

/**
 * 获取歌单详情
 * @param {String} id 歌单ID
 */
export function getPlayListDetail (id) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${baseUrl}/playlist/detail/?id=${id}`, // 仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log('res', res)
        if (res.statusCode === 200) {
          resolve({
            playlist: res.data.playlist,
            privileges: res.data.privileges
          })
        }
      },
      fail (err) {
        console.error(err)
        reject(err)
      }
    })
  })
}

/**
 * 获取排行榜
 * @param {Number} id
 */
export function getTopList (id = 0) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${baseUrl}/top/list?idx=${id}`, // 仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log('res', res)
        if (res.code === 200) {
          resolve({
            playlist: res.playlist,
            privileges: res.privileges
          })
        }
      },
      fail (err) {
        console.error(err)
        reject(err)
      }
    })
  })
}

/**
 * 获取独家放送
 */
export function privatecontent () {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${baseUrl}/personalized/privatecontent`, // 仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log('res', res)
        if (res.code === 200) {
          resolve(res.result)
        }
      },
      fail (err) {
        console.error(err)
        reject(err)
      }
    })
  })
}

export default {
  personalized,
  getPlayListDetail,
  getTopList,
  privatecontent
}
