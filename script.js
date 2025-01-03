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
        enterTL.to(".navelem h5",{
          display:"block",
          duration:0,
        })
        enterTL.to(".navelem h5 span", {
          display: "inline-block",
          opacity: 1,
          y: 0,
          stagger: {
            amount: 0.7,
          },
          duration: 1,
          // ease: "back.out(1.4)",
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
        endTL.to(".navelem h5 span", {
          opacity: 0,
          display: "none",
          y: 35,
          stagger: {
            amount: 0.5,
          },
          duration: 0.5,
          ease: "power1.out",
        });
        endTL.to(".navelem h5",{
          display:"none",
          duration:0,
        })
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
function page2Animation() {
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
      gsap.to(elem.childNodes[3],{
        x:dets.x - elem.getBoundingClientRect().x-70,
        y:dets.y - elem.getBoundingClientRect().y-140,
        duration:0.4,
      })
    })
      
  })
  
  // getbounding react ee div che ene rectangular shape che enu detail moklave and ene dets.x thi minus karvathi image che ee pointer ni ghanin= najik aai jay
  // dets.x - elem.getBoundingClientRect().x aavu ne ema -70 karyu to image ekdam middle ma aai gai
}
function page3Animation() {
  var play=document.querySelector(".play i");
  var video=document.querySelector(".page3 video");
  play.addEventListener("mouseenter",()=>{
    gsap.to(".play h4",{
      opacity:1,
      transform:"translateY(0px)"
    })
  })
  play.addEventListener("mouseleave",()=>{
    gsap.to(".play h4",{
      opacity:0,
      transform:"translateY(15px)"
    })
  })
  
  play.addEventListener("click",()=>{
    video.play();
    gsap.to(video,{
      transform:"scaleX(1) scaleY(1)",
      borderRadius:"0px",
      opacity:1,
      duration:1,
    })
  })
  
  video.addEventListener("click",()=>{
    video.load(); //load krva thi jyr fari play par click karis to akho video fari chalu thse and jya thi chhodyo che tya thi chalu karvo hoy to use load instead of pause
    gsap.to(video,{
      transform:"scaleX(0.7) scaleY(0)",
      borderRadius:"50px",
      opacity:0,
      duration:1.2,
    })
  })
}
function page5Animation() {
  var sections=document.querySelectorAll(".section-right")
sections.forEach((section)=>{
  console.log(section.children);
  // var image=section.children[0]; khabar nai kem but img pr event handler kam nthi kri rahyu
  var video=section.children[1];
  section.addEventListener("mouseenter",()=>{
  //  console.log("helo");
  video.style.opacity=1;
  video.play();
  })
  section.addEventListener("mouseleave",()=>{
  //  console.log("bye");
  video.style.opacity=0;
  video.pause();
  video.currentTime=0;

  })
})
}
navAnimation();
page2Animation();
page3Animation();
page5Animation();
var cards = document.querySelectorAll(".infocard");
cards.forEach((card) => {
  var mask = card.querySelector(".mask");

  card.addEventListener("mouseenter", () => {
    gsap.fromTo(mask,{ 
      y: "-100%",
      opacity: 0 
    }, // Start above and invisible
    {
      y: "0%",
      opacity: 1,
      duration: 0.4,
      ease: "power2.out"
    } // Move into view and become visible
    );
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(mask, {
      y: "100%", // Move back above
      opacity: 0, // Fully invisible
      duration: 0.35,
      ease: "power2.in",
    });
  });
});


let uiux=document.querySelector(".uiux");
let summary=document.querySelector(".uiux summary");
let arrow=document.querySelector(".uiux h1 i");
let flag=1
summary.addEventListener("click",()=>{
  if(flag==1){
    gsap.to(uiux,{
      borderTop:"2px solid #333",
      duration:.5
    })
    gsap.to(arrow,{
      rotate:180,
      duration:.5
    })
   
    flag=0
  }
  else{
    gsap.to(uiux,{
      borderTop:"2px solid #fff",
      duration:.5
    })
    gsap.to(arrow,{
      rotate:0,
      duration:.5
    })
    flag=1
  }
})


let product=document.querySelector("#product");
let summary2=document.querySelector("#product summary");
let arrow2=document.querySelector("#product h1 i");
let mark=0
summary2.addEventListener("click",()=>{
  if(mark==1){
    gsap.to(product,{
      borderTop:"2px solid #333",
      duration:.5
    })
    gsap.to(arrow2,{
      rotate:180, //fari uper lai ja
      duration:.5
    })
    mark=0
  }
  else{
    gsap.to(product,{
      borderTop:"2px solid #fff",
      duration:.5
    })
    gsap.to(arrow2,{
      rotate:0, //means jevu hatu evu kari de
      duration:.5
    })
    mark=1
  }
})
