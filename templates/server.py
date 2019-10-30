import cases
import boro
import shooting


from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def any_name():
    return app.render_template("index.html")

@app.route('/cases')
def get_cases():
    #this return is for nyc data link is API
    return cases.get_CRIME_data("https://data.cityofnewyork.us/resource/w6hn-j4va.json")
    
    
@app.route("/map.js")
def any_nam():
    return app.render_template("map.js",root="")

@app.route('/boro')
def get_boro():
    #this return is for nyc data link is API
    return boro.get_Boro_Percentage("https://data.cityofnewyork.us/resource/w6hn-j4va.json")

@app.route("/PieChart.js")
def any_nam():
    return app.render_template("PieChart.js",root="")

@app.route('/shooting')
def get_shooting():
    return shooting.get_SHOOTING_data("https://data.cityofnewyork.us/resource/9895-df76.json")
    
@app.route("/Bar.js")
def any_nam():
    return bottle.render_template("Bar.js",root="")

if __name__ == "__main__":
    
app.run(host="0.0.0.0", port=8080, debug=True)


#import bottle
#import cases
#import boro
#import shooting
#
#from bottle import route, run, static_file
#
#@bottle.route("/")
#def any_name():
#    return bottle.static_file("index.html",root="")
#
#@bottle.route('/cases')
#def get_cases():
#    #this return is for nyc data link is API
#    return cases.get_CRIME_data("https://data.cityofnewyork.us/resource/w6hn-j4va.json")
#    
#    
#@bottle.route("/map.js")
#def any_nam():
#    return bottle.static_file("map.js",root="")
#
#@bottle.route('/boro')
#def get_boro():
#    #this return is for nyc data link is API
#    return boro.get_Boro_Percentage("https://data.cityofnewyork.us/resource/w6hn-j4va.json")
#
#@bottle.route("/PieChart.js")
#def any_nam():
#    return bottle.static_file("PieChart.js",root="")
#
#@bottle.route('/shooting')
#def get_shooting():
#    return shooting.get_SHOOTING_data("https://data.cityofnewyork.us/resource/9895-df76.json")
#    
#@bottle.route("/Bar.js")
#def any_nam():
#    return bottle.static_file("Bar.js",root="")
#    
#    
#bottle.run(host="0.0.0.0", port=8080, debug=True)
