btn = document.getElementById('toggleBtn');
triangleTop = document.getElementById("triangle-top")
triangleBottom = document.getElementById("triangle-bottom")


btn.addEventListener('click', () => {
  if (triangleBottom.style.animationPlayState == 'running') {
    btn.textContent = 'Pause';
    triangleBottom.style.animationPlayState = 'paused'
    triangleTop.style.animationPlayState = 'paused'


  } else {
    triangleBottom.style.animationPlayState = "running"
    triangleTop.style.animationPlayState = 'running'
   
    btn.textContent = 'Play';
  }
});
