from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from werkzeug.security import check_password_hash
from decouple import config

engine = create_engine(config('DATA_ENGINE'))
Base = declarative_base()


class User(Base):
    __tablename__ = 'users'
    id = Column(Integer(), primary_key=True)
    email = Column(String(255), nullable=False, unique=True)
    password = Column(String(255), nullable=False)

    def __str__(self):
        return self.email

    @classmethod
    def check_password(cls, hashed_password, password):
        return check_password_hash(hashed_password, password)

    @classmethod
    def session_orm(cls):
        Session = sessionmaker(engine)
        session = Session()
        return session

# users = session.query(User.id, User.email).filter(User.email == 'jose@gmail.com')
# Base.metadata.drop_all(engine)
# Base.metadata.create_all(engine)

# session.add(User(email='jose@gmail.com', password='pbkdf2:sha256:260000$fIQQexE0IVQfwWAe$5d0fddfdf11ebbe108c2910fcc3f0abce0cdb36aaedec0e81d0cb27c458d76fd'))
# session.commit()
