from django import forms
from .models import CreditCard, DebitCard, Loan


class CreditCardForm(forms.ModelForm):
    class Meta:
        model = CreditCard
        fields = ['card_holder_name', 'issue_date', 'expiration_date',
                  'card_number', 'credit_limit', 'interest_rate']
        widgets = {
            'issue_date': forms.DateInput(attrs={'type': 'date'}),
            'expiration_date': forms.DateInput(attrs={'type': 'date'}),
        }


class DebitCardForm(forms.ModelForm):
    class Meta:
        model = DebitCard
        fields = ['card_holder_name', 'issue_date',
                  'expiration_date', 'card_number', 'account_balance']
        widgets = {
            'issue_date': forms.DateInput(attrs={'type': 'date'}),
            'expiration_date': forms.DateInput(attrs={'type': 'date'}),
        }


class LoanForm(forms.ModelForm):
    class Meta:
        model = Loan
        fields = ['loan_holder_name', 'amount',
                  'interest_rate', 'start_date', 'end_date']
        widgets = {
            'start_date': forms.DateInput(attrs={'type': 'date'}),
            'end_date': forms.DateInput(attrs={'type': 'date'}),
        }
