# Generated by Django 5.0.6 on 2024-07-05 01:44

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Steam3Proyecto', '0006_compra'),
    ]

    operations = [
        migrations.AlterField(
            model_name='compra',
            name='usuario',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Steam3Proyecto.usuario'),
        ),
    ]
