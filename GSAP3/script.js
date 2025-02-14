let path=`M 10 100 Q 500 100 990 100`
const finalPath="M 10 100 Q 500 100 990 100"
const string=document.getElementById("string");
string.addEventListener("mousemove",(dets)=>{
    path=`M 10 100 Q ${dets.x} ${dets.y} 990 100`
    gsap.to("svg path",{
        attr:{d:path},
        duration:.2,
        ease:"power3.out"
    })
})
string.addEventListener("mouseleave",(dets)=>{
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:1.5,
        ease:"elastic.out(1,0.2)"
    })
})
