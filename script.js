// No need can be done directly from css
// gsap.to(".move",{
//     duration:10,
//     delay:1,
//     x:"-100%",
//     ease:"linear",
//     repeat:-1
// })

function navAnimation() {
  var nav = document.querySelector("nav");
  var enterTL;
  var endTL;

  nav.addEventListener("mouseenter", () => {
    // Reverse the leave animation if it's running
    // reverse means ke jetlu animation mouse leave par karyu chee bs etlu j rakh ne tya thi ene pachu mokli de kmk mouse enter thyu che
    if (endTL && endTL.isActive()) {
      endTL.reverse();
    } else {
        if(enterTL && enterTL.progress()==1) //means apde mouse andar rakhyu ne animation thai gyu neee apdi condition na lidhe niche vadi apde ane restart kkaravu pdse
            enterTL.restart();
      // Create or play the enter animation
      // joo mouse enter pr starting thi animation baki che tooo akhu animation karo
      else if (!enterTL) {
        enterTL = gsap.timeline();
        enterTL.to(".nav-bottom", {
          duration: 0.5,
          height: "17vh",
        });
        enterTL.to(".navelem h5", {
          display: "block",
          opacity: 1,
          y: 0,
          stagger: {
            amount: 0.4,
          },
          duration: 1,
          ease: "back.out(1.4)",
        });
      } else {
        // jo mouse leave kryu to aa animation reverrse thatu hse brbr but pachu leave kari trt enter karyu toooo already amuk part animate thayela j che jem ke 2 section na h4 aai gya baki na lavana che to tya thij continue karooo fari pehle thi animation karso to overwrite thase
        enterTL.play(); // Resume if the timeline already exists
      }
    }
  });

  nav.addEventListener("mouseleave", () => {
    // Reverse the enter animation if it's running
    if (enterTL && enterTL.isActive()) { //isActive jaruri che kmk jooo animation pati jse neee toy enterTL jode timeline hase brbr nee animation pati gyu che too leave vadu animation thavu joie naaa kee enter vadu animation reverse thavu joie
      enterTL.reverse();
    } else {
      // Create or play the leave animation
      if(endTL && endTL.progress()==1)
        endTL.restart();
      else if (!endTL) {
        endTL = gsap.timeline();
        endTL.to(".navelem h5", {
          opacity: 0,
          display: "none",
          y: 35,
          stagger: {
            amount: 0.5,
          },
          duration: 0.5,
          ease: "power1.out",
        });
        endTL.to(".nav-bottom",{
            duration: 0.5,
            height: "0vh",
        },"-=0.4")
      } else {
        endTL.play(); // Resume if the timeline already exists
      }
    }
  });
}
navAnimation();

var elems=document.querySelectorAll(".right-elem");

elems.forEach((elem)=>{
  elem.addEventListener("mouseenter",()=>{
    gsap.to(elem.childNodes[3],{
      opacity:1,
      scale:1,
      duration:0.2,
    })
  })

  elem.addEventListener("mouseleave",()=>{
    gsap.to(elem.childNodes[3],{
      opacity:0,
      scale:0,
      duration:0.3,
    })
  })
  elem.addEventListener("mousemove",(dets)=>{
    console.log(elem.getBoundingClientRect()," and: ",dets.x);
    console.log(dets.x - elem.getBoundingClientRect().x, "final output");
    gsap.to(elem.childNodes[3],{
      x:dets.x - elem.getBoundingClientRect().x-70,
      y:dets.y - elem.getBoundingClientRect().y-140,
      duration:0.4,
    })
  })
    
})

// getbounding react ee div che ene rectangular shape che enu detail moklave and ene dets.x thi minus karvathi image che ee pointer ni ghanin= najik aai jay
// dets.x - elem.getBoundingClientRect().x aavu ne ema -70 karyu to image ekdam middle ma aai gai