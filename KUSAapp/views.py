from django.shortcuts import render
from django.core.mail import send_mail
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.shortcuts import render_to_response

# Create your views here.
# load homepage
def homepage(request):
    return render(request, 'index.html')

def engHomepage(request):
    return render(request, 'english.html')

def korHomepage(request):
    return render(request, 'korean.html')

def contact(request):
    errors = []
    if request.method == 'POST':
        if not request.POST.get('subject', ''):
            errors.append('Enter a subject.')
        if not request.POST.get('message', ''):
            errors.append('Enter a message.')
        if request.POST.get('email') and '@' not in request.POST['email']:
            errors.append('Enter a valid e-mail address.')
        if not errors:
            send_mail(
                request.POST['subject'],
                request.POST['message'],
                request.POST.get('email', 'noreply@simplesite.com'),
                ['alexsong93@gmail.com'], #email address where message is sent.
            )
            return HttpResponseRedirect('/eng/')
    return render(request, 'english.html',
        {'errors': errors})
    

