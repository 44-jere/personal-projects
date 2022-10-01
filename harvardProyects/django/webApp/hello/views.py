from urllib import response
from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,"paginas/index.html")

def bryan(request):
    return HttpResponse("Hello, Bryan!")

def greet(request, name):
    return render(request,"paginas/greet.html",{
        "name":name.capitalize()
    })