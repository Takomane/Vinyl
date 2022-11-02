from flask import Flask, jsonify
import json
from flask_cors import CORS
from keys import find_all_Albums

app = Flask(__name__)
CORS(app)

@app.route("/Albums")
def Albums():
   return jsonify (find_all_Albums(), 200)

@app.route('/Albums/<Albums_id>')
def find_Albums_by_id(Albums_id):
    for Albums in Albums:
        if Albums["id"] == int(Albums_id):
            return jsonify({
                "Albums":Albums,
            })

if __name__ == "__main__":
    app.run(debug=True)