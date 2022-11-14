from .entities.users import User
from ..config.db import session


class ModelUser:
    @classmethod
    def login(self, user):
        try:
            sql = session.query('id, email, password').filter('email' == f'jose@gmail.com')
            for email in sql:
                print(email)
        except Exception as e:
            raise Exception(e)


