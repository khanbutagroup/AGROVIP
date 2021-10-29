// OPEN NAVBAR
document.querySelector(".open-btn").onclick = function () {
  document.querySelector(".nav-list").classList.toggle("active");
  this.classList.toggle("show-nav");
  document.body.classList.toggle("active")
  window.scrollTo(0,0)
}


// OPEN SUBMENU
var acc = document.getElementsByClassName("drop-parent");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    var panel = this.children[0].querySelector(".dropdown-submenu");
    console.log(panel);
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


// OPEN LANG
document.querySelector(".nav-settings").onclick = () => {
  document.querySelector(".nav-settings-list").classList.toggle("active");
};


// TAB
function openTab(evt, index) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tab-pane");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(index).style.display = "block";
  evt.currentTarget.className += " active";
}

if(document.getElementById("opentab")){
  document.getElementById("opentab").click();
}


// SWIPER JS
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 50,
  loop: true,
  loopFillGroupWithBlank: true,
  speed: 700,
  autoplay: {
      delay: 3500,
      disableOnInteraction: false,
  },
  breakpoints: {
      991: {
          slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
    },
  },
});


// SCROLL-REVEAL
ScrollReveal().reveal('.animation', {
  duration: 1300,
  distance: "50px",
  interval: 500,
  reset: true
});

ScrollReveal().reveal('.left', {
  duration: 1500,
  origin: "left",
  distance: "150px",
  reset: true 
});

ScrollReveal().reveal('.right', {
  duration: 1500,
  origin: "right",
  distance: "150px",
  reset: true 
});

ScrollReveal().reveal('.top', {
  duration: 1500,
  origin: "top",
  distance: "150px",
  reset: true 
});