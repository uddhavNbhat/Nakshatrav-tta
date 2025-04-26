from flask import Flask
from flask_cors import CORS

def create_app():

    app = Flask(__name__)
    CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}}, supports_credentials=True)

    from .controllers.chat import cb

    app.register_blueprint(cb,url_prefix="/api")

    return app
