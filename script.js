function seterror(id,error){
    element= document.getElementById(id)
    element = document.getElementsByClassName


}
function validateForm(){

let returnval = true;

// perform validation and if validation fails, set the value of returnval to false
let name = document.forms["myForm"]["fname"].value;
console.log(name);
if(name.length<5){
    seterror("name","Length of name is too short")
    returnval = false;

}







return returnval;

}