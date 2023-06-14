from flask import Flask, jsonify, request
from flask_cors import CORS

from keys import find_all_Albums

app = Flask(__name__)
CORS(app)

def insert_album(title, artist, genre):
    data = {
        'Title': title,
        'Artist': artist,
        'Genre': genre
    }
    supabase.table('Albums').insert([data]).execute()

@app.route("/Albums")
def Albums():
   return (find_all_Albums())

@app.route('/Albums/add', methods=['GET', 'POST'])
def add_albums():
     if request.method == 'POST':
         data = request.form.to_dict()
         print(data)
         insert_album(data['Title'], data['Artist'], data['Genre'])
     return 'Saved'

if __name__ == "__main__":
    app.run(debug=True)