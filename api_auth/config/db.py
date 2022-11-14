from sqlalchemy.orm import sessionmaker
from models.entities.users import User
from sqlalchemy import create_engine
from decouple import config


engine = create_engine(config('DATA_ENGINE'))
Session = sessionmaker(engine)
session = Session()
