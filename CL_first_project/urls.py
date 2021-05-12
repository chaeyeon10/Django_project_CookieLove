from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('chaeyeon/', include("chaeyeon.urls")),
    # path('', include("taeyoung.urls")),
    # path('', include("youngkwon.urls")),
]
