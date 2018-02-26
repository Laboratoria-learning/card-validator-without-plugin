//function para validar el número de tarjeta
let validationNumber =  cardNumber;
let luhn = (value) => {
  if (isNaN(value)){
    return false;
  } else if (value.length <16) {
    return false;
  } else if (cardNumber.indexOf(" ") === 0) {
    return false;


  let sum = 0;
  for (var i = cardNumber.length-1; i>= 0; i--){
    let odd = parseInt(value.charAt(i))
    if((i%2)=== 1)

    if((odd*=2) >9) odd-=9
       sum += odd
    }
     return (sum%10) == 0
   }
   console.log (luhn(validationNumber)? "verify ok" : "failed");
}

/*const paintInput = document.querySelector("#cn");
const form = document.querySelector("form");

form.addEventListener("submit", e => {
  e.´reventDefault();
  if (validationNumber return failed)
})*/

//función para validar el nombre
const validationName = (name) => {
  console.log(name);
  if (name === "") {
    return false;
  }
  if(name.indexOf(" ") === 0){
    return false;
  }
  const array = name.split(" ").filter((element) => {
    /*otra opción .filter(palabra => palabra !=="")*/
    // return element === "" ? false : true
    if (element === ""){
      return false;
    } else {
      return true;
    }
  })
  if (array.length <2){
    return false;
  }
  const arrayValidationWordsExtention = array.filter( word => {
    if (word.length > 30){
      return false;
    }
  /*(también se puede poner else)*/  return true;
  })
    if (array.length !== arrayValidationWordsExtention.length){
      return false;
    }
    return true;
}
//función para validar el CVV
const functionvalidationCvv = element =>{
  let inputValue = element.value;
  if (inputValue >000) {
    elemen.className = "success";
    console.log("grate");
  } else{
    element.className= "error";
    console.log("wrong");
  }
}
//Funcion para corroborar todos los inputs
const validateCardDetails = element => {//element sera el form completo
    const formArray = Array.from(form);
    console.log(formArray);
    let cardNumber = formArray[0].value;
    let expirationDate = formArray[1].value;
    let cvv = formArray[2].value;
    let name =formArray[3].value;
    /*
    console.log(cvv);
    console.log(cardNumber);
    console.log(expirationDate);
    console.log(typeof expirationDate);
    console.log(name);
    */
    validatioNumber(cardNumber);
    validationName(name);
    functionvalidationCvv(cvv);
    fuctionvalidationExpiration(expirationDate);
  };
/*const paintDiv =document.querySelector("#testingId");
const form = document.querySelector("form");

form.addEventListener("submit", e => {
  e.preventDefault();
  //console.log(validateCardDetails(form))
  if (validateCardDetails(form)) {
    paintDiv.className ="validate"
    paintDiv.innerHTML ="valid"
    //>console.log("datos válido... enviar...");
  } else {
     paintDiv.className = "error"
     paintDiv.innerHTML= "Malisimo"
    //console.log("datos inválidos");
  }
});

function validateCardDetails(element) {
  //escribe tu código aqui
}*/
