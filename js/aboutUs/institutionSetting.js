let imgIndex = 0; //显示的图片索引
let process;
let img = document.querySelectorAll(".dept-small-img");
let bigImage = document.querySelector(".dept-big-img");

function showImg(index) {
  // 小图恢复默认状态
  for (let i = 0; i < img.length; i++) {
    img[i].className = "dept-small-img ";
  }
  // 当前位移的小图片
  img[index].className = "dept-small-img  moveSmallImg";
  // 大图片显示
  bigImage.style.backgroundImage = `url('../../imgs/aboutUs/${index + 1}.png')`;
}
// 开始轮播
function startToggle() {
  process = setInterval(function () {
    imgIndex = imgIndex + 1;
    if (imgIndex == 4) {
      imgIndex = 0;
    }
    showImg(imgIndex);
  }, 3000);
}

// 定义小图的点击响应事件
for (let i = 0; i < img.length; i++) {
  img[i].onclick = function () {
    clearInterval(process);
    imgIndex = i;
    showImg(i);
    startToggle();
  };
}

// 当鼠标放置在大图上面时，停止轮播
bigImage.onmouseover = function () {
  clearInterval(process);
};
bigImage.onmouseout = function () {
  startToggle();
};

startToggle();
