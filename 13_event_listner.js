let btn = document.getElementById("btn");

let fun1 = function (e) {
  alert("alert 1");
};

let fun2 = function (e) {
  alert("alert 2");
};

btn.addEventListener("click", fun1);

btn.addEventListener("click", fun2);

let a = prompt("Enter your fav no.");

if (a === "2") {
  btn.removeEventListener('click',fun1);
}
