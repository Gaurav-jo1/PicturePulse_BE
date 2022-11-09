from django.shortcuts import render
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.response import Response
from .serializers import UserInfoSerializers, UserMediaSerializer
from .models import UserMedia
from rest_framework import status

# Create your views here.


def front(request):
    context = {}
    return render(request, "index.html", context)


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


# @api_view(['GET'])
# @permission_classes([IsAuthenticated])
# def getUser(request):
#     user = request.user
#     userinfos = user.userinfo_set.all()
#     serializer = UserInfoSerializers(userinfos, many=True)
#     return Response(serializer.data)


from rest_framework.views import APIView
from rest_framework import permissions

class getUser(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        user = request.user
        userinfos = user.userinfo_set.all()
        serializer = UserInfoSerializers(userinfos, many=True)
        return Response(serializer.data)

class postMedia(APIView):

    def get(self, request):
        usersMedia = UserMedia.objects.all()
        serializer = UserMediaSerializer(usersMedia, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = UserMediaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)