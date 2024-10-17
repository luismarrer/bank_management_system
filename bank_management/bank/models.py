from django.db import models

# Create your models here.


class Card(models.Model):
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    card_holder_name = models.CharField(max_length=255)
    issue_date = models.DateField()
    expiration_date = models.DateField()
    card_number = models.CharField(max_length=16, unique=True)

    class Meta:
        abstract = True

    def __str__(self):
        return f"{self.card_holder_name} - {self.card_number}"


class CreditCard(Card):
    credit_limit = models.DecimalField(max_digits=10, decimal_places=2)
    interest_rate = models.DecimalField(max_digits=4, decimal_places=2)


class DebitCard(Card):
    account_balance = models.DecimalField(max_digits=10, decimal_places=2)


class Loan(models.Model):
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    loan_holder_name = models.CharField(max_length=255)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    interest_rate = models.DecimalField(max_digits=4, decimal_places=2)
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return f"Loan for {self.loan_holder_name}: {self.amount}"
