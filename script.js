 var input = document.getElementsByClassName("input");
 var num = document.querySelectorAll(".number");






 [].forEach.call( num, function(el) {
        el.onclick = function(e) {
            input.value += el.value;
        }
    });