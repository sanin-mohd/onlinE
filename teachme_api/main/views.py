from django.shortcuts import render
from rest_framework.views import APIView
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404

from . models import CourseCategory, CourseDetails, UserDetails
from . serializers import CourseCategorySerializer, CourseDetailsSerializer, UserDetailsSerializer, UserSerializer
from rest_framework import generics
# Create your views here.

#users api_view
class UserList(APIView):
    """
    List all Users, or create a new User.
    """
    def get(self, request, format=None):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            instance=serializer.save()
            instance.set_password(instance.password)
            instance.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#userDetails api_view
class UserList(generics.ListCreateAPIView):
    queryset = UserDetails.objects.all()
    serializer_class = UserDetailsSerializer


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = UserDetails.objects.all()
    serializer_class = UserDetailsSerializer
    
#CourseCategory api_view
class CourseCategoryList(generics.ListCreateAPIView):
    queryset = CourseCategory.objects.all()
    serializer_class = CourseCategorySerializer


class CourseCategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = CourseCategory.objects.all()
    serializer_class = CourseCategorySerializer
    
#CourseDetails api_view
class CourseList(generics.ListCreateAPIView):
    queryset = CourseDetails.objects.all()
    serializer_class = CourseDetailsSerializer


class CourseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = CourseDetails.objects.all()
    serializer_class = CourseDetailsSerializer