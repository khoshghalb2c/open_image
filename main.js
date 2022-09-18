/*!
  * IMGsModal > forget(https://sazl.ir/);
  * Copyright 2020-2021;
  */
  var smodal = document.getElementById("SAZLmodal");
  var code_html = '<div id="smodal-bg"></div><img id="smodal-content-img"/>';
  var code_css = '<style>'+'div#SAZLmodal{display:none; justify-content:center;}div#SAZLmodal div#smodal-bg{display:flex; position:fixed; width:100%; height:100%; top:0; right:0; bottom:0; left:0; padding:0; cursor:zoom-out; background-color:rgba(0, 0, 0, .8); z-index:99999;}div#SAZLmodal img#smodal-content-img{display:flex; position:fixed; height:calc(100% - 50px); width:auto; top:25px; bottom:25px; border-radius:10px; border:none; outline:0; box-shadow:0 0 100px 10px black; z-index:999999;}div#SAZLmodal img#smodal-content-img{-webkit-animation-name:zoom; -webkit-animation-duration:.6s; animation-name:zoom; animation-duration:.6s;}@-webkit-keyframes zoom{from{-webkit-transform:scale(.5)} to{-webkit-transform:scale(1)}}@keyframes zoom{from{transform:scale(.5)} to{transform:scale(1)}}'+'</style>';
  smodal.innerHTML += code_html+"<br/>"+code_css;
  var smodal_img = document.getElementById("smodal-content-img"); 
  
  // Functions(Open and Close)
  function open_imgSmodal(source){ // open image
    smodal_img.src = source;
    smodal.style.display = "flex";
  }
  document.getElementById("smodal-bg").onclick = function(){ // close image
    smodal.style.display = "none";
    smodal_img.src = "";
  }
/*!* POWERED BY SAZL.IR *!*/
