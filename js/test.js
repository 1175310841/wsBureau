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
var os = (function () {
  var ua = navigator.userAgent,
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
  var pageHeight = null;
  var footHeight = null;
  var index = 0;
  var flag = true;
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
        index--;
        if (index < 0) {
          index = 0;
        }
        if (Math.abs(top) > pageHeight * 2) {
          app.style.top = top + footHeight + "px";
        } else if (Math.abs(top) > 0) {
          app.style.top = top + pageHeight + "px";
        }
      } else {
        index++;
        if (index > 3) {
          index = 3;
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
      if (index == 0) {
        navEl.classList.remove("sticky");
        ScrollReveal().reveal(".header", { ...staggeringOption });
        ScrollReveal().reveal(".index_navigation", { ...staggeringOption });
        ScrollReveal().reveal(".video_area", { ...staggeringOption });
      }
      if (index == 1) {
        ScrollReveal().reveal(".news_head", { ...staggeringOption });
        ScrollReveal().reveal(".news_body", { ...staggeringOption });
      }
      if (index == 2) {
        ScrollReveal().reveal(".serve_head", { ...staggeringOption });
        ScrollReveal().reveal(".serve_item", {
          ...staggeringOption,
          interval: 150,
        });
        ScrollReveal().reveal(".serve_body_right", { ...staggeringOption });
      }
      if (index == 3) {
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
  try {
    $(".news").ripples({
      resolution: 512,
      dropRadius: 12, //px
      perturbance: 0.04,
    });
  } catch (e) {
    console.log(e);
  }
})