function setRedColorScheme() {
  document.body.style.background = "#6f0000";

  var h1s = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p");
  for(var i = 0; i < h1s.length; i++) {
    h1s[i].style.color = "#fff";
  }
  var as = document.querySelectorAll("li, a");
  for(var i = 0; i < as.length; i++) {
    as[i].style.color = "#000";
  }
}

function fadeOutRedColorScheme() {
  document.body.style.background = "#fff";

  var h1s = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, li");
  for(var i = 0; i < h1s.length; i++) {
    h1s[i].style.color = "#000";
  }
}
