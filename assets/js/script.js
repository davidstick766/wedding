// Navbar on scroll 
$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      $(".navbar-dropdown.transparent").css("background", "black");
    }

    else {
      $(".navbar-dropdown.transparent").css("background", "none");
    }
  })
})

//RECENT WORK CAROUSEL
new Glider(document.querySelector('.glider'), {
  slidesToShow: 4,
  slidesToScroll: 4,
  draggable: true,
  dots: '.dot',
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  }
})

// TESTIMONIAL CAROUSEL
new Glider(document.querySelector('.glider2'), {
  slidesToShow: 3,
  slidesToScroll: 3,
  draggable: true,
  dots: '.dot2',
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  }
})

// Initialize AOS
AOS.init({
  duration: 1200,
});

