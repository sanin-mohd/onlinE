from django.contrib import admin
from . import models
# Register your models here.
admin.site.register(models.CourseCategory)
admin.site.register(models.CourseDetails)


class AccountAdmin(admin.ModelAdmin):
    model = models.Account
    list_display = ('username', 'email', 'mobile','wallet_balance','interests','is_staff','is_verified','is_active','last_login','joined_date') 
    
    readonly_fields = ('last_login','joined_date')
    ordering = ('joined_date', )
    filter_horizontal =()
    list_filter = ()
    fieldsets =()

# Register your models here.

admin.site.register(models.Account,AccountAdmin)