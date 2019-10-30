function MloadBar(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
           var MBarLayout = getMBarParams(this.response);
        Plotly.newPlot('Mbarchart', MBarLayout["data"]);//changed this from mpa to Pie Chart
        }
    };
    xhttp.open("GET", "/Mshooting");
    xhttp.send();
       
}

function GetMbarValues(summons){ 
    var data = [
      {
        x: ['Summons In Manhattan',"Shootings In Manhattan","Arrests In Manhattan","Incident Reports In Manhattan"],
        y: summons, // contains all three api in a list
        type: 'bar'
      }
    ];
    return [data];
    
}  




function getMBarParams(JSONN){
    var new_obj = {};
    var X = JSON.parse(JSONN);
    var arr = GetMbarValues(X);
    new_obj["data"] = arr[0]; ///new
    return new_obj;
    
}
