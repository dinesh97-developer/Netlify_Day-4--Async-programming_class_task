/* async function foo(){
    return "Hello world";
}
console.log(foo());

async function get_data(){
    var res = await fetch("https://restcountries.com/v3.1/all");
    var res_1 = await res.json();
    //return res_1;
    console.log(res_1);
}
get_data(); */

/* //Covid data funtion call
function foo(res_1){
   var final_res= res_1["Tamil Nadu"];
   console.log(final_res.districtData.Thanjavur);
   res_data = final_res.districtData.Thanjavur.active
   console.log(`The active cases in Thanjavur is ${res_data}`);
}


async function covid_data(){
    var res = await fetch("https://data.covid19india.org/state_district_wise.json");
    var res_1 =  await res.json()
    console.log(res_1);
    foo(res_1);
}
covid_data(); */

//Try catch
/* function get_data(){
    return new Promise((resolve,reject) =>setTimeout(()=>reject("this is rejected after 3 second"),3000));
}

async function foo(){
    // try {
    //     var res = await get_data()
    // } catch (error) {
    //     console.log(error);
    // }
    var res = await get_data()
    console.log(res);
}

foo(); */

// Mutiple API with Async and Await
async function get_data(){
    var res = await fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    var result =await res.json();
    console.log(result);

    for(var i=0;i<result.length;i++)
    {
        var name = result[i].name;
        var latlng = result[i].latlng;
        var capital_data = result[i].capital;
        open_data(name,...latlng,capital_data);

    }
}
var container = document.createElement("div");
            container.className ="container";
            var row = document.createElement("div");
            row.className = "row";
async function open_data(name,lat,lon,capital_data){
    
    //console.log(name,lat,lon,capital_data);
    try {
            if(lat==undefined || lon==undefined){
                throw new Error("Invalid Lat Long values")
            }
            
            var open_res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a40777693b3c0b7dcae54152f08dbc05`);
            //console.log(open_res);
            var final_res = await open_res.json();
            console.log(`Name:${name},Capital:${capital_data},lat:${lat},longitude:${lon}, Temp: ${final_res.main.temp}`);
            //console.log(final_res);
            //var temp_data = final_res.main.temp;
           // dom_output(name,capital_data,lat,lon,final_res);
            /* var container = document.createElement("div");
            container.className ="container";
            var row = document.createElement("div");
            row.className = "row"; */
            var col = document.createElement("div");
            col.className = "col-md-4";
            col.innerHTML+=
            `<div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
            <div class="card-header">Counry Details </div>
            <div class="card-body">
            <h5 class="card-title">Country: ${name}</h5>
            <p class="card-text">Capital: ${capital_data}<br>
            Latitude: ${lat}<br>Longitude: ${lon}<br>Temp: ${final_res.main.temp}</p>
            </div>
            </div>
            `
            document.body.append(container);
            container.append(row); 
            row.append(col);
        
    } 
catch (error) {

        console.log("Data lost "+ error.message);
    }

}





get_data();