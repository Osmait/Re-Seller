from flask import jsonify
from jwt import encode, decode, exceptions
from datetime import datetime, timedelta
from decouple import config


def expire_date(days: int):
    now = datetime.now()
    new_date = now + timedelta(days)
    return new_date


def write_token(data: dict):
    token = encode(payload={**data, 'exp': expire_date(7)}, key=config('SIGN_JWT'), algorithm='HS256')
    return token.encode('UTF-8')


def validate_token(token, output=False):
    try:
        if output:
            return decode(token, key=config('SIGN_JWT'), algorithms=['HS256'])
    except exceptions.DecodeError:
        response = jsonify({
            'msg': 'Invalid token'
        })
        return response, 401
    except exceptions.ExpiredSignatureError:
        response = jsonify({
            'msg': 'Token expired'
        })
        return response, 401
