from flask import Flask, render_template

app = Flask("_name__")

@app.route("/add", methods = ['Post'])
def home():
    return render_template('add.html')

    if __name__ == "__main__":
        app.run(debug=True)
