from django.db import models

# Create your models here.
class Servicio(models.Model):
    id = models.AutoField(primary_key=True)
    precio = models.IntegerField()
    descripcion = models.TextField()
    foto = models.ImageField(upload_to='servicios/')

    def __str__(self):
        return f"Servicio {self.id}: {self.descripcion}"

# Pequeña adición que corrige el plural de Django al generar la tabla
class Meta:
    verbose_name_plural = "Servicios"