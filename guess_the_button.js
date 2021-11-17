function myFunction() {
    var times = unu.value;
    if (isNaN(times)) {
        alert("Invalid input");
    } else {
        for (var i = 0; i < times; ++i) {
            buton.style.display = 'none';
            let btn = document.createElement("button");
            btn.innerHTML = "Save";
            document.body.appendChild(btn);
            btn.onclick = function winner () {
                alert ("This is not the winner");
                document.location.reload();
            }
            console.log('clicked')
        }
    }
}
function reset() {
  document.location.reload();  
}