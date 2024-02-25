from django.shortcuts import render

def formulario(request):
    # Tu lógica de vista aquí
    # Puedes pasar datos adicionales al contexto si es necesario
    context = {
        
    }

    return render(request, 'formulario.html', context)
