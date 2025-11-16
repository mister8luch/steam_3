$(document).ready(function() {
    $('#formlog').submit(function(event) {
        event.preventDefault();  // Evitar que el formulario se envíe automáticamente

        var username = $('#username').val();
        var password = $('#pass').val();

        // Validación básica de campos
        if (username === '' || password === '') {
            $('#error_message').text('Por favor ingrese nombre de usuario y contraseña.');
            return;
        }

        // Petición AJAX para validar las credenciales en el backend de Django
        $.ajax({
            type: 'POST',
            url: 'login',  
            data: {
                username: username,
                password: password,
                csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()  
            },
            success: function(response) {
                if (response.success) {
                    window.location.href = '/pagina_principal'; // Redireccionar al éxito
                } else {
                    $('#error_message').text('Nombre de usuario o  incorrectos.');
                }
            },
            error: function(xhr, textStatus, error) {
                console.log(xhr.statusText);
            }
        });
    });
});