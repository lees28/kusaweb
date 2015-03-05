from django.shortcuts import render
from django.core.mail import send_mail
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.shortcuts import render_to_response
import json
import os

# Create your views here.

def homepage(request):
    with open("templates/exec.json") as json_file:
        execs = json.load(json_file)

        photo_urls = {}
        lines = []
        for filename in os.listdir("KUSAapp/static/photo_urls"):
            lines = [line.strip() for line in open("KUSAapp/static/photo_urls/" + filename)]
            photo_urls[filename] = lines
        photo_urls_len = len(photo_urls)
        return render(request, 'english.html', {"execs":execs, "photo_urls":photo_urls, "photo_urls_len":photo_urls_len})

def contact(request):
    send_mail(
        request.POST['subject'],
        request.POST['message'],
        request.POST.get('email', 'noreply@simplesite.com'),
        ['kusa.dukeu@gmail.com'], #email address where message is sent.
        fail_silently=False
    )
    return HttpResponseRedirect('/')

    

