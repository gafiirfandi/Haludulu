from django.shortcuts import render, redirect
from rest_framework import generics
from .models import Product, Admin
from .serializers import ProductSerializer
from django.core.mail import EmailMessage, EmailMultiAlternatives
from django.template.loader import render_to_string
from django.http import JsonResponse
import json
from django.conf import settings
from django.utils.html import strip_tags


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

def login(request):
    return render(request, 'frontend/index.html')

def db_login(request):
    if request.method == "POST":
        print(request.POST)
        print("-"*30)
        for key, value in request.session.items():
            print('{} => {}'.format(key, value))
        username = request.POST['username']
        password = request.POST['password']


        # admin = Admin.objects.get(username=username, password=password)
        # if admin:
        #     admin.isLoggedIn = True
        #     admin.save()
        return render(request, 'frontend/index.html', {'isLogin': True})
        

    return render(request, 'frontend/index.html')

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
            'products': cart_list
        })
        message_strip = strip_tags(message)
        to_email = email
        email_send = EmailMultiAlternatives(
            mail_subject, message_strip, settings.EMAIL_HOST_USER, [to_email]
        )
        email_send.attach_alternative(message, "text/html")
        email_send.fail_silently = False
        email_send.send()
    
    return render(request, 'email/purchase_success.html', {})

    # return render(request, 'frontend/add_item.html', {'products': cart_list})


# Create your views here.
def index(request):
    if request.method == "POST":
        print("berhasil yey")
    return render(request, 'frontend/index.html')

def detail_item(request, id):
    return render(request, 'frontend/index.html')

def update_item(request, id):
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
        size_s_stock = request.POST['sizeSStock']
        size_m_stock = request.POST['sizeMStock']
        size_l_stock = request.POST['sizeLStock']
        size_xl_stock = request.POST['sizeXLStock']
        Product.objects.create(name=name, price=price, minus=minus, condition=condition, main_img=main_img, img1=img1, img2=img2, img3=img3, size_s_stock=size_s_stock, size_m_stock=size_m_stock, size_l_stock=size_l_stock, size_xl_stock=size_xl_stock)


def db_update_item(request):

    if request.method == "POST":
        print("berhasil yey")
        print(request.POST)
        print(request.FILES)
        id_product = request.POST['id']
        name = request.POST['name']
        price = request.POST['price']
        minus = request.POST['minus']
        condition = request.POST['condition']
        product = Product.objects.get(pk=id_product)
        if 'main_img' in request.POST:
            main_img = request.POST['mainImg']
        else:
            main_img = request.FILES['mainImg']
            product.main_img = main_img

        if 'img1' in request.POST:
            img1 = request.POST['img1']
        else:
            img1 = request.FILES['img1']
            product.img1 = img1

        if 'img2' in request.POST:
            img2 = request.POST['img2']
        else:
            img2 = request.FILES['img2']
            product.img2 = img2
        
        # img1 = request.POST['img1']
        # img2 = request.POST['img2']
        # img3 = request.POST['img3']
        size_s_stock = request.POST['sizeSStock']
        size_m_stock = request.POST['sizeMStock']
        size_l_stock = request.POST['sizeLStock']
        size_xl_stock = request.POST['sizeXLStock']

        
        print(product)

        product.name = name
        product.price = price
        product.minus = minus
        product.condition = condition
        product.size_s_stock = size_s_stock
        product.size_m_stock = size_m_stock
        product.size_l_stock = size_l_stock
        product.size_xl_stock = size_xl_stock
        product.save()

    return render(request, 'frontend/index.html')

def db_delete_item(request):
    if request.method == "POST":
        id = list(request.POST.keys())[0]
        Product.objects.get(pk=id).delete()
        

    return render(request, 'frontend/index.html')