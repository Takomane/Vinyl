from flask import Flask, jsonify, request
from flask_cors import CORS

from keys import find_all_Albums

app = Flask(__name__)
CORS(app)

@app.route("/Albums")
def Albums():
   return (find_all_Albums())

@app.route('/Albums/<Albums_id>')
def find_Albums_by_id(Albums_id):
    for Albums in Albums:
        if Albums["id"] == int(Albums_id):
            return jsonify({
                "Albums":Albums,
            })

@app.route('/Albums/<Albums_id>')
def add_albums():
     if request.method == 'POST':
         data = request.form.to_dict()
         print(data)
         ("INSERT INTO Albums (Title, Artist, Genre) VALUES (%s, %s, %s)"
         (f"{data['Title']}", f"{data['Artist']}", f"{data['Genre']}"))
     return 'Saved'

if __name__ == "__main__":
    app.run(debug=True)