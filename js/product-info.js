var producto = {}

function mostrarImagenes(array) {
    let adjuntarcontenidoHtml = "";

    for (let i=0; i<array.length; i++) {
        let imagen= array[i]
        if (i==0) {
       adjuntarcontenidoHtml += `<div class="carousel-item active"  >
       <img src="${imagen}" class="d-block w-100" alt="">
     </div>`}
     else{adjuntarcontenidoHtml += `<div class="carousel-item"  >
     <img src="${imagen}" class="d-block w-100" alt="">
   </div>`} /*`
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src=" ${imagen}" alt="">
            </div>
        </div>
        `*/
        document.getElementById("productImagesGallery").innerHTML = adjuntarcontenidoHtml;
    }
}
function productosRelacionados(array) {
    let contenidoparaadjuntar = "";
    for (let i=0; i < infoproducto.relatedProducts.length; i++) {
        let product = array[infoproducto.relatedProducts[i]];
       contenidoparaadjuntar += /*`
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src=" ${product.imgSrc}" alt="">
            </div>
        </div>
        `*/
        `<div class="col-md-4">
        <div class="card" style="width: 18rem;">
                 <img class="card-img-top" src="${product.imgSrc}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${product.name}</h5>
    <p class="card-text">${product.description}</p>
    <p class="card-text">${product.currency} ${product.cost}</p>
    <a href="product-info.html" class="btn btn-dark">Ver Producto</a>
  
</div>
</div>
</div>`
        document.getElementById("relatedProducts").innerHTML = contenidoparaadjuntar;
    }
   
}

/*function estrellas(){
    let adjuntar=""
    for(let i=0; i<arrayproductos.length; i++){
       let comentario = arrayproductos[i];
    
    if(comentario.score === 1){
        adjuntar = `<span class="fa fa-star checked" ></span>
        <span class="fa fa-star" ></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>`
    }
    else if (comentario.score === 2) {
        adjuntar = `<span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>`
    }
    else if (comentario.score === 3){
        adjuntar = `<span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>`
    }
   else if(comentario.score === 4) {
        adjuntar = `<span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>`
    }
   else  {
        adjuntar = `<span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>`
    };

document.getElementsByClassName("rating").innerHTML = adjuntar;
}*/

function estrellitas(puntaje) {
    let adjuntar="";
    for (let i=1; i<=5; i++) {
        if (i<=puntaje) {
            adjuntar += `<i class="fa fa-star checked"></i>`;
        } else {
            adjuntar += `<i class="far fa-star"></i>`;
        }

    } return adjuntar;
}

    
function enviarComentario(){
    nuevoComentario = {};
    nuevoComentario.description= document.getElementById("nuevocomentario").value;
    fecha = new Date();
    options={
        year:"numeric", month:"numeric", day:"numeric", hour:"numeric", minute:"numeric", second:"numeric",
        hour12: false,
    }
    
    fechaActual= new Intl.DateTimeFormat("en-CA", options).format(fecha);
    nuevoComentario.dateTime = fechaActual;
    
    nuevoComentario.score= document.getElementById("puntajeElegido").value;
    user =  JSON.parse(localStorage.usuario)
    nuevoComentario.user = user.usuario;

    comentario.push(nuevoComentario);
    mostrarComentarios(comentario);
    document.getElementById("nuevocomentario").value="";
    document.getElementById("puntajeElegido").value="";
}


    function mostrarComentarios(comentarios) {
        let adjuntarcontenido= "";
        for (let i=0; i<comentarios.length; i++) {
            let comentario = comentarios[i]
            adjuntarcontenido += ` <div class="container"><div>${estrellitas(comentario.score)}</div>
            <div class="col-6">            
                </div><h4 class="mb-1"><i class="fa fa-user"></i>  ${comentario.user}</h4> <i><i class="fa fa-calendar"></i> ${comentario.dateTime}</i>
                
                
            </div><br>
            <div class="col-12">
                <div class="d-flex w-100 justify-content-between">
                    <p class="mb-1">${comentario.description}</p>
                    
                </div>
            </div>
        </div><hr><br>`
        document.getElementById("comments").innerHTML = adjuntarcontenido;
        
        
        
        
        

        }

    };


function mostrarinfoProductos(products) {

    let productName = document.getElementById("productName");
    let productDescription = document.getElementById("productDescription");
    let productCost = document.getElementById("productCost");
    let productSoldCount = document.getElementById("productSoldCount");
    let productCategory = document.getElementById("productCategory");


    productName.innerHTML = products.name;
    productDescription.innerHTML = products.description;
    productCost.innerHTML = products.currency + products.cost;
    productSoldCount.innerHTML = products.soldCount;
    productCategory.innerHTML = products.category;
    
    
    mostrarImagenes(products.images);
    
};
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
    if (resultObj.status = "ok") {
        infoproducto = resultObj.data;
        mostrarinfoProductos(infoproducto)
    }
})
});
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status = "ok") {
            comentario = resultObj.data;
            mostrarComentarios(comentario);
            
            
            
            
            
            
            
        }
    })
    });
    document.addEventListener("DOMContentLoaded", function(e){
        getJSONData(PRODUCTS_URL).then(function(resultObj){
            if (resultObj.status = "ok") {
                producto = resultObj.data;
                productosRelacionados(producto)
            }
        })
        });