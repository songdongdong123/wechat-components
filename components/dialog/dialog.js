// components/dialog/dialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '弹窗组件的标题'
    },
    msg: {
      type: String,
      value: '弹窗主要展示信息'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    confirmThis () {
      this.triggerEvent('confirmEvent')
    },
    cancelThis () {
      this.triggerEvent('confirmThis')
    }
  }
})
