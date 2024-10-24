from rest_framework import serializers
from .models import CreditCard, DebitCard, Loan


class CreditCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = CreditCard
        fields = '__all__'
        read_only_fields = ('number', 'expiration_date', 'issue_date', 'interest_rate')


class DebitCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = DebitCard
        fields = '__all__'
        read_only_fields = ('number', 'expiration_date', 'issue_date',)


class LoanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Loan
        fields = '__all__'
        read_only_fields = ('start_date', 'interest_rate',)
