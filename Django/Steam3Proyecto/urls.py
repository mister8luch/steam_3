from django.urls import path
from . import views

""" path('nombreURL',funcionVista,nombreDePagina) """
urlpatterns = [
    path('', views.principal, name='inicio'),
    path('misProductos', views.producto, name='producto' ),
    path('catalogo', views.catalogo,name='catalogo'),
    path('acercade', views.acercade, name='acercade'),
    path('soporte', views.soporte, name='soporte'),
    path('usuario', views.usuario, name='usuario'),
    path('login', views.login, name='login'),
    path('registro', views.registro, name='registro')
]