
AFRAME.registerComponent('single-action-button', {
    schema: {
      event: { type: 'string' },
    },
  init: function () {
      // These first two lines tell Hubs' interaction system to pay attention to us
      console.log("jkaf",this.data.event)
      this.el.classList.add('interactable')
      this.el.setAttribute('is-remote-hover-target', '')
      console.log("click ho jaa bhaiiii",this.el)
  
      // This tag tells the button system to emit 'interact' events on our object
      this.el.setAttribute('tags', { singleActionButton: true })
  
      // Finally, we'll forward the 'interact' events to our entity for convenience
      this.el.object3D.addEventListener('interact', () =>{
      console.log("interact",this.el);  
      this.el.emit(this.data.event)

      },
      this.el.addEventListener("click",()=>{
      console.log("clickeddd")
      })
      )
    },
  })