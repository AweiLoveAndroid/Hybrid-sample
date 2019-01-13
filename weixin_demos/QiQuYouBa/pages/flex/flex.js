// pages/flex/flex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contents:"这是按钮的文字内容",
    /* 包含两个对象的数组 */
    array:[{
      name:"Mary",
    },{
      name: "Tom",
    }],
    condition:true,
    length:6,

    /** 文本的数值 */
    num:0,
  },

  /** 按钮的事件，点击一次，数值加一 */
  addOne: function() {
    var number = this.data.num;
    number++;
    this.setData({
      num:number
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