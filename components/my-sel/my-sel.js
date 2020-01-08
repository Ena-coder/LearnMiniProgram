// components/my-sel/my-sel.js
Component({
  data: {
    count:0
  },
  methods:{
    incrementCount(num){
      this.setData({
        count:this.data.count + num
      })
    }
  }
})
