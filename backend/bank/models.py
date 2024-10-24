from django.db import models
from django.utils import timezone
from datetime import date
from django.core.exceptions import ValidationError
import random


class Card(models.Model):
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    holder_name = models.CharField(max_length=255)
    issue_date = models.DateField(auto_now_add=True)
    expiration_date = models.DateField()
    number = models.CharField(max_length=16, unique=True)

    class Meta:
        abstract = True

    def __str__(self):
        return f"{self.name} - {self.number}"
    
    def save(self, *args, **kwargs):
        if not self.number:
            self.number = self.generate_card_number()
        if not self.expiration_date:
            self.expiration_date = date.today().replace(year=timezone.now().year + 5)
        super().save(*args, **kwargs)

    @staticmethod
    def generate_card_number():
        return ''.join([str(random.randint(0, 9)) for _ in range(16)])


class CreditCard(Card):
    current_balance = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    credit_limit = models.DecimalField(max_digits=10, decimal_places=2, default=1500)
    interest_rate = models.DecimalField(max_digits=4, decimal_places=2, default=1.00)


class DebitCard(Card):
    account_balance = models.DecimalField(max_digits=10, decimal_places=2, default=0)


class Loan(models.Model):
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)

    LOAN_TYPES = (
        ('P', 'Personal'),
        ('E', 'Student'),
        ('H', 'Mortgage')
    )

    name = models.CharField(max_length=100)
    loan_type = models.CharField(max_length=1, choices=LOAN_TYPES, default='P')
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    interest_rate = models.DecimalField(max_digits=4, decimal_places=2, default=1.00)
    start_date = models.DateField(auto_now_add=True)
    end_date = models.DateField()

    def __str__(self):
        return f"Loan for {self.user.username}: {self.amount}"
    
    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        if self.end_date <= self.start_date:
            super().delete()
            raise ValidationError("The end date must be later than the start date.")
