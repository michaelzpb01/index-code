module.exports = function () {
  function wMaxWidth(){
    if(W_width > 495){
      document.documentElement.style.fontSize = '66px';
      document.body.style.maxWidth = '495px';
      document.body.style.margin = '0 auto';
    }else{
      document.documentElement.style.fontSize = document.documentElement.clientWidth/320*100/2+'px';
    }
  }

  var W_width = document.documentElement.clientWidth;
  wMaxWidth(W_width);
  window.addEventListener('resize',function(){
    W_width = document.documentElement.clientWidth;
    wMaxWidth(W_width);
  },false);
};

