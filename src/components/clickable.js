AFRAME.registerComponent('clickable', {
    schema: {},
    init: function () {
        console.log("hii",this.el)
       //this.el.setAttribute('single-action-button','event:click')
       this.el.addEventListener("click",()=>{
            console.log("inside event listener",this.el)
        })
    },
    update: function () {},
    tick: function () {},
    remove: function () {
        this.el.removeEventListener("click")
    },
    pause: function () {},
    play: function () {}
  });