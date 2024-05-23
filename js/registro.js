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

    function validarCorreo(correo) {
        // Expresión regular básica para validar correos electrónicos
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(correo);
    }

    function validarRegistro(nombre,usuario,correo,contrasena){
        
        if(String(nombre).length < 4 || String(nombre).length > 30){
            /* validar Nombre */
            $("#check").html("<div class='alert alert-danger w-50 mx-auto text-center mt-2' >Debe estar entre 4 a 30 caracteres</div>");
            return false;

        }
        else if (!validarNombre(nombre)) {
            /* validar Nombre letras */
            $("#check").html("<div class='alert alert-danger w-50 mx-auto text-center mt-2'>El nombre no debe contener números</div>");
            return false;
        }
        else if (String(usuario).length < 4 || String(usuario).length > 30) {
            /* Validacion usuario */
            $("#check").html("<div class='alert alert-danger w-50 mx-auto text-center mt-2' >Usuario debe tener largo entre 4 y 30 caracteres</div>");
            return false;

        }

        else if (!validarCorreo(correo) || correo.length > 50) {
            /* validar correo */
            $("#check").html("<div class='alert alert-danger w-50 mx-auto text-center mt-2'>Correo inválido</div>");
            return false;
        }

        else if (String(contrasena).length < 8 || String(contrasena).length > 20) {
            /* Validacion contra */
            $("#check").html("<div class='alert alert-danger w-50 mx-auto text-center mt-2' >La contrasena debe estar entre 8 y 20 caracteres</div>");
            return false;
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
            $("#check").html("<div class='alert alert-primary w-75 mx-auto text-center mt-2' >Ingresaste correctamente!</div>");
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