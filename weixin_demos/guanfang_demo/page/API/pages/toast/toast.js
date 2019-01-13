Page({
  onShareAppMessage() {
    return {
      title: '消息提示框',
      path: 'page/API/pages/toast/toast'
    }
  },

  toast1Tap() {
    wx.showToast({
      title: '默认'
    })
  },

  toast2Tap() {
    wx.showToast({
      title: 'duration 3000',
      duration: 3000
    })
  },

  toast3Tap() {
    wx.showToast({
      title: 'loading',
      icon: 'loading',
      duration: 5000
    })
  },

  hideToast() {
    wx.hideToast()
  }
})
