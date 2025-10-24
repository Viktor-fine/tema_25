from django.urls import path
from . import views

app_name = 'vedomosti'
urlpatterns = [
    path('', views.b1, name='b1'),
    path('a2/', views.a2, name='a2'),
    path('b2/', views.b2, name='b2'),
    path('b3/', views.b3, name='b3'),
    path('b4/', views.b4, name='b4'),
    path('b5/', views.b5, name='b5'),
    path('b6/', views.b6, name='b6'),
    path('b7/', views.b7, name='b7'),
    path('b8/', views.b8, name='b8'),
    path('b9/', views.b9, name='b9'),
    path('b10/', views.b10, name='b10'),
]