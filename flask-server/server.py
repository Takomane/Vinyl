from flask import Flask, jsonify
from flask_cors import CORS
from supa import Vinyl

app = Flask(__name__)
CORS(app)

@app.route("/vinyl")
def Vinyl():
    return jsonify({
        'Vinyl': Vinyl,
    })

@app.route('/Vinyl/<Vinyl_id>')
def find_Vinyl_by_id(Vinyl_id):
    for Vinyl in Vinyl:
        if Vinyl["id"] == int(Vinyl_id):
            return jsonify({
                "Vinyl":Vinyl,
            })

if __name__ == "__main__":
    app.run(debug=True)