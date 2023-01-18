from flask import Flask, render_template, request, redirect, url_for

app = Flask("_name__")

formData = {}

@app.route("/add", methods = ['Post', 'Get'])
def add():
    if request.method == 'Post':
        return redirect(url_for('output'))

    if __name__ == "__main__":
        app.run(debug=True)