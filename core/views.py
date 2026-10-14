from django.shortcuts import render

# Create your views here.
def index(request):
    
    #LISTA DE MARCAS
    brands=[
        'alko.svg',
        'bilstein.svg',
        'hl-mando.svg',
        'kyb.svg',
        'mobil.svg',
        'monroe.svg',
        'moog.svg',
        'rancho.svg',
        'sachs.svg',
        'trw-auto.svg',
    ]

    #LISTA DE SERVICIOS
    services=[
        {
            'icon':'amortiguador-icon.svg',
            'title': 'AMORTIGUADORES',
            'description':'Diagnóstico y sustitución con refacciones de gama alta.'
        },
        {
            'icon': 'suspension-icon.svg',
            'title': 'SUSPENSIÓN',
            'description': 'Mantenimiento preventivo y correctivo de horquillas, bujes y rótulas.'
        },
        {
            'icon': 'aceite-icon.svg',
            'title': 'CAMBIO DE ACEITE',
            'description': 'Lubricación rápida con aceites sintéticos y semi-sintéticos certificados.'
        },
        {
            'icon': 'afinacion-icon.svg',
            'title': 'AFINACIÓN MAYOR',
            'description': 'Cambio de bujías, limpieza de componentes y revisión de fluidos críticos.'
        },
        {
            'icon': 'inyectores-icon.svg',
            'title': 'LABORATORIO DE INYECTORES',
            'description': 'Limpieza por ultrasonido con prueba de patrón en banco especializado.'
        },
        {
            'icon': 'balatas-icon.svg',
            'title': 'BALATAS',
            'description': 'Inspección profunda del sistema y cambio con materiales de alta fricción.'
        },
        {
            'icon': 'rectificacion-icon.svg',
            'title': 'RECTIFICACIÓN DE DISCOS',
            'description': 'Maquinado de precisión para eliminar deformaciones y vibraciones.'
        },
        {
            'icon': 'scanner-icon.svg',
            'title': 'DIAGNÓSTICO CON SCANNER',
            'description': 'Escaneo computarizado de última generación.'
        },
        {
            'icon': 'modulos-icon.svg',
            'title': 'PROGRAMACIÓN DE MÓDULOS',
            'description': 'Actualización, sincronización y parametrización de computadoras.'
        },
        {
            'icon': 'electrico-icon.svg',
            'title': 'REPARACIONES ELÉCTRICAS',
            'description': 'Localización y solución de cortos circuitos y fallas en arneses.'
        },
        {
            'icon': 'radiador-icon.svg',
            'title': 'REPARACIÓN DE SISTEMA REFRIGERANTE',
            'description': 'Diagnóstico de fugas, lavado de sistema y cambio de anticongelante.'
        },

    ]

    context={
        'brands': brands,
        'services': services
    }

    return render(request,'core/index.html', context)