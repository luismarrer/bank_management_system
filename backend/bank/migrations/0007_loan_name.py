# Generated by Django 5.1.2 on 2024-10-22 19:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bank', '0006_remove_loan_loan_holder_name_loan_loan_type_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='loan',
            name='name',
            field=models.CharField(default=None, max_length=100),
            preserve_default=False,
        ),
    ]