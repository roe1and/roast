import os
import json
from flask import Flask
from flask_restful import Resource, Api
from flask_cors import CORS
from flask.json import jsonify

basedir = os.path.abspath(os.path.dirname(__file__))
data_file = os.path.join(basedir, 'data.json')

app = Flask(__name__)
api = Api(app)
CORS(app)

@app.route('/')
def root():
    return 'yeah, ok'

@app.route('/roasts')
def roasts():
    with open(data_file, 'r') as f:
        data = json.load(f)
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)