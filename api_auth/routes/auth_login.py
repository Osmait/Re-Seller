from flask import Blueprint, request
from ..models.entities.users import User
from ..models.user import ModelUser


auth_login = Blueprint('auth_login', __name__)

@auth_login.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User(0, data['username'], data['password'])
    logged_user = ModelUser.login(user)
    print(logged_user)

