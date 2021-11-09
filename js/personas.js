


function showPeopleList(array) {
    let htmlcontenttoappend = "";
    for (let i=0; i<array.length; i++) {
        let persona = array[i];
        htmlcontenttoappend += `<tr id="${persona.id}"><td>${persona.first_name}</td><td>${persona.last_name}</td><td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${i}">
        info
      </button></td></tr>
      <div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" id="">
          <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${persona.image}" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">${persona.first_name} ${persona.last_name} owns a ${persona.car} car, and speaks ${persona.languaje}.</p>
          </div>
        </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>`;
        
        /*`<div class="col-sm-4"><p>Hello ${persona.first_name} ${persona.last_name}</p></div>`*/
        
        
        
        /*`<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${persona.image}" alt="Card image cap">
        <div class="card-body">
          <p class="card-text">${persona.first_name} ${persona.last_name} owns a ${persona.car} car, and speaks ${persona.languaje}.</p>
        </div>
      </div>`*/
      document.getElementById("people").innerHTML = htmlcontenttoappend;
    }
    
    }

    function showMoreInfo() {
     let modalinfo= "";
     
     for (let i = 0; i < PEOPLE.length; i++) {
       let persona = PEOPLE[i];
       let id = document.getElementById(persona.id);
       console.log(id);
       {
       modalinfo += `<div class="card" style="width: 18rem;">
     <img class="card-img-top" src="${persona.image}" alt="Card image cap">
     <div class="card-body">
       <p class="card-text">${persona.first_name} ${persona.last_name} owns a ${persona.car} car, and speaks ${persona.languaje}.</p>
     </div>
   </div>`}     }
     
     
     
     document.getElementById("info").innerHTML=modalinfo;
    }
   




document.addEventListener("DOMContentLoaded", function(e){
  showPeopleList(PEOPLE);
  
  
  
  /*getJSONData(PEOPLE_URL).then(function(resultObj){
        if(resultObj.status="ok") {
            peopleinfo = resultObj.data;
            showPeopleList(peopleinfo);
        }
    })*/
});