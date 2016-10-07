from django.shortcuts import render, HttpResponse, redirect
from django.core.urlresolvers import reverse

def index(request):
	return render(request,'portfolio_app/index.html')






