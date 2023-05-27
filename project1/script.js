var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  var swiper = new Swiper(".explore-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    // centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      200: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      510: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      758: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      900: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });


  let playBtn = document.querySelector('.movies-play');
  let video = document.querySelector('.video-container'); 
  let closeBtn = document.querySelector('.close');
  
  playBtn.onclick = () => {
    video.classList.add(".show-video");
  };