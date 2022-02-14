from pyexpat import model
from rest_framework import serializers
from django.contrib.auth.models import User
from . import models

class AccountSerializer(serializers.ModelSerializer):
    
    class Meta:
        model=models.Account
        fields=['id','email', 'username','mobile','account_holder_name','bank','acc','courses_created','courses_enrolled','ifsc','wallet_balance','interests','dp','is_active','is_superuser','last_login','joined_date']
        extra_kwargs = {'username': {'required': False},'email': {'required': False}}

class CourseDetailsSerializer(serializers.ModelSerializer):
    creator= AccountSerializer()
    class Meta:
        model=models.CourseDetails
        fields=['id','category','creator','title','description','thumbnail','price','used_techs','enrolled_students','created_date']

class CreateCourseSerializer(serializers.ModelSerializer):
    
    class Meta:
        model=models.CourseDetails
        fields=['id','category','creator','title','description','thumbnail','price','used_techs','enrolled_students','created_date']
    
class CourseCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=models.CourseCategory
        fields=['id','name']


class ChapterSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Chapter
        fields=['id','course','no','video','title','description']