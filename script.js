var c = document.getElementsByClassName("like");

for (var i = 0; i < c.length; i++) {
  c[i].onclick = function () {
    if (this.style.color == "black") {
      this.style.color = "red";
    } else {
      this.style.color = "black";
    }
  };
}

let bt = document.getElementsByClassName("delete");
let d1 = document.getElementsByClassName("Item");
for (var i = 0; i < bt.length; i++) {
  bt[i].onclick = function () {
    d1[i].style.display = "none";
  };
}

var p = document.getElementsByClassName("plus-btn");
var m = document.getElementsByClassName("minus-btn");
var Q = document.getElementsByClassName("Quant");
var count = 0;
Q = count;
for (var i = 0; i < p.length; i++) {
  p[i].onclick = function () {
    count++;
    Q = count;
  };
}
for (var j = 0; i < m.length; j++) {
  m[j].onclick = function () {
    count--;
    Q = count;
  };
}
