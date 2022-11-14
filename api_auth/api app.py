from flask import Flask
from routes.auth_login import auth_login
app = Flask(__name__)

app.register_blueprint(auth_login, url_prefix='/api')

if __name__ == '__main__':
    app.run(debug=True)
