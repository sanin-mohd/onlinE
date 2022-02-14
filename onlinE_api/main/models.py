from unicodedata import category
from django.db import models

from django.contrib.auth.models import BaseUserManager, AbstractBaseUser
from django.db.models.base import Model
from datetime import datetime
# Create your models here.
"""Custom user model Start"""


class MyAccountManager(BaseUserManager):
    def create_user(self,email,password=None):
        if not email:
            raise ValueError('Please Enter Email')
        if not password:
            raise ValueError('Please Enter Password')
        user=self.model(
            email  =  self.normalize_email(email),

        )
        user.is_active=True
        user.is_staff=False
        user.is_superuser=False
        user.is_verified=False
        user.set_password(password)
        user.save(using=self._db)
        return user
    


    def create_superuser(self,email,password):
        user=self.create_user(
            email=self.normalize_email(email),
            password=password
        )
       
        user.is_active=True
        user.is_staff=True
        user.is_superuser=True
        user.is_verified=True
        user.set_password(password)
        user.save(using=self._db)
        return user



class Account(AbstractBaseUser):
    username        =models.CharField(max_length=50)
    email           =models.EmailField(max_length=100,unique=True)   
    mobile          =models.CharField(max_length=10,unique=True,null=True)
    password        =models.CharField(max_length=20,blank=False,null=False)
    dp              =models.ImageField(upload_to='photos/users_dp/',blank=True)
    bio             =models.TextField(blank=True,null=True)
    interests       =models.TextField(max_length=1000,null=True,blank=True)
    wallet_balance  =models.IntegerField(default=0)
    account_holder_name =models.CharField(max_length=200,null=True,blank=True)
    bank            =models.CharField(max_length=200,null=True,blank=True)
    acc             =models.CharField(max_length=20,null=True,blank=True)
    ifsc            =models.CharField(max_length=20,null=True,blank=True)
    courses_created =models.IntegerField(default=0)
    courses_enrolled=models.IntegerField(default=0)
    
    
    joined_date     =models.DateTimeField(auto_now_add=True)
    last_login      =models.DateTimeField(auto_now=True)
    is_staff        =models.BooleanField(default=False)
    is_active       =models.BooleanField(default=True)
    is_verified     =models.BooleanField(default=False)
    is_superuser   =models.BooleanField(default=False)

    USERNAME_FIELD  ='email'
    REQUIRED_FIELDS =['password']
    
    objects=MyAccountManager()

    def get_date(self):
        time = datetime.now()
        if self.joined_date.day == time.day:
            return str(time.hour - self.joined_date.hour) + " hours ago"
        else:
            if self.joined_date.month == time.month:
                return str(time.day - self.joined_date.day) + " days ago"
            else:
                if self.joined_date.year == time.year:
                    return str(time.month - self.joined_date.month) + " months ago"
        return self.joined_date

    def __str__(self):
        return self.email
    def has_perm(self,perm,obj=None):
        return self.is_superuser
    def has_module_perms(self,add_label):
        return True
    
"""Custom user model End"""

        
class CourseCategory(models.Model):
    name = models.CharField(max_length=100,unique=True)
    
    def get_count(self):
        count=CourseDetails.objects.filter(category=self.name).count()
        return count

    class Meta:
        verbose_name_plural ="2. CourseCategories"
    
    def __str__(self):
        return self.name
    
    
class CourseDetails(models.Model):
    category=models.ForeignKey(CourseCategory,on_delete=models.CASCADE)
    creator=models.ForeignKey(Account,on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField(default=None,null=True,blank=True)
    price=models.IntegerField(default=0)
    thumbnail=models.ImageField(upload_to='photos/course_thumbnail/',null=True,blank=True)
    used_techs=models.TextField(default=None,null=True,blank=True)
    enrolled_students=models.IntegerField(default=0)
    created_date=models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural ="3. CourseDetails"
    def __str__(self):
        return self.title
    
    
class Chapter(models.Model):
    course = models.ForeignKey(CourseDetails, on_delete=models.CASCADE)
    title = models.CharField(max_length=50, blank=False)
    no = models.IntegerField()
    description = models.TextField()
    video = models.FileField(upload_to='chapter_videos',null=True, blank=True)
    class Meta:
        verbose_name_plural ="4. chapters"
    def __str__(self):
        return str(self.course)+'---'+str(self.title)
    
class UserCourseProgress(models.Model):
    course      =   models.ForeignKey(CourseDetails,on_delete=models.CASCADE)
    user        =   models.ForeignKey(Account,on_delete=models.CASCADE)
    subject     =   models.CharField(max_length=200,blank=True)
    review      =   models.TextField(max_length=500,blank=True)
    rating      =   models.FloatField()
    progress    =   models.IntegerField()
    status      =   models.BooleanField(default=False)
    created_at  =   models.DateTimeField(auto_now_add=True)
    updated_at  =   models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.subject

    class Meta:
        verbose_name_plural ="5. course_progress"

class TransactionHistory(models.Model):
    pass