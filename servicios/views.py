from django.shortcuts import render
from django.http import JsonResponse
from .models import Servicio

# Create your views here.
def index(request):
    return render(request, 'index.html')

def get_servicios(request):
    servicios = list(Servicio.objects.values())
    return JsonResponse(servicios, safe=False)