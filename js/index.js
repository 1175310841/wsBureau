// y轴滚动条滚动到500以上出现导航栏
const navEl = document.querySelector(".index_navigation");
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
ScrollReveal().reveal(".index_navigation", { ...staggeringOption });
ScrollReveal().reveal(".video_area", { ...staggeringOption });
ScrollReveal().reveal(".news_head", { ...staggeringOption });
ScrollReveal().reveal(".news_body", { ...staggeringOption });
ScrollReveal().reveal(".serve_head", { ...staggeringOption });
ScrollReveal().reveal(".serve_item", { ...staggeringOption, interval: 150 });
ScrollReveal().reveal(".serve_body_right", { ...staggeringOption });
ScrollReveal().reveal(".info_area", { ...staggeringOption });
// ScrollReveal().reveal(".burger", { ...staggeringOption });

const bubleCreate = (e) => {
  const news = document.querySelector(e);
  const width = news.getBoundingClientRect().width;
  const buble = document.createElement("span");
  buble.classList.add("buble");
  let r = Math.floor(Math.random() * 6 + 18); //18-24
  buble.style.width = r + "px";
  buble.style.height = r + "px";
  buble.style.border = 4 + "px solid #B0DBF3";
  buble.style.left = Math.random() * width + "px";

  news.append(buble);
  setTimeout(() => {
    buble.remove();
  }, 4000);
};
setInterval(() => {
  bubleCreate(".left_bubble");
  bubleCreate(".right_bubble");
}, 400);
