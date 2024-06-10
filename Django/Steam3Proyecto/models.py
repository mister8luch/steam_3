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
    