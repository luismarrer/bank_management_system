from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from . import views

router = routers.DefaultRouter()
router.register('creditcards', views.CreditCardViewSet, 'creditcards')
router.register('debitcards', views.DebitCardViewSet, 'debitcards')
router.register('loans', views.LoanViewSet, 'loans')

urlpatterns = [
    path('', include(router.urls)),
	path('predict-loan/', views.predict_loan_approval, name='predict-loan'),
    path('docs/', include_docs_urls(title='Bank Management API'))
]
