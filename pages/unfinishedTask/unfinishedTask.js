// pages/unfinishedTask/unfinishedTask.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        result:'请求后台中.....'
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that=this;
        this.getData(that);
    },
    getData(that){
        wx.request({
          url: 'http://localhost:8088/helloWechat',
          method:'GET',
          data:{
              id:666
          },
          header:{
              'content-type':'application/json'  //默认值
          },
          success(res){
              console.log(res.data);
              console.log(that);
              that.setData({
                result:res.data
              })
          }
        })
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