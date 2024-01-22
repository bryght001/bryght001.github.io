// ======= togglemenu script =================
let menuanime = document.querySelector('.toggle__btn');
let menutoggle = document.getElementById('toggle__btn'), navmenu = document.getElementById('nav__unorderedlist');

// when i click the mentoggle button, the menu bar get tohhled
menutoggle.onclick = function(){
  menuanime.classList.toggle('active'), 
  navmenu.classList.toggle('show-menu');
};


// this is the carousel for services section
// lets define our constants firstly
let slider = document.querySelectorAll(".servicesCarousel_wrapper .slide");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let thumbnailsSlider = document.querySelectorAll(".imgThumbnailSlides  .imgThumbnailsItems");

//config param
let countSlider = slider.length;
let sliderActive = 0;

//config next button
next.onclick = function(){
  sliderActive = sliderActive + 1;
  if(sliderActive >= countSlider){
    sliderActive = 0;
  }
  showSlider();
} 

//config prev button
prev.onclick = function(){
  sliderActive = sliderActive - 1;
  if(sliderActive < 0){
    sliderActive = countSlider - 1;
  }
  showSlider();
}

//auto run slider
let refreshInterval = setInterval(() => {
  next.click();
}, 3000);
//config showSlider function
function showSlider(){
  // remove old active
  let sliderActiveOld = document.querySelector(".servicesCarousel_wrapper .slide.active");
  let thumbnailsActiveOld = document.querySelector(".imgThumbnailSlides  .imgThumbnailsItems.active");
  sliderActiveOld.classList.remove("active");
  thumbnailsActiveOld.classList.remove("active");
  
//add new active
  slider[sliderActive].classList.add("active");
  thumbnailsSlider[sliderActive].classList.add("active");
  
//clear auto time run interval
 clearInterval(refreshInterval);
 refreshInterval = setInterval(() => {
  next.click();
}, 3000);
}

//click thumbnails
thumbnailsSlider.forEach((thumbnailsSlider, index) =>{
  thumbnailsSlider.addEventListener("click", () =>{
    sliderActive = index;
    showSlider();
  })
})