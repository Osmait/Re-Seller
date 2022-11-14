from flask import Blueprint, request
from helpers.auth_jwt import validate_token

auth_token = Blueprint('auth_token', __name__)


@auth_token.route('verify/token', methods=['POST'])
def verify():
    token = request.get_json()['x-token']
    return validate_token(token, output=True)
