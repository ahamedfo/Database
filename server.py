#import cases
#import boro
#import shooting
#
#
#from flask import Flask, render_template
#
#app = Flask(__name__)
#
#@app.route("/")
#def any_name():
#    return app.render_template("index.html")
#
#@app.route('/cases')
#def get_cases():
#    #this return is for nyc data link is API
#    return cases.get_CRIME_data("https://data.cityofnewyork.us/resource/w6hn-j4va.json")
#    
#    
#@app.route("/map.js")
#def any_nam():
#    return app.render_template("map.js",root="")
#
#@app.route('/boro')
#def get_boro():
#    #this return is for nyc data link is API
#    return boro.get_Boro_Percentage("https://data.cityofnewyork.us/resource/w6hn-j4va.json")
#
#@app.route("/PieChart.js")
#def any_nam():
#    return app.render_template("PieChart.js",root="")
#
#@app.route('/shooting')
#def get_shooting():
#    return shooting.get_SHOOTING_data("https://data.cityofnewyork.us/resource/9895-df76.json")
#    
#@app.route("/Bar.js")
#def any_nam():
#    return bottle.render_template("Bar.js",root="")
#
#if __name__ == "__main__":
#    
#app.run(host="0.0.0.0", port=8080, debug=True)
#

import bottle
import cases
import boro
import pop
import shooting
import Queens
import Brooklyn
import Staten
import Manhattan

from bottle import route, run, static_file

@bottle.route("/")
def any_name():
    return bottle.static_file("index.html",root="")

@bottle.route('/cases')
def get_cases():
    #this return is for nyc data link is API
    return cases.get_CRIME_data("https://data.cityofnewyork.us/resource/w6hn-j4va.json")
    
    
@bottle.route("/map.js")
def any_nam():
    return bottle.static_file("map.js",root="")

@bottle.route('/pop')
def get_pop():
    #this return is for nyc data link is API
    return pop.get_Boro_Percentages("https://data.cityofnewyork.us/resource/xy49-4pwd.json")

@bottle.route("/population.js")
def any_nam():
    return bottle.static_file("population.js",root="")

@bottle.route('/boro')
def get_boro():
    #this return is for nyc data link is API
    return boro.get_Boro_Percentage("https://data.cityofnewyork.us/resource/w6hn-j4va.json")

@bottle.route("/PieChart.js")
def any_nam():
    return bottle.static_file("PieChart.js",root="")

@bottle.route('/shooting')
def get_shooting():
    return shooting.get_SHOOTING_data("https://data.cityofnewyork.us/resource/w6hn-j4va.json","https://data.cityofnewyork.us/resource/9895-df76.json","https://data.cityofnewyork.us/resource/m25r-ji2e.json","https://data.cityofnewyork.us/resource/fhzw-wacb.json")

@bottle.route("/Bar.js")
def any_nam():
    return bottle.static_file("Bar.js",root="")

@bottle.route('/Qshooting')
def get_qshooting():
    return Queens.get_QSHOOTING_data("https://data.cityofnewyork.us/resource/w6hn-j4va.json","https://data.cityofnewyork.us/resource/9895-df76.json","https://data.cityofnewyork.us/resource/m25r-ji2e.json","https://data.cityofnewyork.us/resource/fhzw-wacb.json")

@bottle.route("/QBar.js")
def any_nam():
    return bottle.static_file("QBar.js",root="")

@bottle.route('/Bshooting')
def get_bshooting():
    return Brooklyn.get_BSHOOTING_data("https://data.cityofnewyork.us/resource/w6hn-j4va.json","https://data.cityofnewyork.us/resource/9895-df76.json","https://data.cityofnewyork.us/resource/m25r-ji2e.json","https://data.cityofnewyork.us/resource/fhzw-wacb.json")

@bottle.route("/BBar.js")
def any_nam():
    return bottle.static_file("BBar.js",root="")
    
@bottle.route('/Sshooting')
def get_bshooting():
    return Staten.get_SSHOOTING_data("https://data.cityofnewyork.us/resource/w6hn-j4va.json","https://data.cityofnewyork.us/resource/9895-df76.json","https://data.cityofnewyork.us/resource/m25r-ji2e.json","https://data.cityofnewyork.us/resource/fhzw-wacb.json")

@bottle.route("/SBar.js")
def any_nam():
    return bottle.static_file("SBar.js",root="")
    
@bottle.route('/Mshooting')
def get_bshooting():
    return Manhattan.get_MSHOOTING_data("https://data.cityofnewyork.us/resource/w6hn-j4va.json","https://data.cityofnewyork.us/resource/9895-df76.json","https://data.cityofnewyork.us/resource/m25r-ji2e.json","https://data.cityofnewyork.us/resource/fhzw-wacb.json")

@bottle.route("/MBar.js")
def any_nam():
    return bottle.static_file("MBar.js",root="")
  
bottle.run(host="0.0.0.0", port=8080, debug=True)
