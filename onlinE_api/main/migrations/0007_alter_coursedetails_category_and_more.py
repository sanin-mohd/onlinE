# Generated by Django 4.0 on 2022-02-14 13:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_alter_usercourseprogress_options_chapter'),
    ]

    operations = [
        migrations.AlterField(
            model_name='coursedetails',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.coursecategory'),
        ),
        migrations.AlterField(
            model_name='coursedetails',
            name='creator',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.account'),
        ),
    ]