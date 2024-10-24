from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from .views import CreditCardViewSet, DebitCardViewSet, LoanViewSet

router = routers.DefaultRouter()
router.register('creditcards', CreditCardViewSet, 'creditcards')
router.register('debitcards', DebitCardViewSet, 'debitcards')
router.register('loans', LoanViewSet, 'loans')

urlpatterns = [
    path('', include(router.urls)),
    path('docs/', include_docs_urls(title='Bank Management API'))
]
