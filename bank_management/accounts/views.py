from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User
from django.db import IntegrityError

# Create your views here.


def home(request):
    """
    Home page view
    """
    return render(request, 'home.html')

# authentication views


def signup(request):
    """
    Signup view
    """

    if request.method == 'GET':
        return render(request, 'signup.html',
                      {
                          'form': UserCreationForm
                      })
    else:
        if request.POST['password1'] == request.POST['password2']:
            # register user
            try:
                user = User.objects.create_user(
                    request.POST['username'], password=request.POST['password1'])
                user.save()
                login(request, user)
                return redirect('tasks')
            except IntegrityError:
                return render(request, 'signup.html',
                              {
                                  'form': UserCreationForm,
                                  'error': 'Username already exists'
                              })

        return render(request, 'signup.html',
                      {
                          'form': UserCreationForm,
                          'error': 'Passwords did not match'
                      })


@login_required
def logout_user(request):
    """
    Logout view
    """
    logout(request)
    return redirect('home')


def login_user(request):
    """
    Login view
    """
    if request.method == 'GET':
        return render(request, 'login.html',
                      {
                          'form': AuthenticationForm
                      })
    else:
        user = authenticate(request, username=request.POST['username'],
                            password=request.POST['password'])
        if user is None:
            return render(request, 'login.html',
                          {
                              'form': AuthenticationForm,
                              'error': 'Username or password did not match'
                          })
        else:
            login(request, user)
            return redirect('tasks')
