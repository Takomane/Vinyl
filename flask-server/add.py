from flask import Flask, render_template, request, redirect, url_for

app = Flask("_name__")

forData = {}

@app.route("/add", methods = ['Post', 'Get'])
def add():
    if request.method == 'Post':
        return redirect(url_for('output'))
    else:
        return render_template('add.html')

@app.route('/output')
def output():
    return render_template('output.html', nameme=formData[''])

    if __name__ == "__main__":
        app.run(debug=True)
