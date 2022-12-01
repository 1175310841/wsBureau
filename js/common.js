// 刷新页面自动回到顶部
window.onbeforeunload = function () {
  document.documentElement.scrollTop = 0; //ie下
  document.body.scrollTop = 0; //非ie
};

// 手机右上角图标点击事件
const menuEl = document.querySelector(".menu");
const phoneNavEl = document.getElementById("phoneNav");
menuEl.addEventListener("click", () => {
  console.log(111);
  if (!phoneNavEl.classList.contains("phoneNav")) {
    phoneNavEl.classList.add("phoneNav");
    phoneNavEl.style.display = "flex";
  } else {
    phoneNavEl.classList.remove("phoneNav");
    phoneNavEl.style.display = "none";
  }
});
