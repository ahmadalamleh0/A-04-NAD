from django.db import models
from django.contrib.auth.models import User
from profiles.models import Profile
# Create your models here.

class Post(models.Model):
    title = models.charField(max_length=200)
    body = models.TextField()
    liked = models.ManyToManyField(User, blank=True)
    author = models.ForeignKey(Profile, on_delete=models.CASCADE)
    