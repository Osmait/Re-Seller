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

