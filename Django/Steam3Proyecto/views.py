from django.shortcuts import render,redirect, get_object_or_404
from django.contrib.auth import authenticate, login as auth_login
from django.contrib.auth.decorators import login_required
from .models import Juego
from .models import Usuario
from .models import Compra
import re
#from django.contrib.auth.decorators import login_required



# Create your views here.
def principal(request):
    context = {}
    return render(request, 'pages/principal.html', context)

def producto(request):
    context = {
        
    }
    return render(request, 'pages/producto.html', context)

def catalogo(request):
    juego=Juego.objects.all()
    context = {
        'juegos': juego
    }
    return render(request, 'pages/catalogo.html', context)

def acercade(request):
    context = {}
    return render(request, 'pages/acercade.html', context)

def soporte(request):
    context = {}
    return render(request, 'pages/soporte.html', context)

def usuario(request):
    context = {}
    return render(request, 'pages/usuario.html', context)

def login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        from .models import Usuario

        try:
            usuario = Usuario.objects.get(Usuario=username, contrasena=password)
            # Si el usuario y contraseña son correctos
            return redirect('inicio')
        except Usuario.DoesNotExist:
            # Si el usuario no existe o la contraseña no coincide, mostrar un mensaje de error
            error_message = "Nombre de usuario o contraseña incorrectos."
            return render(request, 'pages/usur/login.html', {'error_message': error_message})

    return render(request, 'pages/usur/login.html')

def registro(request):
    context = {}
    
    if request.method == "POST":
        name = request.POST.get("name", "").strip()
        username = request.POST.get("username", "").strip()
        email = request.POST.get("email", "").strip()
        password = request.POST.get("password", "").strip()
        
        errors = []

        if not name:
            errors.append("El campo nombre es obligatorio.")
        elif re.search(r'\d', name):
            errors.append("El nombre no debe contener números.")
        
        if not username:
            errors.append("El campo usuario es obligatorio.")
        elif Usuario.objects.filter(Usuario=username).exists():
            errors.append("El nombre de usuario ya está en uso.")
        
        if not email:
            errors.append("El campo correo electrónico es obligatorio.")
        elif not validate_email(email):
            errors.append("El correo electrónico no es válido.")
        elif Usuario.objects.filter(correo=email).exists():
            errors.append("El correo electrónico ya está en uso.")
        
        if not password:
            errors.append("El campo contraseña es obligatorio.")
        elif len(password) < 8:
            errors.append("La contraseña debe tener al menos 8 caracteres.")

        if errors:
            context['errors'] = errors
            return render(request, 'pages/usur/registro.html', context)
        else:
            Usuario.objects.create(
                nombre=name,
                Usuario=username,
                correo=email,
                contrasena=password,
            )
            return redirect('login')

    return render(request, 'pages/usur/registro.html', context)

def validate_email(email):
    re_email = re.compile(r"^[^\s@]+@[^\s@]+\.[^\s@]+$")
    return re_email.match(email)

def pagoFinal(request):
    context = {}
    return render(request, 'pages/compraFinal.html', context)

@login_required
def comprar_juego(request, juego_id):
    juego = get_object_or_404(Juego, id_juego=juego_id)
    usuario = request.user

    # Asegurarte de que el usuario actual esté en la tabla Usuario
    usuario_obj = get_object_or_404(Usuario, Usuario=usuario.username)

    compra = Compra.objects.create(usuario=usuario_obj, juego=juego)
    return redirect('pago_final')