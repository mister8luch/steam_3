$(document).ready(function () {

    $("#btn_reg").click(function(){
        let nombre =$("#name").val();
        let usuario=$("#username").val();
        let correo=$("#email").val();
        let contrasena =$("#pass").val();
        let resultado= validarRegistro(nombre,usuario,correo,contrasena)

        if (resultado){

            $("#check").html("<div class= ' alert alert-primary w-50 mx-auto text-center mt-2' >Usuario Valido</div>");
            
            localStorage.setItem('usuario', usuario);
            localStorage.setItem('contrasena', contrasena);

            setTimeout(()=>{
                window.location.href="/paginas/login.html";
            },3000);
                

        }
    })

     function validarNombre(nombre) {
        // Expresión regular que verifica si el nombre contiene solo letras
        var regex = /^[A-Za-z\s]+$/;
        return regex.test(nombre);
    } 

    function validarRegistro(nombre,usuario,correo,contrasena){
        
        if(String(nombre).length < 4 || String(nombre).length > 30){

            $("#check").html("<div class='alert alert-danger w-50 mx-auto text-center mt-2' >Debe estar entre 4 a 30 caracteres</div>");
            alert("error en nombre")
        }
        /* else if(validarNombre(nombre)){
            $("#check").html("<div class='alert alert-danger w-50 mx-auto text-center' > el Nombre no debe tener numeros </div>");
        } */
        else if (String(usuario).length < 4 || String(usuario).length > 30) {
            /* Validacion usuario */
            $("#check").html("<div class='alert alert-danger w-50 mx-auto text-center mt-2' >Usuario debe tener largo entre 4 y 30 caracteres</div>");
            alert("error en usuario")
        }

        else if (String(correo).length < 4 || String(correo).length > 30) {
            /* Validacion correo */
            $("#check").html("<div class='alert alert-danger w-50 mx-auto text-center mt-2' >Correo invalido</div>");
            alert("error en correo")
        }

        else if (String(contrasena).length < 8 || String(contrasena).length > 20) {
            /* Validacion contra */
            $("#check").html("<div class='alert alert-danger w-50 mx-auto text-center mt-2' >La contrasena debe estar entre 8 y 20 caracteres</div>");
            alert("error en contrasena")
        }
        else {
            /* Confirmacion */
            return true;
        }

    }

    $('#btn_login').click(function () {
        let usuario = $('#username').val();
        let password = $('#pass').val();
        let usuarioGuardado = localStorage.getItem('usuario');
        let passGuardada = localStorage.getItem('contrasena');
        if (usuario === usuarioGuardado && password === passGuardada) {
            $("#check").html("<div class='alert alert-primary w-50 mx-auto text-center mt-2' >Ingresaste correctamente!</div>");
            setTimeout(() => {
                window.location.href = '/paginas/principal.html';
            }, 3000);

        } else {
            $("#check").html("<div class='alert alert-danger w-50 mx-auto text-center mt-2' >Usuario o contraseña incorrectos.</div>");
            setTimeout(() => {
                window.location.href = '/paginas/login.html';
            }, 3000);

        }
    })
});