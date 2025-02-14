// gsap.to("#box1",{
//    x:900,
//    duration:1,
//    delay:1,
//    borderRadius:"50%"
// })
// gsap.to("#box2",{
//     x:900,
//     duration:1,
//     delay:2,
//     rotate:180,
//     borderRadius:50,
//  })
//  gsap.to("#box3",{
//     x:900,
//     duration:1,
//     delay:3,
//     rotate:360,
//     borderRadius:50
//  })
var tl=gsap.timeline()
tl.from(" nav h2",{
    y:-150,
    duration:.65,
    delay:0.3
})
tl.from("li",{
    y:-150,
    duration:.65,
    delay:0.3,
    stagger:.2
})
tl.from("#part1 h2,p",{
    x:-1000,
    duration:1,
    ease:Power3.easeInOut,
    stagger:.5

})

tl.from("#part2",{
    x:1000,
    duration:1,
    ease:Power3.easeInOut
})