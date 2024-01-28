const hamburger = document.querySelector(".ham");
    const navsub = document.querySelector(".navbar-buttons");
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle("change")
      navsub.classList.toggle("nav-change")
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