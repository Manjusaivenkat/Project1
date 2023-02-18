from django.db import models

# Create your models here.

from django.contrib.auth.models import AbstractUser

from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    # add any custom fields here

    # set unique related_name for groups and user_permissions fields
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='myapp_users_groups',
        blank=True,
        help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.',
        verbose_name='groups',
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='myapp_users_permissions',
        blank=True,
        help_text='Specific permissions for this user.',
        verbose_name='user permissions',
    )
    username = models.CharField(max_length=30, unique=False)
    

