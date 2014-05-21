from django.shortcuts import render

# Create your views here.
# load homepage
def homepage(request):
    return render(request, 'index.html')

def engHomepage(request):
    return render(request, 'english.html')

def korHomepage(request):
    return render(request, 'korean.html')
