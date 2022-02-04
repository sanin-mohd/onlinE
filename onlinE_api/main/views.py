from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404
from . import models
from . models import Account, CourseCategory, CourseDetails
from . serializers import AccountSerializer, CourseCategorySerializer, CourseDetailsSerializer
from rest_framework import generics
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated,IsAdminUser

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        token['email'] = user.email
        token['wallet_balance'] = user.wallet_balance
        
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
# Create your views here.

#users api_view
class AccountList(APIView):
    """
    List all Users, or create a new User.
    
    """
    serializer_class = AccountSerializer
    
    def get(self, request, format=None):
        users = models.Account.objects.all()
        serializer = AccountSerializer(users, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = AccountSerializer(data=request.data)
        if serializer.is_valid():
            instance=serializer.save()
            instance.set_password(instance.password)
            instance.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class AccountDetail(APIView):
    
    """
    Retrieve, update or delete a snippet instance.
    """
    permission_classes = [IsAuthenticated]
    def get_object(self, pk):
        try:
            return Account.objects.get(pk=pk)
        except Account.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = AccountSerializer(snippet)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        user = self.get_object(pk)
        serializer = AccountSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        user = self.get_object(pk)
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
#CourseCategory api_view
class CourseCategoryList(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = CourseCategory.objects.all()
    serializer_class = CourseCategorySerializer


class CourseCategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = CourseCategory.objects.all()
    serializer_class = CourseCategorySerializer
    
#CourseDetails api_view
class CourseList(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = CourseDetails.objects.all()
    serializer_class = CourseDetailsSerializer


class CourseDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = CourseDetails.objects.all()
    serializer_class = CourseDetailsSerializer