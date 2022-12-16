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
};

// 移动导航手风琴效果
let phoneItems = document.querySelectorAll(".phone_nav_title");
phoneItems.forEach((item) => {
  item.onclick = function () {
    // this.parentNode.childNodes[1].classList.remove("autoheight");
    // let twoActive = this.parentNode.children[1].childNodes;
    // twoActive.forEach((item) => {
    //   item.classList.remove("phone_two_active");
    // });
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
