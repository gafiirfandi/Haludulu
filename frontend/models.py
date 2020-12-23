from django.db import models
from django.conf import settings

class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.IntegerField()
    minus = models.CharField(max_length=255)
    condition = models.CharField(max_length=255)
    main_img = models.ImageField()
    img1 = models.ImageField()
    img2 = models.ImageField()
    img3 = models.ImageField()
    size_s_stock = models.IntegerField()
    size_m_stock = models.IntegerField()
    size_l_stock = models.IntegerField()
    size_xl_stock = models.IntegerField()