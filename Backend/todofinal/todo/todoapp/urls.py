from django.urls import path
from .views import *
urlpatterns = [
    path('<int:pk>',detailtodo.as_view()),
    path('',listtodo.as_view()),
    path('create',createtodo.as_view()),
    path('delete/<int:pk>',deletetodo.as_view())

]