from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'KUSA.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    
    #homepage
    url(r'^/?$','KUSAapp.views.homepage'),
    
    #different languages
    url(r'^eng/?$', 'KUSAapp.views.engHomepage'),
    url(r'^kor/?$', 'KUSAapp.views.korHomepage'),
    
    # contact form
    url(r'^contact/?$', 'KUSAapp.views.contact', name='contact'),
    url(r'^thanks/?$', '.KUSAapp.views.thanks', name='thanks'),
)
