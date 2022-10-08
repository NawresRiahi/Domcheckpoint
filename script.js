/*declaration des variables*/

var c = document.getElementsByClassName("like");
let bt = document.getElementsByClassName("delete");
let d1 = document.getElementsByClassName("Item");
var pp = document.getElementsByClassName("plus-btn");
var m = document.getElementsByClassName("minus-btn");
var Q = document.getElementsByClassName("Quant");
var price = document.getElementsByClassName("price");
const ListP = [1379.0, 176.0, 249.0];

/*Bouton Like*/

for (let i = 0; i < c.length; i++) {
  c[i].onclick = function () {
    if (this.style.color == "black") {
      this.style.color = "red";
    } else {
      this.style.color = "black";
    }
  };
}

/*Bouton Delete*/
for (let i = 0; i < bt.length; i++) {
  bt[i].onclick = function () {
    d1[i].style.display = "none";
  };
}

/*Bouton Plus*/

for (let i = 0; i < pp.length; i++) {
  pp[i].onclick = function () {
    Q[i].value++;
  };
}
/*Bouton moins*/
for (let i = 0; i < m.length; i++) {
  m[i].onclick = function () {
    if (Q[i].value > 1) {
      Q[i].value--;
    }
  };
}
