function BloadBar(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
           var BBarLayout = getBBarParams(this.response);
        Plotly.newPlot('Bbarchart', BBarLayout["data"]);//changed this from mpa to Pie Chart
        }
    };
    xhttp.open("GET", "/Bshooting");
    xhttp.send();
       
}

function GetBbarValues(summons){ 
    var data = [
      {
        x: ['Summons In Brooklyn',"Shootings In Brooklyn","Arrests In Brooklyn","Incident Reports In Brooklyn"],
        y: summons, // contains all three api in a list
        type: 'bar',
        marker: {
            color: "rgb(244, 161, 7)"
        }
      }
    ];
    return [data];
    
}  


function getBBarParams(JSONN){
    var new_obj = {};
    var X = JSON.parse(JSONN);
    var arr = GetBbarValues(X);
    new_obj["data"] = arr[0]; ///new
    return new_obj;
    
}
