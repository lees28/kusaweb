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

        photo_urls = []
        lines = []
        filenames = ["Springternational", "KoreaNight2015", "KoreanLunarNewYear2015", "SaveMySeoul", 
                     "BBQ2014", "BowlingNight", "Chuseok2014", "Kickoff2014", "CareerNight", 
                     "YearOfTheHorse", "KoreaNight-SNL", "Chuseok2013"]
        base_dir = "KUSAapp/static/photo_urls/"
        for filename in filenames:
            lines = [line.strip() for line in open(base_dir + filename)]
            photo_urls.append(lines)
        return render(request, 'english.html', {"execs":execs, "photo_urls":photo_urls, "filenames":filenames})

def contact(request):
    send_mail(
        request.POST['subject'],
        request.POST['message'],
        request.POST.get('email', 'noreply@simplesite.com'),
        ['kusa.dukeu@gmail.com'], #email address where message is sent.
        fail_silently=False
    )
    return HttpResponseRedirect('/')

    

