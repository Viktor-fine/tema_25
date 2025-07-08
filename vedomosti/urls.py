from django.urls import path
from . import views

app_name = 'vedomosti'
urlpatterns = [
    path('', views.b1, name='b1'),
    path('b2/', views.b2, name='b2'),
    path('b3/', views.b3, name='b3'),
]