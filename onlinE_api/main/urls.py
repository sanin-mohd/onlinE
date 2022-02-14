from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views
from rest_framework_simplejwt.views import (
    
    TokenRefreshView,
)

urlpatterns = [
    #login
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    #users
    path('users_list', views.AccountList.as_view()),
    path('user_details/<int:pk>/', views.AccountDetail.as_view()),
    path('change_password/<int:pk>/', views.change_password),
    path('check_old_password', views.check_old_password),
    
    #categories
    path('course_category_list',views.CourseCategoryList.as_view()),
    path('course_category_detail/<int:pk>',views.CourseCategoryDetail.as_view()),
    
    #courses
    path('course_list',views.CourseList.as_view()),
    path('create_course',views.CreateCourse.as_view()),
    path('course_detail/<int:pk>', views.CourseDetail.as_view()),
    path('user_courses', views.UserCourseList.as_view()),
    
    #Chapters
    path('chapter_list',views.ChapterList.as_view()),
    path('get_chapters/<int:pk>', views.get_chapters),
    path('delete_chapter/<int:pk>',views.delete_chapter),
    
]

urlpatterns = format_suffix_patterns(urlpatterns)