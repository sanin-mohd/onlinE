from rest_framework import serializers
from django.contrib.auth.models import User
from . import models

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Account
        fields=['id','email', 'username','gender', 'password','is_active', 'is_staff','is_superuser','last_login','joined_date']

     
class CourseDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.CourseDetails
        fields=['id','category','creator','title','description','price','enrolled_students','created_date']
       
class CourseCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=models.CourseCategory
        fields=['id','name']


        