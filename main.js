let header = document.getElementById("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      header.style.height = "10vh";  
      /*header.style.backgroundColor = '#d9f0ef';*/
      /**header.style.backgroundColor = ' #ebdfdf';*/
     
    } else {
      header.style.height = "13vh"; 
      header.style.backgroundColor = '#f7f5f2'
    
    }
});


let menuToggle = document.getElementById("menu-toggle");
let navbar = document.getElementById("navbar");

    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });


 
