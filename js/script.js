const links = document.querySelector(".links"),
headerEl = document.querySelector("header"),
toggleBtn = document.querySelector(".toggle-btn"),
toogleBtnIcon = document.querySelector(".toggle-btn i"),
popupViews = document.querySelectorAll(".popup-view"),
popupBtns = document.querySelectorAll(".popup-btn"),
closeBtns = document.querySelectorAll(".close-btn");

// header change bg animation 
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        headerEl.classList.add("header-scrolled");
    } else if (window.scrollY <= 50) {
        headerEl.classList.remove("header-scrolled");
    }
});

// header shrink scroll animation
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.padding = "10px 50px 5px 50px";
    document.getElementById("logo").style.height = "5vw";
  } else {
    document.getElementById("header").style.padding = "20px 50px";
    document.getElementById("logo").style.height = "15vw";
  }
}

// open - close toggle mobile menu 
toggleBtn.onclick = function () {
    links.classList.toggle("open")
    const isOpen = links.classList.contains("open")

    toogleBtnIcon.classList = isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars"
}

// prodcut quick view btn
var popup = function(popupClick){
  popupViews[popupClick].classList.add("active");
}

popupBtns.forEach((popupBtn, i) => {
  popupBtn.addEventListener ("click", () => {
    popup(i);
  });
});

// close btn
closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    popupViews.forEach((popupView) => {
      popupView.classList.remove("active");
    });
  });
});