from django.shortcuts import render, redirect
from rest_framework import generics
from .models import Product
from .serializers import ProductSerializer
from django.core.mail import EmailMessage
from django.template.loader import render_to_string
from django.http import JsonResponse
import json
from django.conf import settings


class ProductView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductGetView(generics.ListAPIView):
    # id = 4
    
    serializer_class = ProductSerializer

    def get_queryset(self):
        id = self.kwargs.get("id")
        product = Product.objects.filter(pk=id)
        return product

def purchase(request):
    
    if request.method == "POST":
        # print(request.POST)
        cart_list = list(json.loads(request.POST['cart']).values())
        email = request.POST['email']
        # print("-"*30)
        # print(cart_list)
        # print("-"*30)
        # print(email)
        
        mail_subject = 'Purchasement Successful.'
        message = render_to_string('email/purchase_success.html', {
            'products': cart_dict
        })
        to_email = "gafiirfandi45@gmail.com"
        email_send = EmailMessage(
            mail_subject, message, settings.EMAIL_HOST_USER, [to_email]
        )
        email_send.fail_silently = False
        email_send.send()

    return render(request, 'frontend/add_item.html')


# Create your views here.
def index(request):
    if request.method == "POST":
        print("berhasil yey")
    return render(request, 'frontend/index.html')

def detail_item(request, id):
    return render(request, 'frontend/index.html')

def add_item(request):
    if request.method == "POST":
        print("berhasil yey")
        print(request.POST)
        print(request.FILES)
        name = request.POST['name']
        price = request.POST['price']
        minus = request.POST['minus']
        condition = request.POST['condition']
        main_img = request.FILES['mainImg']
        img1 = request.FILES['img1']
        img2 = request.FILES['img2']
        img3 = request.FILES['img3']
        size_s_stock = request.POST['sizeSStock']
        size_m_stock = request.POST['sizeMStock']
        size_l_stock = request.POST['sizeLStock']
        size_xl_stock = request.POST['sizeXLStock']
        Product.objects.create(name=name, price=price, minus=minus, condition=condition, main_img=main_img, img1=img1, img2=img2, img3=img3, size_s_stock=size_s_stock, size_m_stock=size_m_stock, size_l_stock=size_l_stock, size_xl_stock=size_xl_stock)




    return render(request, 'frontend/add_item.html')