from flask import Flask

app = Flask(__name__)

@app.route("/vinyl")
def vinyl():
    return {"vinyl": ["Run The Jewels 1", "CTRL", "Pretty Girls Like Trap Music"]}

if __name__ == "__main__":
    app.run(debug=True)
