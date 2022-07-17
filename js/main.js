let controlicon = document.querySelectorAll(".control-icon .control");
let sec = document.querySelectorAll(".section");
let Allsec = document.querySelector(".main-content");

function pageTransition(){
  for (let i = 0; i< controlicon.length;i++){
    controlicon[i].addEventListener('click', function(){
          let currbtn = document.querySelectorAll('.active-btn');
          currbtn[0].className = currbtn[0].className.replace('active-btn', '');
          this.className += ' active-btn';
      })
  }
  //section active
  Allsec.addEventListener('click', (e) => {
    let id = e.target.dataset.id;
    if(id){
      sec.forEach((section) => {
          section.classList.remove('active');
      })
      let element = document.getElementById(id);
      element.classList.add('active');
    }
  })

  // toggle theme
  let btnlight = document.querySelector(".light-icon");
  btnlight.addEventListener('click', () => {
    let body = document.querySelector("body");
      body.classList.toggle("light-mode");
  })
}

pageTransition();

//////////////////// Start ABOUT ME
let projects = document.querySelectorAll(".portfolio .box");
let h1 = document.querySelectorAll(".about .info .right-about .box .text h1");

h1[0].innerHTML = `
<h1>${projects.length}+</h1>
`

let countDownDate = new Date("Jan 1, 2022 0:0:0").getTime();

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = (dateNow - countDownDate);


  // Get Time Units
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));

  h1[1].innerHTML = `
  <h1>${days}+</h1>
  `

}, 1000);


//////////////////// End ABOUT ME


/////////////////// Start Skills
let skills = document.querySelector(".about .skills");
let spans = document.querySelectorAll(".about .skills .all-progres .box .progres .prog-con span");

window.onscroll = function () {
  if (window.scrollY >= skills.offsetTop - 200) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};

////////////////// End Skills



function download() {
  const blob = new Blob(['../Cream Minimalist Professional CV Resume.pdf'], {type:'application/pdf'});
  
  downloadfile(blob, "Mohamed-Elkady.pdf");
}

function downloadfile(blob, fileName) {
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  a.click();
  a.remove();
  document.addEventListener("focus", w=>{window.URL.revokeObjectURL(blob)});
}
