from werkzeug import check_password_hash


class User:
    def __init__(self, id, email, password):
        self.id = id
        self.email = email
        self.password = password

    @classmethod
    def check_password(cls, hashed_password, password):
        return check_password_hash(hashed_password, password)

# session = User.session_orm()
# a = session.query(User.id, User.email, User.password).filter(User.email == 'jose@gmail.com')

# Base.metadata.drop_all(engine)
# Base.metadata.create_all(engine)

# session.add(User(email='jose@gmail.com', password='pbkdf2:sha256:260000$fIQQexE0IVQfwWAe$5d0fddfdf11ebbe108c2910fcc3f0abce0cdb36aaedec0e81d0cb27c458d76fd'))
# session.commit()
