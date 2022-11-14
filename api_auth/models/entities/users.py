from werkzeug.security import check_password_hash
from decouple import config
from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()
class User(Base):
    __tablename__ = config('TABLE_NAME')
    id = Column(Integer(), primary_key=True)
    email = Column(String(), nullable=False, unique=True)
    password = Column(String(), nullable=False)
    def __str__(self):
        return self.email

class ModelsUsers:
    def __init__(self, id, email, password) -> None:
        self.id = id
        self.email = email
        self.password = password

# session = User.session_orm()
# a = session.query(User.id, User.email, User.password).filter(User.email == 'jose@gmail.com')

# Base.metadata.drop_all(engine)
# Base.metadata.create_all(engine)

# session.add(User(email='jose@gmail.com', password='pbkdf2:sha256:260000$fIQQexE0IVQfwWAe$5d0fddfdf11ebbe108c2910fcc3f0abce0cdb36aaedec0e81d0cb27c458d76fd'))
# session.commit()
