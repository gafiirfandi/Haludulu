from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path
from .views import index, add_item, detail_item, purchase, update_item, db_update_item, db_delete_item, db_login, login, ProductView, ProductGetView

urlpatterns = [
    path('', index,),
    path('cart', index),
    path('detail/<int:id>', detail_item, name="index"),
    path('update_item', index),
    path('about_us', index),
    path('add_item', index),
    path('api', ProductView.as_view()),
    path('api/<int:id>', ProductGetView.as_view()),
    path('api/product', add_item, name="add_item"),
    path('api/update_product', db_update_item, name="update_item"),
    path('api/delete_product', db_delete_item, name="delete_item"),
    path('purchase', purchase),
    path('admin_home', index),
    path('update_item/<int:id>', update_item, name="update"),
    path('login_admin', login),
    path('api/login', db_login),
    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
