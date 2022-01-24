from unicodedata import category
from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser
from django.db.models.base import Model
from datetime import datetime
# Create your models here.
"""Custom user model Start"""
GENDER_CHOICES = (
        ('Male', 'Male'),
        ('Female', 'Female'),
    )

class MyAccountManager(BaseUserManager):
    def create_user(self,username,email,mobile,gender,password):
        if not email:
            raise ValueError('Please Enter Email')
        if not username:
            raise ValueError('Please Enter Username')
        if not mobile:
            raise ValueError('Please Enter Mobile Number')
        if not password:
            raise ValueError('Please Enter Password')
        user=self.model(
            email       =self.normalize_email(email),
            mobile      =mobile,
            gender      =gender,


        )
        user.set_password(password)
        user.save(using=self._db)
        return user
    


    def create_superuser(self,email,username,password):
        user=self.create_user(
            email=self.normalize_email(email),
            password=password,

        )
        user.is_admin=True
        user.is_active=True
        user.is_staff=True
        user.is_superadmin=True
        user.password=user.set_password(user.password)
        user.save(using=self._db)
        return user



class Account(AbstractBaseUser):
    username        =models.CharField(max_length=50)
    email           =models.EmailField(max_length=100,unique=True)   
    mobile          =models.CharField(max_length=10,unique=True,null=True)
    gender          =models.CharField(max_length=10, choices=GENDER_CHOICES,default="Male")
    password        =models.CharField(max_length=20,blank=False,null=False)
    dp              =models.ImageField(upload_to='photos/users_dp/',blank=True)

    joined_date     =models.DateTimeField(auto_now_add=True)
    last_login      =models.DateTimeField(auto_now=True)
    is_staff        =models.BooleanField(default=False)
    is_active       =models.BooleanField(default=True)
    is_verified     =models.BooleanField(default=False)
    is_superuser   =models.BooleanField(default=False)

    USERNAME_FIELD  ='email'
    REQUIRED_FIELDS =['username', 'gender', 'mobile','password']
    
    objects=MyAccountManager()

    def get_date(self):
        time = datetime.now()
        if self.date_joined.day == time.day:
            return str(time.hour - self.date_joined.hour) + " hours ago"
        else:
            if self.date_joined.month == time.month:
                return str(time.day - self.date_joined.day) + " days ago"
            else:
                if self.date_joined.year == time.year:
                    return str(time.month - self.date_joined.month) + " months ago"
        return self.date_joined

    def __str__(self):
        return self.email
    def has_perm(self,perm,obj=None):
        return self.is_admin
    def has_module_perms(self,add_label):
        return True
    
"""Custom user model End"""
class UserDetails(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    mobile = models.CharField(max_length=20)
    is_verified = models.BooleanField(default=False)
    is_online = models.BooleanField(default=False)
    
    class Meta:
        verbose_name_plural ="1. UserDetails"
        
class CourseCategory(models.Model):
    name = models.CharField(max_length=100)
    
    class Meta:
        verbose_name_plural ="2. CourseCategories"
    
    def __str__(self):
        return self.name
class CourseDetails(models.Model):
    category=models.ForeignKey(CourseCategory,on_delete=models.CASCADE,db_column='name')
    creator=models.ForeignKey(User,on_delete=models.CASCADE,db_column='username')
    title = models.CharField(max_length=100)
    description = models.TextField(default=None,null=True,blank=True)
    price=models.IntegerField(default=0)
    enrolled_students=models.IntegerField(default=0)
    created_date=models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural ="3. CourseDetails"
    