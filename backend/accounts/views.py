from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer

# Profile view
"""
class UserViewSet(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request):
        serializer = UserSerializer(
            request.user, data=request.data, partial=True)
        if serializer.is_valid():
            if 'password' in request.data:
                request.user.set_password(request.data.get('password'))
                request.user.save()
            else:
                serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
"""


class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            user = User.objects.get(username=request.data['username'])
            user.set_password(request.data['password'])
            user.save()
            token = Token.objects.create(user=user)
            return Response(
                {
                    'token': token.key,
                    'user': serializer.data
                }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    def post(self, request):
        user = authenticate(username=request.data['username'],
                            password=request.data['password'])
        if user:
            token, _ = Token.objects.get_or_create(user=user)
            serializer = UserSerializer(instance=user)
            return Response({'token': token.key, 'user': serializer.data}, status=status.HTTP_200_OK)
        return Response({'error': 'Invalid username or password'}, status=status.HTTP_401_UNAUTHORIZED)


class LogoutView(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        request.user.auth_token.delete()
        return Response(status=status.HTTP_200_OK)
