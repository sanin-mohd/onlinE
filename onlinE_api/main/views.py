from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404
from . import models
from . models import Account, Chapter, CourseCategory, CourseDetails
from . serializers import AccountSerializer, ChapterSerializer, CourseCategorySerializer, CourseDetailsSerializer, CreateCourseSerializer
from rest_framework import generics
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated,IsAdminUser,AllowAny

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        
        token['username'] = user.username
        token['email'] = user.email
        token['wallet_balance'] = user.wallet_balance
        token['is_superuser'] = user.is_superuser
        token['mobile'] = user.mobile
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
    permission_classes = [AllowAny]
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
    def patch(self, request, pk, format=None):
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



from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
@csrf_exempt
def change_password(request, pk):
    if request.method == 'POST':
        password = request.POST['password']
        print(password)
        user = Account.objects.get(id=pk)
        print(user)
        user.set_password(password)
        print(user.password)
        user.save()
        return JsonResponse({'status':status.HTTP_200_OK})


from django.contrib.auth import authenticate
@csrf_exempt
def check_old_password(request):
    if request.method == 'POST':
        old_password = request.POST['old_password']
        email = request.POST['email']
        user = authenticate(email=email, password=old_password)
        if user is not None:
            return JsonResponse({'status':True})
        else:
            return JsonResponse({'status':False})

    
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
    

class CreateCourse(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = CourseDetails.objects.all()
    serializer_class = CreateCourseSerializer
    
class UserCourseList(generics.ListAPIView):
    serializer_class = CourseDetailsSerializer

    def get_queryset(self):
        """
        This view should return a list of all the purchases
        for the currently authenticated user.
        """
        user = self.request.user
        return CourseDetails.objects.filter(creator=user.id)


class CourseDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = CourseDetails.objects.all()
    serializer_class = CourseDetailsSerializer


#chapter api_view
class ChapterList(generics.ListCreateAPIView):
    # permission_classes = [IsAuthenticated]
    queryset = Chapter.objects.all()
    serializer_class = ChapterSerializer

from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer

@api_view(('GET',))
def get_chapters(request,pk):
    chapters = Chapter.objects.filter(course=pk).order_by('no')
    serializer = ChapterSerializer(chapters, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(('DELETE','GET',))
def delete_chapter(request,pk):
    try:
        Chapter.objects.get(id=pk).delete()
        return Response({'status':True})
    except Chapter.DoesNotExist:
        return Response({'status':False})