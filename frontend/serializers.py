from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ("id", "name", "price", "minus", "condition", "main_img", "img1", "img2", "size_s_stock", "size_m_stock", "size_l_stock", "size_xl_stock")