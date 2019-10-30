function QloadBar(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
           var QBarLayout = getQBarParams(this.response);
        Plotly.newPlot('Qbarchart', QBarLayout["data"]);//changed this from mpa to Pie Chart
        }
    };
    xhttp.open("GET", "/Qshooting");
    xhttp.send();
       
}

function GetQbarValues(summons){ 
    var data = [
      {
        x: ['Summons In Queens',"Shootings In Queens","Arrests In Queens","Incident Reports In Queens"],
        y: summons, // contains all three api in a list
        type: 'bar',
        marker: {
            color: "rgb(201, 40, 0)"
        }
      }
    ];
    return [data];
    
}  




function getQBarParams(JSONN){
    var new_obj = {};
    var X = JSON.parse(JSONN);
    var arr = GetQbarValues(X);
    new_obj["data"] = arr[0]; ///new
    return new_obj;
    
}
