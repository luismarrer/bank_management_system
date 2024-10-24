from rest_framework import status
from rest_framework.authentication import TokenAuthentication
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from .models import CreditCard, DebitCard, Loan
from .serializers import CreditCardSerializer, DebitCardSerializer, LoanSerializer


# CreditCard Viewset
class CreditCardViewSet(viewsets.ModelViewSet):
    authentication_classes = (TokenAuthentication,)
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = CreditCardSerializer
    queryset = CreditCard.objects.all()

    def create(self, request, *args, **kwargs):
        data = request.data.copy()
        data['user'] = request.user.id
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def list(self, request, *args, **kwargs):
        queryset = self.queryset.filter(user=request.user)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        if instance.user != request.user:
            return Response({'detail': 'Not authorized to view this card.'}, status=status.HTTP_403_FORBIDDEN)

        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()

        if instance.user != request.user:
            return Response({'detail': 'Not authorized to update this card.'}, status=status.HTTP_403_FORBIDDEN)

        data = {'name': request.data.get('name')}
        serializer = self.get_serializer(instance, data=data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        if getattr(instance, '_prefetched_objects_cache', None):
            instance._prefetched_objects_cache = {}

        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()

        if instance.user != request.user:
            return Response({'detail': 'Not authorized to delete this card.'}, status=status.HTTP_403_FORBIDDEN)

        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)


# DebitCard Viewset
class DebitCardViewSet(viewsets.ModelViewSet):
    authentication_classes = (TokenAuthentication,)
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = DebitCardSerializer
    queryset = DebitCard.objects.all()

    def create(self, request):
        data = request.data.copy()
        data['user'] = request.user.id
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def list(self, request):
        queryset = self.queryset.filter(user=request.user)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        if instance.user != request.user:
            return Response({'detail': 'Not authorized to view this card.'}, status=status.HTTP_403_FORBIDDEN)

        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()

        if instance.user != request.user:
            return Response({'detail': 'Not authorized to update this card.'}, status=status.HTTP_403_FORBIDDEN)

        data = {'name': request.data.get('name')}
        serializer = self.get_serializer(instance, data=data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        if getattr(instance, '_prefetched_objects_cache', None):
            instance._prefetched_objects_cache = {}

        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()

        if instance.user != request.user:
            return Response({'detail': 'Not authorized to delete this card.'}, status=status.HTTP_403_FORBIDDEN)

        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)


# Loan Viewset
class LoanViewSet(viewsets.ModelViewSet):
    authentication_classes = (TokenAuthentication,)
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = LoanSerializer
    queryset = Loan.objects.all()

    def create(self, request, *args, **kwargs):
        data = request.data.copy()
        data['user'] = request.user.id
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def list(self, request, *args, **kwargs):
        queryset = self.queryset.filter(user=request.user)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        if instance.user != request.user:
            return Response({'detail': 'Not authorized to view this card.'}, status=status.HTTP_403_FORBIDDEN)

        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()

        if instance.user != request.user:
            return Response({'detail': 'Not authorized to update this card.'}, status=status.HTTP_403_FORBIDDEN)

        data = {'name': request.data.get('name')}
        serializer = self.get_serializer(instance, data=data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        if getattr(instance, '_prefetched_objects_cache', None):
            instance._prefetched_objects_cache = {}

        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()

        if instance.user != request.user:
            return Response({'detail': 'Not authorized to delete this card.'}, status=status.HTTP_403_FORBIDDEN)

        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)