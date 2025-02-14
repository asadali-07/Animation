// gsap.from("#page1 .box",{
//    scale:0,
//    duration: 2,
//    rotate:720,
//     delay:1
// })
// gsap.from("#page2 .box",{
//     scale:0,
//     duration: 2,
//     rotate:720,
//     // scrollTrigger:"#page2 .box"
//     scrollTrigger:{
//         trigger:"#page2 .box",
//         scroller:"body",
//         markers:true,
//         start:"top 50%",
//         end:"top 30%",
//         scrub:2,
//     }
//  })
//  gsap.from("#page3 .box",{
//     scale:0,
//     duration: 2,
//     rotate:720,
//     // scrollTrigger:"#page3 .box"
//     scrollTrigger:{
//         trigger:"#page3 .box",
//         scroller:"body",
//     }
//  })

gsap.to("#page2 h1",{
    transform:'translateX(-150%)',
    scrollTrigger:{
        trigger:"#page2 ",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true

    }
})