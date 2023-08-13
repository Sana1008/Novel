
/**
 * add event on element
 */

const addEventOnelem = function (elem, type, callback) {
    if (elem.length > 1) {
      for (let i = 0; i < elem.length; i++) {
        elem[i].addEventListener(type, callback);
      }
    } else {
      elem.addEventListener(type, callback);
    }
  }
  

  /**
   * toggle navbar
   */
  
  const navbar = document.querySelector("[data-navbar]");
  const navbarLinks = document.querySelectorAll("[data-nav-link]");
  const navToggler = document.querySelector("[data-nav-toggler]");
  
  const toggleNavbar = function () {
    navbar.classList.toggle("active");
    navToggler.classList.toggle("active");
  }
  
  addEventOnelem(navToggler, 'click', toggleNavbar);
  
  const closeNavbar = function () {
    navbar.classList.remove("active");
    navToggler.classList.remove("active");
  }
  
  addEventOnelem(navbarLinks, "click", closeNavbar);
  
  
  
  /**
   * header active on scroll down to 100px
   */
  
  const header = document.querySelector("[data-header]");
  
  const activeHeader = function () {
    if (window.scrollY > 100) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  }
  
  addEventOnelem(window, "scroll", activeHeader);
  
  
  
  /**
   * filter tab
   */
  
  const tabCard = document.querySelectorAll("[data-tab-card]");
  
  let lastTabCard = tabCard[0];
  
  const navigateTab = function () {
    lastTabCard.classList.remove("active");
    this.classList.add("active");
    lastTabCard = this;
  }
  
  addEventOnelem(tabCard, "click", navigateTab);

  /**
   * Review & Comments
   */
  // Select all elements with the "i" tag and store them in a NodeList called "stars"
const stars = document.querySelectorAll(".stars i");

// Loop through the "stars" NodeList
stars.forEach((star, index1) => {
  // Add an event listener that runs a function when the "click" event is triggered
  star.addEventListener("click", () => {
    // Loop through the "stars" NodeList Again
    stars.forEach((star, index2) => {
      // Add the "active" class to the clicked star and any stars with a lower index
      // and remove the "active" class from any stars with a higher index
      index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
    });
  });
});

