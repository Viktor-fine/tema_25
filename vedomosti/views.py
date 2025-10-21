from django.shortcuts import render

def b1 (request):
    val = ['Хай', 200, 300, 400, 500, 600, 700, 800, 900, 1000]
    return render (request, 'form_b/b_1.html', context={'znak': val})

def b2(request):
    return render (request, 'form_b/b_2.html')

def b3(request):
    return render (request, 'form_b/b_3.html')

def b4(request):
    return render (request, 'form_b/b_4.html')

def b5(request):
    return render (request, 'form_b/b_5.html')

def b6(request):
    return render (request, 'form_b/b_6.html')

def b7(request):
    return render (request, 'form_b/b_7.html')

def b8(request):
    return render (request, 'form_b/b_8.html')

def b9(request):
    return render (request, 'form_b/b_9.html')

def b10(request):
    return render (request, 'form_b/b_10.html')