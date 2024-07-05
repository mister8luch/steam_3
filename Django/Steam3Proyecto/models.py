from django.db import models
# Create your models here.
class Juego(models.Model):
    id_juego=models.AutoField(primary_key=True,db_column="idJuego")
    titulo=models.CharField(max_length=50)
    desarrollador=models.CharField(max_length=50)
    descripcion=models.TextField()
    resena=models.CharField(max_length=50)
    fecha_lanzamiento=models.CharField(max_length=10)
    editor=models.CharField(max_length=50)
    genero=models.CharField(max_length=50)
    ruta_imagen=models.CharField(max_length=100)
    precio=models.CharField(max_length=100)
    
class Usuario(models.Model):
    id_usuario=models.AutoField(primary_key=True,db_column="idUser")
    nombre=models.CharField(max_length=30)
    Usuario=models.CharField(max_length=30)
    correo=models.CharField(max_length=50)
    contrasena=models.CharField(max_length=20)