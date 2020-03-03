import os
import json
from flask import Flask
from flask_restful import Resource, Api
from flask_cors import CORS

basedir = os.path.abspath(os.path.dirname(__file__))
data_file = os.path.join(basedir, 'data.json')

app = Flask(__name__)
api = Api(app)
CORS(app)

class Roasts(Resource):
    def get(self):
        with open(data_file, 'r') as f:
            data = json.load(f)
        return data

    def put(self):
        person = '{"name": "Bob", "languages": ["English", "Fench"]}'
        person_dict = json.loads(person)

        # Output: {'name': 'Bob', 'languages': ['English', 'Fench']}
        print( person_dict)

        # Output: ['English', 'French']
        print(person_dict['languages'])

api.add_resource(Roasts, '/')

if __name__ == '__main__':
    app.run(debug=True)