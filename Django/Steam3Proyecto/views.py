from django.shortcuts import render

# Create your views here.
def principal(request):
    context = {}
    return render(request, 'pages/principal.html', context)