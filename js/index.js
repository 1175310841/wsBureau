// 刷新页面自动回到顶部
window.onbeforeunload = function () {
  document.documentElement.scrollTop = 0; //ie下
  document.body.scrollTop = 0; //非ie
};
// y轴滚动条滚动到500以上出现导航栏
const navEl = document.querySelector(".navigation");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 500) {
    if (!navEl.classList.contains("sticky")) {
      navEl.classList.add("sticky");
    }
  } else {
    navEl.classList.remove("sticky");
  }
});

// 滚动动画效果
const staggeringOption = {
  delay: 300,
  distance: "50px",
  duration: 500,
  easing: "ease-in-out",
  origin: "bottom",
};

ScrollReveal().reveal(".header", { ...staggeringOption });
ScrollReveal().reveal(".nav", { ...staggeringOption });
ScrollReveal().reveal(".video_area", { ...staggeringOption });
ScrollReveal().reveal(".news_head", { ...staggeringOption });
ScrollReveal().reveal(".news_body", { ...staggeringOption });
ScrollReveal().reveal(".serve_head", { ...staggeringOption });
ScrollReveal().reveal(".serve_item", { ...staggeringOption, interval: 150 });
ScrollReveal().reveal(".serve_body_right", { ...staggeringOption });
ScrollReveal().reveal(".info_area", { ...staggeringOption });
// ScrollReveal().reveal(".burger", { ...staggeringOption });

// burger点击事件
const burgerEl = document.querySelector(".burger");
const phoneNavEl = document.getElementById("phoneNav");
burgerEl.addEventListener("click", () => {
  if (!phoneNavEl.classList.contains("phoneNav")) {
    phoneNavEl.classList.add("phoneNav");
    phoneNavEl.style.display = "flex";
  } else {
    phoneNavEl.classList.remove("phoneNav");
    phoneNavEl.style.display = "none";
  }
});
