function togglebutton() {
  var dots = document.getElementsByClassName("article-description-dots");
  var moreText = document.getElementsByClassName("article-description-more");
  var btnText = document.getElementById("article-button");

  if (dots[0].style.display === "none") {
    dots[0].style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText[0].style.display = "none";
  } else {
    dots[0].style.display = "none";
    btnText.innerHTML = "Read less";
    moreText[0].style.display = "inline";
  }
}
