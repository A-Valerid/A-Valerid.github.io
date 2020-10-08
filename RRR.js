
document.getElementById("demo").onmouseover = function () { go01() };
document.getElementById("demo").onmouseout = function () { go02() };

function go01() {
  document.getElementById("demo").style.color = "blue";
}

function go02() {
  document.getElementById("demo").style.color = "red";
}
