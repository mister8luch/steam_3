$(document).ready(function() {
    $('#btn_reg').click(function(event) {
        let errors = [];
        
        let name = $('#name').val().trim();
        let username = $('#username').val().trim();
        let email = $('#email').val().trim();
        let password = $('#pass').val().trim();

        if (name === '') {
            errors.push('El campo nombre es obligatorio.');
        } else if (/\d/.test(name)) {
            errors.push('El nombre no debe contener números.');
        }

        if (username === '') {
            errors.push('El campo usuario es obligatorio.');
        }

        if (email === '') {
            errors.push('El campo correo electrónico es obligatorio.');
        } else if (!validateEmail(email)) {
            errors.push('El correo electrónico no es válido.');
        }

        if (password === '') {
            errors.push('El campo contraseña es obligatorio.');
        } else if (password.length < 8) {
            errors.push('La contraseña debe tener al menos 8 caracteres.');
        }

        if (errors.length > 0) {
            event.preventDefault();
            $('#check').html('<div class="alert alert-danger"><ul>' + errors.map(e => '<li>' + e + '</li>').join('') + '</ul></div>');
        } else {
            setTimeout(() => {
                $('#form').submit();
            }, 1500);
        }
    });

    function validateEmail(email) {
        let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});