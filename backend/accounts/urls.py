from django.urls import path
from .views import login, register, viewdoctors, doctor_count, appointment_count, prescription_count, available_doctors, book_appointment,get_patient,update_patient,get_profile

urlpatterns = [
    path('login/', login),
    path('register/', register),
    path('viewdoctors/', viewdoctors),
    path('doctor-count/', doctor_count),
    path('appointment-count/', appointment_count),
    path('prescription-count/', prescription_count),
    path('available-doctors/', available_doctors),
    path('book-appointment/', book_appointment),
    path('patient/<int:id>/', get_patient),
    path('patient/update/<int:id>/', update_patient),
    path('profile/<int:phone>/', get_profile),
]