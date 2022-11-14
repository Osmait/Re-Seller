from flask import Blueprint, request, jsonify
from models.entities.users import ModelsUsers
from models.user import ModelUser
from helpers.auth_jwt import write_token

auth_login = Blueprint('auth_login', __name__)


@auth_login.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = ModelsUsers(0, data['email'], data['password'])
    logged_user = ModelUser.login(user)
    if not logged_user or not logged_user.password:
        response = jsonify({
            'msg': 'User or password invalid'
        })
        return response, 401
    if logged_user and logged_user.password:
        x_token = str(write_token(data={'id': logged_user.id})).split("'")[1]
        response = jsonify({
            'msg': 'success',
            'x-token': f'{x_token}'
        })
        return response, 200
