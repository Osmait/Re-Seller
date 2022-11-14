from models.entities.users import User, ModelsUsers, check_password_hash
from config.db import session


class ModelUser:
    @classmethod
    def login(self, user):
        try:
            sql = session.query(User.id, User.email, User.password).filter(User.email == f'{user.email}')
            for row in sql:
                if row is not None:
                    user = ModelsUsers(row[0], row[1], check_password_hash(row[2], user.password))
                    return user
        except Exception as e:
            raise Exception(e)
