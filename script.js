gsap.to(".move",{
    duration:10,
    delay:1,
    x:"-100%",
    ease:"linear",
    repeat:-1
})

var nav=document.querySelector("nav");
nav.addEventListener("mouseenter",()=>{
    console.log("hiii");
    var tl=gsap.timeline();
    tl.to(".nav-bottom",{
        duration:0.5,
        height:"24vh"
    })
    tl.to(".navelem h5 span",{
        display:"inline-block",
        opacity:1,
        y:0,
        stagger:{
            amount:0.5
        },
        duration:1,
        ease: "back.out(1.4)",
    })
})
nav.addEventListener("mouseleave",()=>{
    console.log("hiii");
    var tl=gsap.timeline();
    tl.to(".navelem h5 span",{
        opacity:0,
        display:"none",
        y:35,
        stagger:{
            amount:0.6
        },
        duration:0.5,
        ease: "power1.out(1)",
    })
    tl.to(".nav-bottom",{
        duration:0.5,
        height:"0vh"
    },"-=0.4")
})
