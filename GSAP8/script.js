const body=document.querySelector('body');
const cursor=document.getElementById('cursor');

body.addEventListener('mousemove',(dets)=>{
gsap.to(cursor,{
    x:dets.x,
    y:dets.y,
    duration:0.5
 });
})

const tl=gsap.timeline()

tl.from('nav h1',{
    y:-100,
    duration:.77,
    delay:.33
})
tl.from('nav .part2 h4,.req',{
    y:-100,
    duration:.55,
    stagger:.11
})

tl.from('.main1 h3',{
    x:-450,
    duration:.66,
})

tl.from('.main1 p',{
    x:-460,
    duration:.55,
})

tl.from('.main1 button',{
    x:-450,
    duration:.44,
})

tl.from('.main2 img',{
    x:600,
    duration:.66,
})
gsap.from(".service h3",{
    x:-200,
    opatcity:0,
    duration:.55,
    scrollTrigger:{
        trigger:".service h3",
        scroller:"body",
        start:"top 50%",
        end:"top 70%",
        scrub:2,
    }
 })
 gsap.from(".service p",{
    x:1200,
    opatcity:0,
    duration:.77,
    scrollTrigger:{
        trigger:".service p",
        scroller:"body",
        start:"top 50%",
        end:"top 70%",
        scrub:2,
    }
 })
window.addEventListener("wheel",(dets)=>{
    if(dets.deltaY>0){
      gsap.to(".images",{
          transform:"translateX(-100%)",
          duration:4,
          repeat:-1,
          ease:"none"
      })
    }else{
      gsap.to(".images",{
          transform:"translateX(0%)",
          duration:4,
          repeat:-1,
          ease:"none"
      })
    }
  })
  gsap.from(".cardshadow",{
    y:-300,
    opacity:0,
    duration:.55,
    stagger:.11,
    scrollTrigger:{
        trigger:".cardshadow",
        scroller:"body",
        start:"top 0%",
        end:"top 70%",
        scrub:2,
    }
  })
  gsap.from(".cardblack",{
    y:300,
    opacity:0,
    duration:.55,
    stagger:.11,
    scrollTrigger:{
        trigger:".cardblack",
        scroller:"body",
        start:"top 60%",
        end:"top 70%",
        scrub:2
    }
  })
  gsap.from(".purposal",{
    y:300,
    opacity:0,
    duration:.55,
    stagger:.11,
    scrollTrigger:{
        trigger:".purposal",
        scroller:"body",
        start:"top 90%",
        end:"top 95%",
        scrub:2,
    }
  })
  gsap.from(".case",{
    y:300,
    opacity:0,
    duration:.55,
    stagger:.11,
    scrollTrigger:{
        trigger:".case",
        scroller:"body",
        start:"top 90%",
        end:"top 95%",
        scrub:2,
    }
 })
 gsap.from(".case1",{
    y:300,
    opacity:0,
    duration:.55,
    stagger:.11,
    scrollTrigger:{
        trigger:".case1",
        scroller:"body",
        start:"top 90%",
        end:"top 95%",
        scrub:2,
    }
 })
 gsap.from(".last",{
    y:300,
    opacity:0,
    duration:.55,
    stagger:.11,
    scrollTrigger:{
        trigger:".last",
        scroller:"body",
        start:"top 100%",
        end:"top 110%",
        scrub:2,
    }
  })
