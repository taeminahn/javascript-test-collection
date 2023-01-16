var vrConfig = {
  frames: 72,
  startFrame: 1,
  folderPath: './images/360vr/',
  imgName: 'Gray_AGT_',
  format: '.png',
  speed: 20,
}
var img = document.getElementById("vr_image");
var imgW = img.clientWidth;
var isDown = false;
var startX;
var dragInterval;

window.addEventListener("resize", function () {

});

window.addEventListener("load", function () {
  initImage();
});

function initImage() {
  // var canvas = document.getElementById("vr_image");
  // var ctx = canvas.getContext("2d");
  // console.log(vrImg)
  // vrImg.src = "./images/360vr/Gray_AGT_1.png";
  // vrImg.onload = function () {
  //   ctx.drawImage(vrImg, 100, 100);
  //   console.log(ctx);
  // }
  img.src =  vrConfig.folderPath + vrConfig.imgName + vrConfig.startFrame + vrConfig.format;
};

img.addEventListener('mousedown', function(e){
  isDown = true;
  img.classList.add('active');
  startX = e.pageX - img.offsetLeft;
  dragInterval = 0;
});
// img.addEventListener('mousemove', (e) => {
//   if(!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - img.offsetLeft;
//   const currentInterval = (x - startX) * 1;
//   // console.log(currentInterval);
//   // console.log(dragInterval);
//   if(currentInterval < 0) {
//     checkIntervalMinus(currentInterval);
//     // prevImage();
//   }else {
//     checkIntervalPlus(currentInterval);
//     // nextImage();
//   }
// });

img.addEventListener('mousemove', throttle(function (e) {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - img.offsetLeft;
  const currentInterval = (x - startX) * 1;
  // console.log(currentInterval);
  // console.log("dragInterval", dragInterval);
  // if(currentInterval < 0 && currentInterval > dragInterval){
  //   console.log("음수에서 값이 커진다!");
  // }
  // if(currentInterval > 0 && currentInterval < dragInterval) {
  //   console.log("양수에서 값이 작아진다!!");
  // }
  if(currentInterval < 0 || (currentInterval > 0 && currentInterval < dragInterval)) {
    prevImage();
  }else if(currentInterval > 0 || (currentInterval < 0 && currentInterval > dragInterval)) {
    nextImage();
  }
  dragInterval = currentInterval;
}));

img.addEventListener('mouseleave', function() {
  isDown = false;
  img.classList.remove('active');
});
img.addEventListener('mouseup', function() {
  isDown = false;
  img.classList.remove('active');
});

function throttle(callback) {
  let waiting = false
  return function() {
    if(!waiting) {
      callback.apply(this, arguments)
      waiting = true
      setTimeout(function(){
        waiting = false
      }, vrConfig.speed)
    }
  }
}

img.addEventListener("click", function(e) {
  // if(!isDown) return;
  if(e.offsetX < (imgW / 2)){
    prevImage();
  }else {
    nextImage();
  }
});

document.querySelector('.next')
  .addEventListener("click", function() {
    nextImage();
})

document.querySelector('.prev')
  .addEventListener("click", function() {
    prevImage();
})

function nextImage() {
  vrConfig.startFrame ++;
  if(vrConfig.startFrame >= vrConfig.frames){
    vrConfig.startFrame = 1;
  }
  initImage();
};

function prevImage() {
  vrConfig.startFrame --;
  if(vrConfig.startFrame <= 0){
    vrConfig.startFrame = vrConfig.frames;
  }
  initImage();
};