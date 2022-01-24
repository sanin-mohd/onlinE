from rest_framework import serializers
from django.contrib.auth.models import User
from . import models

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['id','email', 'username', 'password','is_active', 'is_staff','is_superuser','last_login','date_joined']

class UserDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.UserDetails
        fields=['id','user','mobile', 'is_verified','is_online']
        
class CourseDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.CourseDetails
        fields=['id','category','creator','title','description','price','enrolled_students','created_date']
       
class CourseCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=models.CourseCategory
        fields=['id','name']


        