from flask import Flask
from flask_cors import CORS
from supa.py import API_KEY , API_URL

app = Flask(__name__)
CORS(app)

@app.route("/api/vinyl")
def vinyl():
    return {"vinyl": ["Run The Jewels 1", "CTRL", "Pretty Girls Like Trap Music"]}

if __name__ == "__main__":
    app.run(debug=True)
