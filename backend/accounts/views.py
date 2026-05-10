from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import LoginSerializer, RegisterSerializer,DoctorSerializer, AppointmentSerializer,PatientSerializer
from .models import Login, Register,Doctor,Appointment,Prescription, Patient
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.http import JsonResponse

# Create your views here.


@api_view(['POST'])
def login(request):
    serializer = LoginSerializer(data=request.data)
    if serializer.is_valid():
        login = serializer.save()
        return Response({'message': 'Login successful'})
    return Response(serializer.errors, status=400)

@api_view(['POST'])
def register(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        register = serializer.save()
        return Response({'message': 'Registration successful'})
    return Response(serializer.errors, status=400)

@api_view(['GET'])
def available_doctors(request):
    doctors = Doctor.objects.filter(available=True)
    serializer = DoctorSerializer(doctors, many=True, context={'request': request})
    return Response(serializer.data)

@api_view(['GET'])
def viewdoctors(request):
    doctors = Doctor.objects.all()
    serializer = DoctorSerializer(doctors, many=True, context={'request': request})
    return Response(serializer.data)

@api_view(['GET'])
def doctor_count(request):
    count = Doctor.objects.filter(available=True).count()
    return Response({"count": count})

@api_view(['GET'])
def appointment_count(request):
    count = Appointment.objects.count()
    return Response({"count": count})

@api_view(["GET"])
def prescription_count(request):
    count = Prescription.objects.count()
    return Response({"count": count})

@api_view(['POST'])
def book_appointment(request):
    serializer = AppointmentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Appointment booked"})
    return Response(serializer.errors)

@api_view(['GET'])
def get_patient(request, id):
    patient = Patient.objects.get(id=id)
    serializer = PatientSerializer(patient)
    return Response(serializer.data)


@api_view(['PUT'])
def update_patient(request, id):
    patient = Patient.objects.get(id=id)
    serializer = PatientSerializer(patient, data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Profile updated successfully"})

    return Response(serializer.errors)

@api_view(['GET'])
def get_profile(request, phone):
    try:
        user = Register.objects.get(phone=phone)
        return Response({
            "fullname": user.fullname,
            "age": user.age,
            "gender": user.gender,
            "bloodgroup": user.bloodgroup,
            "phone": user.phone,
            "address": user.address
        })
    except Register.DoesNotExist:
        return Response({"error": "User not found"})