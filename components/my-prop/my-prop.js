// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:'我是默认的标题',
      observer(newVal,oldVal){
        console.log(newVal,oldVal)
      }
    },
    content:{
      type:String,
      value:'我是默认的组件内容'
    }
  },

  externalClasses: ['title-class']
})
