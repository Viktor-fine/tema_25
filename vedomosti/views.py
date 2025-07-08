from django.shortcuts import render

def b1 (request):
    return render (request, 'form_b/b_1.html')

def b2(request):
    return render (request, 'form_b/b_2.html')

def b3(request):
    return render (request, 'form_b/b_3.html')
