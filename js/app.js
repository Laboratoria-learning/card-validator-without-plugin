//Funcion para checar el nombnre del usuario
//no vacio,sea string, max 30 letras, mayusculas o minusculas,  minimo dos palabras
const validateName = nameUser => {
    
    if(name==""){
        return false;
    }else{
        return true;
    }
}

//Funcion para checar el CVV
//no vacio,que sean 3 digitos, solo numbers positivos , validar que sea centenas.
const validateCVV = cvv => {
    
    if(cvv==""){
        return false;
    }else{
        return true;
    }
}

//Funcion para checar la fecha de vencimiento
//no vacio,que sea numero, que sean dos digitos de año y mes, num negativos, que num de mes sea hasta 12
const validateExpirationDate = expirationDate => {

    if(expirationDate==""){
        return false;
    }else{
        return true;
    }
}

//Funcion para corroborar num de tarjeta (Probar con 4152313059935309)
const validateCardNumber = cardNumberInput => {
    let cardNumber = cardNumberInput.value;
    
    
             
}

//Funcion para corroborar todos el form
const validateCardDetails = element => {//element sera el form completo
    const formArray = Array.from(form);
    let cardNumberInput = formArray[0];
    let expirationDate = formArray[1];
    let cvv = formArray[2];
    let nameUser = formArray[3];  
    
    if(validateCardNumber(cardNumberInput) == true &&
       validateExpirationDate(expirationDate)==true &&
       validateCVV(cvv)==true &&
       validateName(nameUser)==true){
        return true;
    }else{
        return false;
    }     
}

const form = document.querySelector("form");

form.addEventListener("submit", e => {
  e.preventDefault();
  if (validateCardDetails(form)) {
    console.log("datos válido... enviar...");
  } else {
    console.log("datos inválidos");
  }  
});

