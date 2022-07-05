//Get the button
var mybutton = document.getElementById("scroll-to-top");
      
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function TrangChu(){
    window.location.href = "../index.html";       
}

function TuiXop(){
    window.location.href = "./section2/tui-xop.html";       
}

function Zipper(){
    window.location.href = "./section6/tui-zipper.html";       
}

function TemNhan(){
    window.location.href = "./section3/tem-nhan-decal.html";  
}
function ThucPham(){
    window.location.href = "./section4/bao-bi-thuc-pham.html";
}

function BanhKeo(){
    window.location.href = "./section7/bao-bi-banh-keo.html";
}