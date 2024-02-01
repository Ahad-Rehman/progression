const hamburger = document.querySelector(".ham");
const navsub = document.querySelector(".navbar-buttons");
const navsub1 = document.querySelector(".main2");
const navsub2 = document.querySelector(".main3");
const navsub3 = document.querySelector(".main4");
const bodd = document.querySelector(".main1");
const bodd3 = document.querySelector(".main5");
const bodd4 = document.querySelector(".footer-sec");
const bodd5 = document.querySelector(".typingwala");
const bodd6 = document.querySelector(".main-heading-image");
const bodd7 = document.querySelector(".vector-group");

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle("change")
  navsub.classList.toggle("nav-change")
  navsub1.classList.toggle("change-body")
  navsub2.classList.toggle("change-body")
  navsub3.classList.toggle("change-body")
  bodd.classList.toggle("change-body")
  bodd3.classList.toggle("change-body")
  bodd4.classList.toggle("change-body")
  bodd5.classList.toggle("change-body")
  bodd6.classList.toggle("change-body")
  bodd7.classList.toggle("change-body")
  // navsub.classList.toggle("nav-change2")
});

const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
    else {
      entry.target.classList.add('hidden');
    }
  });
});
hiddenElements.forEach((el) => observer.observe(el));

