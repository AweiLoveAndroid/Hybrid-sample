// pages/custom/custom.js
Page({

 /**
   * 页面的初始数据
   */
  data: {
    /** scrollview */
    lists: [
      {
        id: 0,
        title: "风景好1",
        imgUrl: '../images/banner1.jpg',
      },
      {
        id: 1,
        title: "风景好2",
        imgUrl: '../images/banner2.jpg',
      },
      {
        id: 2,
        title: "风景好3",
        imgUrl: '../images/banner3.jpg',
      },
      {
        id: 3,
        title: "风景好4",
        imgUrl: '../images/banner4.jpg',
      },
      {
        id: 4,
        title: "风景好5",
        imgUrl: '../images/banner5.jpg',
      }
    ],


  },

  /** 把id通过url传送过去 */
  detail:function(event){
    var postId = event.currentTarget.dataset.id;
    wx.navigateTo({
      url:'../custom2/custom2?id=' + postId,
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})