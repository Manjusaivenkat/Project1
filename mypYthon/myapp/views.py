from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from django.http import HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt
from myapp.models import User
import json


@csrf_exempt
def create_user(request):
    if request.method == 'POST':
        print("userName in py",json.loads(request.body))
        try:
            data = json.loads(request.body)
            username = data['data']['username']
            
        except (ValueError, KeyError):
            error= "ValueError" if ValueError else "nothing"
            error2= "KeyError" if KeyError else "nothing2"
            print("errors=>", error, error2)
            return HttpResponseBadRequest("Invalid request body ")

        if not username:
            return HttpResponseBadRequest("Username is required")

        user = User(username=username)
        user.save()

        return JsonResponse({'success': True})
    else:
        return JsonResponse({'error': 'Invalid request method'})

