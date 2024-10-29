const search=async()=>{
  console.log(countryname.value);
 response= await fetch(`https://restcountries.com/v3.1/name/${countryname.value}?fullText=true`)
  response.json().then((data)=>{
    console.log(data);
    console.log(data[0].capital);
    capital=data[0].capital
    common=data[0].name.common
    // currencies
       for(cur in data[0].currencies){
        var currencyname=data[0].currencies[cur].name
        var currencysymbol=data[0].currencies[cur].symbol
       }
       console.log(currencyname,currencysymbol);
       
    languages=data[0].languages
    maps=data[0].maps.googleMaps
    continent=data[0].continents
    area=data[0].area
    name=data[0].name.official
    timezone=data[0].timezones
    border=data[0].borders
    population=data[0].population
     png=data[0].flags.png

    //    languages
     let nationlang=[]
    for(lang in data[0].languages){
        nationlang.push(data[0].languages[lang])



    }
  console.log(nationlang)
  pain.innerHTML=`   <div class="container-fluid pt-5" id="pain" style="background-image: url(${png});height: 100%;width: 100%;background-repeat: no-repeat;background-size: cover">
        <h1 class="text-center text-white m-3">Know About the Countries</h1>
        <input id="countryname" type="text" placeholder="enter your country"  class="rounded my-3 py-2 px-5" style="margin-left: 39%;">
        <button onclick="search()" type="button" class="btn btn-primary">search</button>
        <div class="container  d-flex justify-content-center ">
           
            <div class="card shadow" id="result" style="width: 18rem;">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtZkIw1hmaEOI2kfRX79eW9sAta4caGI3CEw&s" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">INDIA</h5>
                 <p>capital</p>
                 <hr>
                 <p>content</p>
                 <hr>
                 <p>population</p>
                 <hr>
                </div>
            </div>
        </div>
    </div>`


   result.innerHTML =`   <div class="card shadow" id="result" style="width: 18rem;">
                <img src="${png}" class="card-img-top" height="200px" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${common.toUpperCase()}</h5>
                  <p>officail:  ${name}</p>
                 <hr>
                   <p>currency name:${currencyname} currency symbols:${currencysymbol}</p>
                 <hr>
                 <p>capital:  ${capital}</p>
                 <hr>
                    <p>languages:${nationlang}</p>
                 <hr>
                    <p>borders:${border}</p>
                 <hr>
                    <p>area:${area}</p>
                 <hr>
                    <p>population${population}</p>
                 <hr>
                    <p>timeZones${timezone}</p>
                 <hr>
                 <p>content:${continent}</p>
                 <hr>
                 <p>population${population}</p>
                 <hr>
                <a href="${maps}">maps</a>
                </div>
            </div>`


        
    })
    
  }
  


// common officailname