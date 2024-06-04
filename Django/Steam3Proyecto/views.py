from django.shortcuts import render

# Create your views here.
def principal(request):
    context = {}
    return render(request, 'pages/principal.html', context)

def producto(request):
    context = {}
    return render(request, 'pages/producto.html', context)

def catalogo(request):
    context = {}
    return render(request, 'pages/catalogo.html', context)

def acercade(request):
    context = {}
    return render(request, 'pages/acercade.html', context)

def soporte(request):
    context = {}
    return render(request, 'pages/soporte.html', context)