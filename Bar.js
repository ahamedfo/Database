function loadBar(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
           var BarLayout = getBarParams(this.response);
        Plotly.newPlot('barchart', BarLayout["data"]);//changed this from mpa to Pie Chart
        }
    };
    xhttp.open("GET", "/shooting");
    xhttp.send();
       
}

function GetbarValues(summons){ 
    var data = [
      {
        x: ['Summons In The Bronx',"Shootings In The Bronx","Arrests In The Bronx","Incident Reports In The Bronx"],
        y: summons, // contains all three api in a list
        type: 'bar',
        marker: {
            color: "rgb(7, 181, 21)"
        }
      }
    ];
    return [data];
    
}  




function getBarParams(JSONN){
    var new_obj = {};
    var X = JSON.parse(JSONN);
    var arr = GetbarValues(X);
    new_obj["data"] = arr[0]; ///new
    return new_obj;
    
}
