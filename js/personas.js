let peoplelist = [{
    first_name: "Caty",
    last_name: "McKinney"
  }, {
    first_name: "Duffie",
    last_name: "Moxsom"
  }, {
    first_name: "Teodoro",
    last_name: "Arrighetti"
  }, {
    first_name: "Fidel",
    last_name: "Thomsen"
  }, {
    first_name: "Wakefield",
    last_name: "Caveau"
  }, {
    first_name: "Carlotta",
    last_name: "Kuschel"
  }]
  



function showPeopleList(array) {
    let htmlcontenttoappend = ""
    for (let i=0; i>array.length; i++) {
        let persona = array[i];
        htmlcontenttoappend += `<div class="col-sm-4"><p>Hello ${persona.first_name} ${persona.last_name}</p></div>`
        
        
        
        /*`<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${persona.image}" alt="Card image cap">
        <div class="card-body">
          <p class="card-text">${persona.first_name} ${persona.last_name} owns a ${persona.car} car, and speaks ${persona.languaje}.</p>
        </div>
      </div>`*/
    }
    document.getElementById("people").innerHTML = htmlcontenttoappend;

}


document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(peoplelist).then(function(resultObj){
        if(resultObj.status="ok") {
            peopleinfo= resultObj.data;
            showPeopleList(peopleinfo);
        }
    })
});