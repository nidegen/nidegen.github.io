function setRedColorScheme() {
  document.body.style.background = "#990012";

  var h1s = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a, li");
  for(var i = 0; i < h1s.length; i++) {
    h1s[i].style.color = "#ffffff";
  }
}
