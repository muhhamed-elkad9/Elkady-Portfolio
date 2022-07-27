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
  } if (window.scrollY < skills.offsetTop - 200) {
    spans.forEach((span) => {
      span.style.width = "0";
    });
  }
};

////////////////// End Skills


// fetch('https://api.github.com/users/muhhamed-elkad9/repos')
// .then((response) => response.json())
// .then((repo)=>{

//   repo.forEach((repos) => {

    
//     for (let i = 0; i < repo.length; i++) {

//      let count = repos.name[i];

//      console.log(count)

//       let link = 'https://muhhamed-elkad9.github.io/'+ count +'/'
//       let git = 'https://github.com/muhhamed-elkad9/'+ count +''
    
//       document.querySelector(".boxss .row").innerHTML = `
//       <div class="col-lg-6 col-md-6 col-sm-12">
//               <div class="box">
//                 <div class="image">
//                   <img src="img/Kasper-Template-Two.png" alt="">
//                 </div>
//                 <div class="text">
//                   <h2>project Source</h2>
//                   <div class="pro-icon">
//                       <a href="${git}" target="_blank">
//                         <i class="fa-brands fa-github"></i>
//                       </a>
//                       <a href="${link}" target="_blank">
//                         <i class="fa-solid fa-link"></i>
//                       </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//       `
//     }
    
//   })


  

// });


// function download() {
//   const blob = new Blob(['../Cream Minimalist Professional CV Resume.pdf'], {type:'application/pdf'});
  
//   downloadfile(blob, "Mohamed-Elkady.pdf");
// }

// function downloadfile(blob, fileName) {
//   const url = window.URL.createObjectURL(blob);
//   const a = document.createElement("a");
//   a.href = url;
//   a.download = fileName;
//   a.click();
//   a.remove();
//   document.addEventListener("focus", w=>{window.URL.revokeObjectURL(blob)});
// }




////////////////// End contact
let nameErr = document.getElementById("errName")
let emailErr = document.getElementById("erremail")
let subErr = document.getElementById("errsub")
let areaErr = document.getElementById("errarea")
let sendErr = document.getElementById("errsend")

function errName() {
  let name = document.getElementById("contact-name").value;

  if (name.length == 0) {
    nameErr.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameErr.innerHTML = "Write full Name";
    return false;
  }
  nameErr.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function erremail() {
  let email = document.getElementById("contact-email").value;

  if (email.length == 0) {
    emailErr.innerHTML = "Email is required";
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailErr.innerHTML = "Email Invalid";
    return false;
  } 
  emailErr.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function errsub() {
  let sub = document.getElementById("contact-sub").value;
  let required = 10;
  let check = required - sub.length;

  if (sub.length == 0) {
    subErr.innerHTML = "Subject is required";
    return false;
  }
  if (check > 0) {
    subErr.innerHTML = `${check} more characters required`;
    return false;
  } 
  subErr.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function errarea() {
  let area = document.getElementById("contact-area").value;
  let required2 = 30;
  let check2 = required2 - area.length;

  if (area.length == 0) {
    areaErr.innerHTML = "MESSAGE is required";
    return false;
  }
  if (check2 > 0) {
    areaErr.innerHTML = `${check2} more characters required`;
    return false;
  } 
  areaErr.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validform() {
  if (!errName() || !erremail() || !errsub() || !errarea()) {
    sendErr.style.display = "block"
    sendErr.innerHTML = "please fix error to submit"
    setTimeout(function () {
      sendErr.style.display = "none"
    }, 3000)
    return false;
  }
}
////////////////// End contact