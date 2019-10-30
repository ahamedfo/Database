function loadMap(){
        Plotly.setPlotConfig({
        mapboxAccessToken: 'pk.eyJ1IjoiYWhhbWVkZm8iLCJhIjoiY2puZ2I1MjRpMDFibjNybnk2NnpvdHk3dCJ9.832vqe5mEjWNj2rgXDUPzA'
    });

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            var mapParams = getMapParams(this.response);
            Plotly.plot('map', mapParams.data, mapParams.layout);
        }
    };
    xhttp.open("GET", "/cases");
    xhttp.send();
}

function setupMapData(arr){
//    for(var lists of arr){
//        data[0].lat.push(lists[0])
//        data[0].lon.push(lists[1])
//        data[0].text.push(lists[2])
//    }
//    
//    return data;
//}

    var data = [{
          type:'scattermapbox',
          mode:'markers',
          marker: {"size": 6 , "color": 'rgb(255,0,0)',  "outlinecolor" : "rgb(0,0,0)"},
          lat:[],
          lon:[],
          text:[], //Race of offender
          name : "<18"
        },{
          type:'scattermapbox',
          mode:'markers',
          marker: {"size": 6 , "color": 'rgb(244, 58, 238)'},
          lat:[],
          lon:[],
          text:[], //Race of offender
          name: "18 - 24"
        },{
          type:'scattermapbox',
          mode:'markers',
          marker: {"size": 6 , "color": 'rgb(66,152,244)'},
          lat:[],
          lon:[],
          text:[], //Race of offender
          name: "25 - 44"
        },{
          type:'scattermapbox',
          mode:'markers',
          marker: {"size": 6 , "color": 'rgb(255, 174, 0)'},
          lat:[],
          lon:[],
          text:[], //Race of offender
          name: "45 - 64"
        },{
          type:'scattermapbox',
          mode:'markers',
          marker: {"size": 6 , "color": 'rgb(0, 255, 51)'},
          lat:[],
          lon:[],
          text:[], //Race of offender
          name: "UNKNOWN"
        },]
        for(var lists of arr){ 
            if(lists[3] === "<18"){
                data[0].lat.push(lists[0])
                data[0].lon.push(lists[1])
                data[0].text.push(lists[2])
            }
            if(lists[3] === "18-24"){
                data[1].lat.push(lists[0])
                data[1].lon.push(lists[1])
                data[1].text.push(lists[2])
            }
            if(lists[3] === "25-44"){
                data[2].lat.push(lists[0])
                data[2].lon.push(lists[1])
                data[2].text.push(lists[2])
            }
             if(lists[3] === "45-64"){
                data[3].lat.push(lists[0])
                data[3].lon.push(lists[1])
                data[3].text.push(lists[2])
            }
             if(lists[3] === "UNKNOWN"){
                data[4].lat.push(lists[0])
                data[4].lon.push(lists[1])
                data[4].text.push(lists[2])
            }




            


//        if(Math.random()>0.5){
//            data[0].marker.color.push('rgb(255,0,0)');
//        }else{
//            data[0].marker.color.push('rgb(0,255,0)');
//        }
    }
    
    return data;
}

function findCenter(arr){
    var x = [];
    var MinLon = 10000;
    var MaxLon = -10000;
    var MinLat = 10000;
    var MaxLat = -10000;
    var avg_lat = 0;
    var avg_lon = 0;
    for(var i of arr){
        if(parseFloat(i[0]) >= MaxLat){
            MaxLat = i[0]
        }
        if(parseFloat(i[0]) <= MinLat){
            MinLat = i[0]
        }
        if(parseFloat(i[1]) >= MaxLon){
            MaxLon = i[1]
        }
        if(parseFloat(i[1]) <= MinLon){
            MinLon = i[1]
        }
      }
    avg_lat = (MaxLat + MinLat)/2;
    avg_lon = (MaxLon + MinLon)/2;
    x.push(avg_lat,avg_lon);

    return x;
}


console.log(findCenter([[20.3,-56.8,"test point 1"],[26.3,-59.8,"test point 2"],[21.3,-50.8,"test point 3"]]))

function setupMapLayout(arr){
    var big_obj = {};
    var obj = {};
    var center_values = {};
    big_obj["style"] = "satellite-streets";
    big_obj["zoom"] = 11;
    center_values["lon"] = findCenter(arr)[1];
    center_values["lat"] = findCenter(arr)[0];
    big_obj["center"] = center_values;
    obj["mapbox"] = big_obj;
    return obj;
}

function getMapParams(JSONN){
    var new_obj = {};
    var X = JSON.parse(JSONN);
    new_obj["data"] = setupMapData(X);
    new_obj['layout'] = setupMapLayout(X);
    return new_obj;
    
}
