const main=document.getElementById('main');
const cursor=document.getElementById('cursor');
const image=document.getElementById('image');

main.addEventListener('mousemove',(dets)=>{
gsap.to(cursor,{
    x:dets.x,
    y:dets.y,
    duration:0.5
 });
})
image.addEventListener("mouseenter",()=>{
    cursor.innerHTML = "View More";
    gsap.to(cursor,{
        scale:1.7,
        duration:0.5
    });
})

image.addEventListener("mouseleave",()=>{
    cursor.innerHTML = "";
    gsap.to(cursor,{
        scale:1,
        duration:0.5
    });
});
