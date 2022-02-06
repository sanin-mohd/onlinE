from rest_framework import serializers
from django.contrib.auth.models import User
from . import models

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Account
        fields=['id','email', 'username','mobile','account_holder_name','bank','acc','courses_created','courses_enrolled','ifsc','wallet_balance','interests','dp','is_active','is_superuser','last_login','joined_date']

     
class CourseDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.CourseDetails
        fields=['id','category','creator','title','description','thumbnail','price','used_techs','enrolled_students','created_date']
       
class CourseCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=models.CourseCategory
        fields=['id','name']


        