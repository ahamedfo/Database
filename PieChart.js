function loadPieChart(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
           var dataLayout = getPieParams(this.response);
        Plotly.newPlot('piechart', dataLayout["data"], dataLayout["layout"]);//changed this from mpa to Pie Chart
        }
    };
    xhttp.open("GET", "/boro");
    xhttp.send();
       
}
function getValues(arr){
    console.log("creating pie chart");
    var data = [{
      values: arr,
      labels: ['bronx', 'brooklyn', 'Queens',"Staten Island","Manhattan"],
      domain: {column: 0},
      name: 'Crime Per Borough',
      hoverinfo: 'label+percent+name',
      hole: .4,
      type: 'pie'
    }];
    
    var layout = {
      title:"Percentages Of Crime",
      x: 0.49,
      y: 0.5,
      grid: {rows: 1, columns: 1},
      annotations: [
        {
          font: {
            size: 20
          },
          showarrow: false,
          text: 'Boroughs',
          x: 0.50,
          y: 0.5
        }]
    };
    return [ data,layout]
    //return dictionary like in map.js
  }
function getPieParams(JSONN){
    var new_obj = {};
    var X = JSON.parse(JSONN);
    var arr = getValues(X)
    new_obj["data"] = arr[0];
    new_obj['layout'] = arr[1];
    return new_obj;
    

}

//function setupMapData(){
//    var data = [{
//      values: [16, 15, 12, 6, 5, 4, 42],
//      labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World' ],
//      domain: {column: 0},
//      name: 'GHG Emissions',
//      hoverinfo: 'label+percent+name',
//      hole: .4,
//      type: 'pie'
//    },{
//      values: [27, 11, 25, 8, 1, 3, 25],
//      labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World' ],
//      text: 'CO2',
//      textposition: 'inside',
//      domain: {column: 1},
//      name: 'CO2 Emissions',
//      hoverinfo: 'label+percent+name',
//      hole: .4,
//      type: 'pie'
//    }];
//    
//    var layout = {
//      title: 'Global Emissions 1990-2011',
//      annotations: [
//        {
//          font: {
//            size: 20
//          },
//          showarrow: false,
//          text: 'GHG',
//          x: 0.17,
//          y: 0.5
//        },
//        {
//          font: {
//            size: 20
//          },
//          showarrow: false,
//          text: 'CO2',
//          x: 0.82,
//          y: 0.5
//        }
//      ],
//      height: 400,
//      width: 600,
//      showlegend: false,
//      grid: {rows: 1, columns: 2}
//    };
//    
//    Plotly.newPlot('myDiv', data, layout);
//}
