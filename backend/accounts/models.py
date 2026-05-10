from django.db import models


# Create your models here.

class Login(models.Model):
    fullname = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.fullname

class Register(models.Model):
    fullname = models.CharField(max_length=100)
    age = models.IntegerField()
    gender = models.CharField(max_length=100)
    bloodgroup = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.fullname

class Doctor(models.Model):
    name = models.CharField(max_length=100)
    specialization = models.CharField(max_length=100)
    available = models.BooleanField(default=True)
    image = models.ImageField(upload_to='doctors/', null=True, blank=True)

    def __str__(self):
        return self.name

class Appointment(models.Model):
    patient_name = models.CharField(max_length=100)
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    date = models.DateField(auto_now_add=True)
    status = models.CharField(max_length=50, default="Scheduled")

    def __str__(self):
        return f"{self.patient_name} - {self.doctor.name}"

class Prescription(models.Model):
    patient_name = models.CharField(max_length=100)
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    date = models.DateField(auto_now_add=True)
    status = models.CharField(max_length=50, default="Scheduled")

    def __str__(self):
        return f"{self.patient_name} - {self.doctor.name}"

class Patient(models.Model):
    full_name = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    email = models.EmailField(blank=True, null=True)
    age = models.IntegerField(null=True, blank=True)
    address = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.full_name
