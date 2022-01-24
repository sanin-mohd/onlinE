from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('users_list', views.UserList.as_view()),
    #path('userDetails/<int:pk>/', views.UserDetail.as_view()),
    path('course_category_list',views.CourseCategoryList.as_view()),
    path('course_category_detail/<int:pk>',views.CourseCategoryDetail.as_view()),
    path('course_list',views.CourseList.as_view()),
    path('course_detail/<int:pk>', views.CourseDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)