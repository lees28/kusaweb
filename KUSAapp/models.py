from django.db import models

class Post(models.Model):
	title = models.CharField(max_length=50,blank=True)
	content = models.TextField()
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)