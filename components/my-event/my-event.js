// components/my-event/my-event.js
Component({
  methods: {
    handleIncrement(){
      this.triggerEvent('increment',{name:'lily',age:18})
    }
  }
})
