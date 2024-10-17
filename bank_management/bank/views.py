from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from .models import CreditCard, DebitCard, Loan
from .forms import CreditCardForm, DebitCardForm, LoanForm

# Create your views here.

# GET all


@login_required
def my_bank(request):
    """
    my bank view for authenticated users - GET(READ)
    """
    credit_cards = CreditCard.objects.filter(user=request.user)
    debit_cards = DebitCard.objects.filter(user=request.user)
    loans = Loan.objects.filter(user=request.user)
    return render(request, 'my_bank.html',
                  {
                      'credit_cards': credit_cards,
                      'debit_cards': debit_cards,
                      'loans': loans,
                  })

# Create


@login_required
def create_credit_card(request):
    """
    Create card view - POST(CREATE)
    """
    if request.method == 'GET':
        return render(request, 'create_credit_card.html',
                      {
                          'form': CreditCardForm
                      })
    else:
        try:
            form = CreditCardForm(request.POST)
            new_credit_card = form.save(commit=False)
            new_credit_card.user = request.user
            new_credit_card.save()
            return redirect('my_bank')
        except ValueError:
            return render(request, 'create_credit_card.html',
                          {
                              'form': CreditCardForm,
                              'error': 'Bad data passed in. Try again'
                          })


@login_required
def create_debit_card(request):
    """
    Create card view - POST(CREATE)
    """
    if request.method == 'GET':
        return render(request, 'create_debit_card.html',
                      {
                          'form': DebitCardForm
                      })
    else:
        try:
            form = DebitCardForm(request.POST)
            new_debit_card = form.save(commit=False)
            new_debit_card.user = request.user
            new_debit_card.save()
            return redirect('my_bank')
        except ValueError:
            return render(request, 'create_debit_card.html',
                          {
                              'form': DebitCardForm,
                              'error': 'Bad data passed in. Try again'
                          })


@login_required
def create_loan(request):
    """
    Create loan view - POST(CREATE)
    """
    if request.method == 'GET':
        return render(request, 'create_loan.html',
                      {
                          'form': LoanForm
                      })
    else:
        try:
            form = LoanForm(request.POST)
            new_loan = form.save(commit=False)
            new_loan.user = request.user
            new_loan.save()
            return redirect('my_bank')
        except ValueError:
            return render(request, 'create_loan.html',
                          {
                              'form': LoanForm,
                              'error': 'Bad data passed in. Try again'
                          })

# Update


@login_required
def credit_card_detail(request, credit_card_id):
    """
    Credit card detail view - GET(READ) and POST(UPDATE)
    """
    credit_card = get_object_or_404(
        CreditCard, pk=credit_card_id, user=request.user)
    if request.method == 'GET':
        form = CreditCard(instance=credit_card)
        return render(request, 'credit_card_detail.html',
                      {
                          'credit_card': credit_card,
                          'form': form
                      })
    else:
        try:
            form = CreditCard(request.POST, instance=credit_card).save()
            return redirect('my_bank')
        except ValueError:
            return render(request, 'credit_card_detail.html',
                          {
                              'credit_card': credit_card,
                              'form': CreditCard,
                              'error': 'Bad data passed in. Try again'
                          })


@login_required
def debit_card_detail(request, debit_card_id):
    """
    Debit card detail view - GET(READ) and POST(UPDATE)
    """
    debit_card = get_object_or_404(
        DebitCard, pk=debit_card_id, user=request.user)
    if request.method == 'GET':
        form = DebitCard(instance=debit_card)
        return render(request, 'debit_card_detail.html',
                      {
                          'debit_card': debit_card,
                          'form': form
                      })
    else:
        try:
            form = DebitCard(request.POST, instance=debit_card).save()
            return redirect('my_bank')
        except ValueError:
            return render(request, 'debit_card_detail.html',
                          {
                              'debit_card': debit_card,
                              'form': DebitCard,
                              'error': 'Bad data passed in. Try again'
                          })


@login_required
def loan_detail(request, loan_id):
    """
    Loan detail view - GET(READ) and POST(UPDATE)
    """
    loan = get_object_or_404(Loan, pk=loan_id, user=request.user)
    if request.method == 'GET':
        form = Loan(instance=loan)
        return render(request, 'loan_detail.html',
                      {
                          'loan': loan,
                          'form': form
                      })
    else:
        try:
            form = Loan(request.POST, instance=loan).save()
            return redirect('my_bank')
        except ValueError:
            return render(request, 'loan_detail.html',
                          {
                              'loan': loan,
                              'form': Loan,
                              'error': 'Bad data passed in. Try again'
                          })


# Delete
@login_required
def delete_task(request, model_class, account_item_id):
    """
    Delete a CreditCard or DebitCard or Loan instance view - POST(DELETE)
    """
    account_item = get_object_or_404(
        model_class, pk=account_item_id, user=request.user)
    if request.method == 'POST':
        account_item.delete()
        return redirect('my_bank')
