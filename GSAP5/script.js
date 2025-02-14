// const tl=gsap.timeline({paused:true})
const tl=gsap.timeline()
const open=document.getElementById("open")
const close=document.getElementById("close")

tl.to("#full",{
    right:0,
    duration:.33,
  })
tl.from("#full h4",{
  x:150,
  opacity:0,
  duration:.55,
  stagger:0.22
})

tl.from("#full i",{
    x:100,
    right:0,
    opacity:0,
    duration:.22
})
tl.pause()

open.addEventListener("click",()=>{
    tl.play()
})

close.addEventListener("click",()=>{
    tl.reverse()
})