function myFunction() {
    var times = unu.value;
    if (isNaN(times)) {
        alert("Invalid input");
    } else {
        var winner_button = Math.floor(Math.random() * times) + 1;
        //alert ("winner is " + winner_button);
        for (var i = 1; i <= times; ++i) {
            buton.style.display = 'none';
            let btn = document.createElement("button");
            btn.innerHTML = "Save";
            document.body.appendChild(btn);
            if (i == winner_button) {
                btn.onclick = function winner () {
                alert ("Congrats! You won!");
                document.location.reload();
                }
            } else {
                btn.onclick = function loser () {
                alert ("This is not the winner");
                document.location.reload();
                }
            }
            console.log('clicked')
        }
    }
}
function reset() {
  document.location.reload();  
}
