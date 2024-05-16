function validar() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("pass").value;
  
    if (String(user).length >= 4 && String(user).length <= 15) {
        if (String(pass).length >= 8) {
           
            document.getElementById("username").style.border = "1px solid lightgrey";
            document.getElementById("pass").style.border = "1px solid lightgrey";
            
            document.getElementById("resultado").innerHTML = "<div class='alert alert-success w-50 mx-auto text-center'>" +
                "Acceso Concedido</div>"
        } else {
            
            document.getElementById("pass").style.border = "1px solid red";
            
            document.getElementById("resultado").innerHTML = "<div class='alert alert-danger w-50 mx-auto text-center'>" +
                "Contraseña debe tener minimo 8 caracteres</div>"

        }
    } else {
      
        document.getElementById("username").style.border = "1px solid red";

        document.getElementById("resultado").innerHTML = "<div class='alert alert-danger w-50 mx-auto text-center'>Usuario debe tener minimo 4 y maximo 15 caracteres</div>"
    }
}
