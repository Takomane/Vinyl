from flask import Flask, request
from flask_cors import CORS, cross_origin

from keys import find_all_Albums, insert_album

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route("/Albums")
def Albums():
   return (find_all_Albums())

@app.route('/Albums/add', methods=['POST'])
@cross_origin()
def add_albums():
     if request.method == 'POST':
        print(request.form.to_dict())
        data = request.form.to_dict()
        insert_album(data['item.Title'], data['item.Artist'], data['item.Genre'])
     return 'Saved'

if __name__ == "__main__":
    app.run(debug=True)