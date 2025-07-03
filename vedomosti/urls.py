from django.urls import path
from . import views

app_name = 'vedomosti'
urlpatterns = [
    path('', views.b1, name='b1'),
]