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

window.onload = function () {
  var btn = document.getElementById("back_btn");
  var timer = null;
  var isTop = true;
  //获取页面可视区高度
  var clientHeight = document.documentElement.clientHeight;

  //滚动条滚动时触发
  window.onscroll = function () {
    //显示回到顶部按钮
    var osTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (osTop >= clientHeight) {
      btn.style.opacity = 1;
    } else {
      btn.style.opacity = 0;
    }
    //回到顶部过程中用户滚动滚动条，停止定时器
    if (!isTop) {
      clearInterval(timer);
    }
    isTop = false;
  };

  btn.onclick = function () {
    //设置定时器
    timer = setInterval(function () {
      //获取滚动条距离顶部高度
      var osTop = document.documentElement.scrollTop || document.body.scrollTop;
      var ispeed = Math.floor(-osTop / 7);
      document.documentElement.scrollTop = document.body.scrollTop =
        osTop + ispeed;
      //到达顶部，清除定时器
      if (osTop == 0) {
        clearInterval(timer);
      }
      isTop = true;
    }, 30);
  };
};

// 移动导航手风琴效果
let phoneItems = document.querySelectorAll(".phone_nav_title");
phoneItems.forEach((item) => {
  item.onclick = function () {
    this.parentNode.childNodes[1].classList.remove("autoheight");
    let twoActive = this.parentNode.children[1].childNodes;
    twoActive.forEach((item) => {
      item.classList.remove("phone_two_active");
    });
    phoneItems.forEach((item) => {
      item.parentNode.classList.remove("navAct");
    });
    this.parentNode.classList.add("navAct");
  };
});
let twoItems = document.querySelectorAll(".phone_two_title");
twoItems.forEach((item) => {
  item.onclick = function () {
    twoItems.forEach((item) => {
      item.parentNode.classList.remove("phone_two_active");
    });
    this.parentNode.parentNode.classList.add("autoheight");
    this.parentNode.classList.add("phone_two_active");
  };
});
