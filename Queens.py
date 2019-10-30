import json
import urllib.request

def get_QSHOOTING_data(Url,Url2,Url3,Url4):
    response = urllib.request.urlopen(Url)    #first url
    response2 = urllib.request.urlopen(Url2)  #second url
    response3 = urllib.request.urlopen(Url3)  #third url
    response4 = urllib.request.urlopen(Url4)
    html = response.read()
    html2 = response2.read()
    html3 = response3.read()
    html4 = response4.read()
    dict = json.loads(html.decode())
    dict2 = json.loads(html2.decode())
    dict3 = json.loads(html3.decode())
    dict4 = json.loads(html4.decode())
    count_shoot = 0         # Summons Number
    count_shoot2 = 0        # Incidental Shootings Number
    count_shoot3 = 0        # Areests Number
    count_shoot4 = 0
    list = []
    for lists in dict:                      #summons dict
        if "boro" in lists:
            if lists["boro"] == "QUEENS":
                count_shoot = count_shoot + 1
    for lists2 in dict2:                    #shooting dict
        if "boro" in lists2:
            if lists2["boro"] == "QUEENS":
                count_shoot2 = count_shoot2 + 1
    for lists3 in dict3:                    #arrests number
        if "arrest_boro" in lists3:
            if lists3["arrest_boro"] == "Q ":
                count_shoot3 = count_shoot3 + 1
    for lists4 in dict4:                    #arrests number
        if "borough_of_incident" in lists4:
            if lists4["borough_of_incident"] == "Queens":
                count_shoot4 = count_shoot4 + 1
    list.append(count_shoot)
    list.append(count_shoot2)
    list.append(count_shoot3)
    list.append(count_shoot4)
    return json.dumps(list)