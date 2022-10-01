from django.urls import path
from . import views

urlpatterns=[
    path("",views.index, name="index"),
    path("bryan",views.bryan, name="bryan"),
    path("<str:name>", views.greet, name="greet"),
]