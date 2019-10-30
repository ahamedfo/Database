function loadNewPieChart(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
           var datasLayout = getPiesParams(this.response);
        Plotly.newPlot('Newpiechart', datasLayout["data"], datasLayout["layout"]);//changed this from mpa to Pie Chart
        }
    };
    xhttp.open("GET", "/pop");
    xhttp.send();
       
}
function getValues(arr){
    console.log("creating pie chart");
    var datas = [{
      values: arr,
      labels: ['Bronx', 'Brooklyn', 'Queens',"Staten Island","Manhattan"],
      domain: {column: 0},
      name: 'Population Per Borough',
      hoverinfo: 'label+percent+name',
      hole: .4,
      type: 'pie'
    }];
    
    var layout = {
      title: 'Percentages Of Crime/People Per Borough',
      x: 0.50,
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
    return [ datas,layout]
    //return dictionary like in map.js
  }
function getPiesParams(JSONN){
    var new_obj = {};
    var X = JSON.parse(JSONN);
    var arr = getValues(X)
    new_obj["data"] = arr[0];
    new_obj['layout'] = arr[1];
    return new_obj;
    

}