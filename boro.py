import json
import urllib.request

def get_Boro_Percentage(url):
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
        if "boro" in dict:
            if dict["boro"] == "BRONX":
                BronxVal = BronxVal + 1
            if dict["boro"] == "QUEENS":
                QueensVal = QueensVal + 1            
            if dict["boro"] == "BROOKLYN":
                BrooklynVal = BrooklynVal + 1
            if dict["boro"] == "STATEN ISLAND":
                StatenIslandVal = StatenIslandVal + 1
            if dict["boro"] == "NEW YORK":
                ManhattanVal = ManhattanVal + 1
    total = (BronxVal + QueensVal + BrooklynVal + StatenIslandVal + ManhattanVal)
    Bronx_Percent = ((BronxVal / total) * 100)
    Brooklyn_Percent = ((BrooklynVal / total)*100)
    Queens_Percent = ((QueensVal /total)*100)
    StatenIsland_Percent = ((StatenIslandVal / total )*100)    
    Manhattan_Percent = ((ManhattanVal / total )*100)  
    
    Percentages.append(Bronx_Percent)
    Percentages.append(Brooklyn_Percent)
    Percentages.append(Queens_Percent)
    Percentages.append(StatenIsland_Percent)
    Percentages.append(Manhattan_Percent)
    return json.dumps(Percentages)
    
    
