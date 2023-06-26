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
// ScrollReveal().reveal(".news_head", { ...staggeringOption });
// ScrollReveal().reveal(".news_body", { ...staggeringOption });
// ScrollReveal().reveal(".serve_head", { ...staggeringOption });
// ScrollReveal().reveal(".serve_item", { ...staggeringOption, interval: 150 });
// ScrollReveal().reveal(".serve_body_right", { ...staggeringOption });
// ScrollReveal().reveal(".info_area", { ...staggeringOption });
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

// 监测设备是不是电脑
let os = (function () {
  let ua = navigator.userAgent,
    isWindowsPhone = /(?:Windows Phone)/.test(ua),
    isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
    isAndroid = /(?:Android)/.test(ua),
    isFireFox = /(?:Firefox)/.test(ua),
    isChrome = /(?:Chrome|CriOS)/.test(ua),
    isTablet =
      /(?:iPad|PlayBook)/.test(ua) ||
      (isAndroid && !/(?:Mobile)/.test(ua)) ||
      (isFireFox && /(?:Tablet)/.test(ua)),
    isPhone = /(?:iPhone)/.test(ua) && !isTablet,
    isPc = !isPhone && !isAndroid && !isSymbian;
  return {
    isTablet: isTablet,
    isPhone: isPhone,
    isAndroid: isAndroid,
    isPc: isPc,
  };
})();
// console.log('os', os)
if (os.isPc) {
  const app = document.querySelector("#app");
  let pageHeight = null;
  let footHeight = null;
  let flag = true;

  let zoom = 1
  if (document.body.clientWidth > 1220) {
    zoom = window.innerWidth / 1920;
  }
  document.body.style.setProperty("--zoom", zoom);
  document.body.style.zoom = zoom;

  window.addEventListener("resize", function () {
    location.reload();
  });

  document.addEventListener("mousewheel", function (e) {
    e = e || window.event;
    pageHeight = document.body.clientHeight;
    footHeight =
      document.querySelector(".info").clientHeight +
      document.querySelector(".footer").clientHeight;
    if (flag) {
      flag = false;
      let top = parseInt(getComputedStyle(app).top);
      if (e.wheelDelta > 0) {
        appIndex--;
        if (appIndex < 0) {
          appIndex = 0;
        }
        if (Math.abs(top) > pageHeight * 2) {
          app.style.top = top + footHeight + "px";
        } else if (Math.abs(top) > 0) {
          app.style.top = top + pageHeight + "px";
        }
      } else {
        appIndex++;
        if (appIndex > 3) {
          appIndex = 3;
        }
        if (Math.abs(top) < pageHeight * 2) {
          app.style.top = top - pageHeight + "px";
        }
        if (
          Math.abs(top) == pageHeight * 2 &&
          Math.abs(top) < pageHeight * 2 + footHeight
        ) {
          app.style.top = top - footHeight + "px";
        }
      }
      if (!navEl.classList.contains("sticky")) {
        navEl.classList.add("sticky");
      }
      if (appIndex == 0) {
        navEl.classList.remove("sticky");
        ScrollReveal().reveal(".header", { ...staggeringOption });
        ScrollReveal().reveal(".index_navigation", { ...staggeringOption });
        ScrollReveal().reveal(".video_area", { ...staggeringOption });
      }
      if (appIndex == 1) {
        ScrollReveal().reveal(".news_head", { ...staggeringOption });
        ScrollReveal().reveal(".news_body", { ...staggeringOption });
      }
      if (appIndex == 2) {
        ScrollReveal().reveal(".serve_head", { ...staggeringOption });
        ScrollReveal().reveal(".serve_item", {
          ...staggeringOption,
          interval: 150,
        });
        ScrollReveal().reveal(".serve_body_right", { ...staggeringOption });
      }
      if (appIndex == 3) {
        ScrollReveal().reveal(".info_area", { ...staggeringOption });
      }
      // 为了防止用户一直触发这个事件，通过定时器来防止
      setTimeout(function () {
        flag = true;
      }, 500);
    }
  });
}

$(function () {
  let bodyWidth = document.body.clientWidth;
  // 获取轮播图容器和轮播项
  let carousel = document.getElementById("SwiperBox");
  let carouselInner = document.querySelector(".carousel_inner");
  let carouselItems = carousel.querySelectorAll(".carousel_item");
  let carouselImgs = carousel.getElementsByClassName("carousel_img");
  let carouselBtnItems = carousel.querySelectorAll(".carousel_btn_item");

  // 设置轮播项的初始样式
  for (let i = 0; i < carouselImgs.length; i++) {
    carouselImgs[i].style.width = bodyWidth + "px";
  }
  carouselItems[0].classList.add("carousel_active");
  carouselBtnItems[0].classList.add("instActv");

  ripplesFtn($(".carousel_active .carousel_img"));

  // 水涟漪
  function ripplesFtn(el) {
    el.ripples({
      resolution: 512,
      dropRadius: 12,
      perturbance: 0.04,
    });
  }

  // 定时器自动轮播
  let carouselIndex = 0;
  let timer;
  timerFtn();
  function timerFtn() {
    timer = setInterval(() => {
      carouselIndex++;
      if (carouselIndex > carouselImgs.length - 1) {
        carouselIndex = 0;
      }
      carouselInner.style.left = -bodyWidth * carouselIndex + "px";
      moveCarouselLeft();
    }, 10000);
  }

  // 向左移动轮播图
  function moveCarouselLeft() {
    // 获取当前显示的轮播项和下一个轮播项
    let currentSlide = carousel.querySelector(".carousel_item.carousel_active");
    let nextSlide = currentSlide.nextElementSibling || carouselItems[0]; // 如果当前是最后一张，则下一个是第一张

    // 移除当前轮播项的 active 类，并为下一个轮播项添加 active 类
    currentSlide.classList.remove("carousel_active");
    nextSlide.classList.add("carousel_active");

    // 移除当前轮播项图片的涟漪效果
    let currentImage = currentSlide.querySelector(".carousel_img");
    $(currentImage).ripples("destroy");

    // 添加下一个轮播项图片的涟漪效果
    let nextImage = nextSlide.querySelector(".carousel_img");
    ripplesFtn($(nextImage));

    let currentBtn = carousel.querySelector(".carousel_btn_item.instActv");
    let nextBtn = currentBtn.nextElementSibling || carouselBtnItems[0];
    currentBtn.classList.remove("instActv");
    nextBtn.classList.add("instActv");
  }

  // 点击轮播图指示点
  carouselBtnItems.forEach((item, index) => {
    item.onclick = function () {
      if (this.classList.contains("instActv")) {
        handlerBtnItem(index);
        return;
      }
      carouselItems.forEach((e) => {
        e.classList.remove("carousel_active");
      });
      carouselItems[index].classList.add("carousel_active");
      ripplesFtn($(".carousel_active .carousel_img"));
      carouselBtnItems.forEach((e) => {
        e.classList.remove("instActv");
      });
      this.classList.add("instActv");
      handlerBtnItem(index);
    };
  });
  function handlerBtnItem(index) {
    carouselIndex = index;
    carouselInner.style.left = -bodyWidth * carouselIndex + "px";
    clearInterval(timer);
    timerFtn();
  }
});
