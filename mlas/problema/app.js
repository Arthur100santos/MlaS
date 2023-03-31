var modal = document.getElementById("myModal"); //pega o modal

var btn = document.getElementById("myBtn"); //botão do modall

var span = document.getElementsByClassName("close")[0]; //fecha o modal

//quando o usuario clicar no botão, abre o modal
btn.onclick = function(){
    modal.style.display = "block";

}
span.onclick = function(){
    modal.style.display = "none";

}

window.onclick = function(event) {
    if (event.target == modal)
        modal.style.display = "none";
    }
   