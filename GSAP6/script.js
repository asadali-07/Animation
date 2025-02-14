function breakElement(){
let h1=document.querySelector('h1');
let h1Text=h1.textContent;
let h1TextArray=h1Text.split('');
h1.textContent='';  // Clear h1 element
h1TextArray.forEach(function(element,idx) {
    if(idx<h1TextArray.length/2){
        var s = document.createElement("SPAN");
        s.setAttribute("class","a")
    }else{
        var s = document.createElement("SPAN");
        s.setAttribute("class","b")
    }
    var txt = document.createTextNode(`${element}`);
    s.appendChild(txt);
    h1.appendChild(s)
});
}

breakElement();

gsap.from('h1 .a',{
    opacity:0,
    y:80,
    duration:.53,
    delay:.5,
    stagger:.23
})
gsap.from('h1 .b',{
    opacity:0,
    y:80,
    duration:.53,
    delay:.5,
    stagger:-.23
})
