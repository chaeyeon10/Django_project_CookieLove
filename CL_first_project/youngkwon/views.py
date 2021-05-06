from django.shortcuts import render

def renderIndex(request):
    return render(request, 'index.html')