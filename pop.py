import json
import urllib.request

def get_Boro_Percentages(url):
    response = urllib.request.urlopen(url)
    read = response.read()
    list = json.loads(read.decode())
    BronxVal = 0
    QueensVal = 0
    BrooklynVal = 0
    StatenIslandVal = 0
    ManhattanVal = 0
    Percentages = []
    for dict in list:
        if dict["borough"] == "   Bronx":
            BronxVal = dict["_2020_boro_share_of_nyc_total"]
        if dict["borough"] == "   Queens":
            QueensVal = dict["_2020_boro_share_of_nyc_total"]
        if dict["borough"] == "   Brooklyn":
            BrooklynVal = dict["_2020_boro_share_of_nyc_total"]
        if dict["borough"] == "   Staten Island":
            StatenIslandVal = dict["_2020_boro_share_of_nyc_total"]
        if dict["borough"] == "   Manhattan":
            ManhattanVal = dict["_2020_boro_share_of_nyc_total"]
    Percentages.append(BronxVal)
    Percentages.append(BrooklynVal)
    Percentages.append(QueensVal)
    Percentages.append(StatenIslandVal)
    Percentages.append(ManhattanVal)
    return json.dumps(Percentages)
    
                