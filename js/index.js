
let articlelist = [];
function createList() {

    let article = document.getElementById("articulo").value;
    articlelist.push(article);
   
return articlelist;



};

function showList() {
    createList();
    console.log(articlelist);
    let htmlContentToAppend = "";
    for (let i=0; i<articlelist.length;i++){
    let art = articlelist[i];
    htmlContentToAppend += `<li>${art}</li>`
    
} document.getElementById("articlelist").innerHTML = htmlContentToAppend;
};

function validate(){
 let name= document.getElementById("username").value;
 let creditcard = document.getElementById("creditcard-number").value;
 let creditcardcode = document.getElementById("creditcard-code").value;
 let creditcardexpire = document.getElementById("creditcard-expire").value;
 let bankaccount = document.getElementById("account").value;
 if(name.trim() !== "" && creditcard.trim() !== "" && creditcardcode.trim() !== "" && creditcardexpire.trim() !=="" || bankaccount.trim() != "") {
     Swal.fire("Compra");
 }
};


document.addEventListener("DOMContentLoaded" ,function(e){
    
})

document.getElementById("pay-validation").addEventListener("click", function (e){
 let inputs = document.getElementsByClassName("form-control");
 for(let i=0; i<inputs.length;i++){
     let input=inputs[i];
    if (input.value.trim() === ""){
        
    input.classList.add("is-invalid");
}
else{
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");

}}
validate();

});

document.getElementById("creditcard").addEventListener("click", function (e){
    let creditform = document.getElementById("credit-card-form");
    let clase = creditform.getAttribute("class");
    let bankform= document.getElementById("bank-form");
    if(clase === "form-display-none needs-validation" || clase ==="needs-validation form-display-none"){
    creditform.classList.remove("form-display-none");
    bankform.classList.remove("form-display-block")
    bankform.classList.add("form-display-none")
    creditform.classList.add("form-display-block");
} else {
    creditform.classList.remove("form-display-block");
    creditform.classList.add("form-display-none");
}
    
});
document.getElementById("bankdeposit").addEventListener("click", function (e){
    let creditform = document.getElementById("credit-card-form");
    let bankform= document.getElementById("bank-form");
let clase=bankform.getAttribute("class");
    if(clase === "form-display-none needs-validation" || clase ==="needs-validation form-display-none"){
    creditform.classList.remove("form-display-block");
    creditform.classList.add("form-display-none");
    bankform.classList.remove("form-display-none");
    bankform.classList.add("form-display-block");
} else {
    bankform.classList.remove("form-display-block");
    bankform.classList.add("form-display-none")
}
    
});