from django.urls import path
from . import views

urlpatterns =[
    #Ruta Inicio
    path('',views.index, name='index')
]