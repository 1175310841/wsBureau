var appIndex = 0
// 手机右上角图标点击事件
const menuEl = document.querySelector(".menu");
const phoneNavEl = document.getElementById("phoneNav");
menuEl.addEventListener("click", () => {
  if (!phoneNavEl.classList.contains("phoneNav")) {
    phoneNavEl.classList.add("phoneNav");
    phoneNavEl.style.display = "flex";
  } else {
    phoneNavEl.classList.remove("phoneNav");
    phoneNavEl.style.display = "none";
  }
});

// 刷新页面自动回到顶部
window.onbeforeunload = function () {
  document.documentElement.scrollTop = 0; //ie下
  document.body.scrollTop = 0; //非ie
  appIndex = 0
  document.querySelector("#app").style.top = 0
};

// 移动导航手风琴效果
let phoneItems = document.querySelectorAll(".phone_nav_title");
let twoItems = document.querySelectorAll(".phone_two_title");
phoneItems.forEach((item) => {
  item.onclick = function () {
    // this.parentNode.childNodes[1].classList.remove("autoheight");
    // let twoActive = this.parentNode.children[1].childNodes;
    // twoActive.forEach((item) => {
    //   item.classList.remove("phone_two_active");
    // });
    if (item.parentNode.classList.length == 1) return;
    phoneItems.forEach((item) => {
      item.parentNode.classList.remove("navAct");
    });
    twoItems.forEach((item) => {
      item.parentNode.classList.remove("phone_two_active");
    });
    item.parentNode.classList.add("navAct");
  };
});
twoItems.forEach((item) => {
  item.onclick = function () {
    twoItems.forEach((item) => {
      item.parentNode.classList.remove("phone_two_active");
    });
    this.parentNode.parentNode.classList.add("autoheight");
    this.parentNode.classList.add("phone_two_active");
  };
});

// 返回顶部按钮
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
    // animate(window, 0);
  };
};

// pad端触摸事件
const navPadLis = document.querySelectorAll("#navPad > li");
navPadLis.forEach((item) => {
  document.addEventListener("touchstart", () => {
    navPadLis.forEach((item) => {
      item.classList.remove("navActPad");
    });
    this.classList.add("navActPad");
  });
});

// function animate(obj, target, callback) {
//   clearInterval(obj.timer);
//   obj.timer = setInterval(fn, 30);
//   function fn() {
//     var step = (target - window.pageYOffset) / 5;
//     step = step > 0 ? Math.ceil(step) : Math.floor(step);
//     if (window.pageYOffset == target) {
//       clearInterval(obj.timer);
//       if (callback) {
//         callback();
//       }
//     }
//     window.scroll(0, window.pageYOffset + step);
//   }
// }
