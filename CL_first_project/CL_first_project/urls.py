from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', include("chaeyeon.urls")),
    # path('', include("taeyoung.urls")),
    path('youngkwon/', include("youngkwon.urls")),
]
