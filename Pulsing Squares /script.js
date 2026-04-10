square1 = document.getElementById("square1")
square2 =document.getElementById("square2")


square1.addEventListener("mouseover", function () {
   square1.style.animationPlayState = "paused"
   square2.style.animationPlayState = "running"
});


square2.addEventListener("mouseover", function () {
   square2.style.animationPlayState = "paused"
   square1.style.animationPlayState = "running"
});









