import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const contentArray = [
  "RS Vision Consulting has over 20+ years of experience combined in Automotive, OEM, telematics and video telematics.",
  "Having worked across all areas of business, we are confident that our team will quickly gain a solid understanding of all elements of your organisation.",
  "This will allow our team to rapidly deliver tangible benefits and value" ,
  "Whilst ensuring any changes are in harmony with your existing business and team."
];

const swiperWrapper = document.getElementById("swiper-wrapper");
// Create swiper slides dynamically
contentArray.forEach((sentence) => {
  const swiperSlide = document.createElement("div");
  swiperSlide.className = "swiper-slide";
  swiperSlide.textContent = sentence;
  swiperWrapper.appendChild(swiperSlide);
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,
  autoplay: {
    delay: 5000,
  },
  effect: "coverflow",
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 10,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});
