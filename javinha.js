let user = "fuckprimoferreira"
let sen = "senha"
let cont = 1

function verificar(){

    if (document.getElementById('u').value == user){
        if (document.getElementById('s').value == sen){
            alert("Bem vindo! " + user);
            window.location.href = "calculadora.html"
        } 
        
        else{ 
            if (cont > 2) {
                var b = document.getElementById('u');
                b.setAttribute("disabled", "disabled");
                var b2 = document.getElementById('s');
                b2.setAttribute("disabled", "disabled");
                alert("Bloqueado!")
            }
            
            else{
                alert("Você tentou " + cont + " vezes, ja euvis!")
                cont++
            }
        }
    }

    else{
        alert("Usuário incorreto!")
    }
} 
