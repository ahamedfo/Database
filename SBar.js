function SloadBar(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
           var SBarLayout = getSBarParams(this.response);
        Plotly.newPlot('Sbarchart', SBarLayout["data"]);//changed this from mpa to Pie Chart
        }
    };
    xhttp.open("GET", "/Sshooting");
    xhttp.send();
       
}

function GetSbarValues(summons){ 
    var data = [
      {
        x: ['Summons In Staten Island',"Shootings In Staten Island","Arrests In Staten Island","Incident Reports In Staten Island"],
        y: summons, // contains all three api in a list
        type: 'bar',
        marker: {
            color : "rgb(154, 12, 206)"
        }
      }
    ];
    return [data];
    
}  




function getSBarParams(JSONN){
    var new_obj = {};
    var X = JSON.parse(JSONN);
    var arr = GetSbarValues(X);
    new_obj["data"] = arr[0]; ///new
    return new_obj;
    
}
