# Generated by Django 4.1.3 on 2022-11-06 13:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userProfile', '0009_remove_userinfo_usermedia_userinfo_usermedia'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userinfo',
            name='usermedia',
            field=models.ManyToManyField(to='userProfile.usermedia'),
        ),
    ]
