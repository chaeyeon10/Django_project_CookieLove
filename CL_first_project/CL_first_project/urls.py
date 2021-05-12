from django.contrib import admin
from django.urls import path, include
from taeyoung import views

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', include("chaeyeon.urls")),
    path('', views.intro, name="intro"),
    # path('', include("youngkwon.urls")),
]
