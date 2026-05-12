document.getElementById('login').addEventListener('submit', function(event) {
   event.preventDefault()

    const user = document.getElementById('username').value
    const pass = document.getElementById('password').value
    const errorMsg = document.getElementById('error-msg')
   

   if (user === 'user123' && pass === 'cheesecake') {
       window.location.href = "/homepage/index.html"

   }else{
       errorMsg.style.display = "block";
   }
})
