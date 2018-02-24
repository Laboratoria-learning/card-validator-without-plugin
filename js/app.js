//function validationNumber(){
//}







//Funcion para corroborar todos los inputs
const validateCardDetails = element => {//element sera el form completo
    const formArray = Array.from(form);
    console.log(formArray);
    let cardNumber = formArray[0].value;
    let expirationDate = formArray[1].value;
    let cvv = formArray[2].value;
    let name =formArray[3].value;
    console.log(cvv);
    console.log(cardNumber);
    console.log(expirationDate);
    //console.log(typeof expirationDate);
    console.log(name);
    //validarionNumber(cardNumber){

    }


//}

//}

const form = document.querySelector("form");

form.addEventListener("submit", e => {
  e.preventDefault();
  if (validateCardDetails(form)) {
    //>console.log("datos válido... enviar...");
  } else {
    //console.log("datos inválidos");
  }
});

/*function validateCardDetails(element) {
  //escribe tu código aqui
}*/
