//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    isShow: false
  },
  myevent () {
    console.log('点击了确定')
    this.toogleDialog()
  },
  confirmThis () {
    console.log('点击了取消按钮')
    this.toogleDialog()
  },
  toogleDialog () {
    // 显示弹窗组件
    this.setData({
      isShow: !this.data.isShow
    })
  }
})
