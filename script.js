 let input = document.getElementById("input");
let num = document.querySelectorAll(".number");
let result = document.getElementById("result");
let c = document.getElementById("c");
let del = document.getElementById("delete");

[].forEach.call(num, function (el) {
  el.onclick = function (e) {
  input.classList.remove("animated", "bounce");
  input.innerText += el.innerText;
    input.classList.add("animated", "bounce");
  };
});
result.onclick = function (e) {
  if (input.innerText == "0/0") {
    result = "dibil";
    input.innerText = result;
  } else {
    result = eval(input.innerText);
    input.innerText = result;
  }
};

c.onclick = function (e) {
  c = "";
  input.innerText = c;
};

del.onclick = function (e) {
  input.innerText = input.innerText.slice(0, -1);
};