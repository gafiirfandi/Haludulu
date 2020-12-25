from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path
from .views import index, add_item, detail_item, ProductView, ProductGetView

urlpatterns = [
    path('', index,),
    path('cart', index),
    path('detail/<int:id>', detail_item, name="index"),
    path('update_item', index),
    path('about_us', index),
    path('add_item', index),
    path('api', ProductView.as_view()),
    path('api/<int:id>', ProductGetView.as_view()),
    path('api/product', add_item, name="add_item")
    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
