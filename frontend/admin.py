from django.contrib import admin

from .models import Product, Admin

# Register your models here.
admin.site.register(Product)
admin.site.register(Admin)
