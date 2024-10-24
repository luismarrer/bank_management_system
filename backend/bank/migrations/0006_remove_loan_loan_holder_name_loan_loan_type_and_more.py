# Generated by Django 5.1.2 on 2024-10-22 02:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bank', '0005_creditcard_current_balance_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='loan',
            name='loan_holder_name',
        ),
        migrations.AddField(
            model_name='loan',
            name='loan_type',
            field=models.CharField(choices=[('P', 'Personal'), ('E', 'Student'), ('H', 'Mortgage')], default='P', max_length=1),
        ),
        migrations.AlterField(
            model_name='loan',
            name='interest_rate',
            field=models.DecimalField(decimal_places=2, default=1.0, max_digits=4),
        ),
        migrations.AlterField(
            model_name='loan',
            name='start_date',
            field=models.DateField(auto_now_add=True),
        ),
    ]
