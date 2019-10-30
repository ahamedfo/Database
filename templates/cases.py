import json
import urllib.request

def get_CRIME_data(Url):
    response = urllib.request.urlopen(Url)
    html = response.read()
    dict = json.loads(html.decode())
    a = []
    for lists in dict:
        if "longitude" in lists:
            if "race" in lists:
                if "age_group" in lists:
                    a.append([float(lists["latitude"]),
                    float(lists["longitude"]),
                    lists["race"],
                    lists["age_group"]])
    return json.dumps(a)

