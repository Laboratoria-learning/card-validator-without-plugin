//Funcion para checar el nombre del usuario
//validaciones: acepta min y mayus, menor a 30 a caracteres y string vacio
const validateName = nameUserInput => {
    let nameUser = nameUserInput.value;
    if(nameUser=="" || nameUser.length > 30){ //
        nameUserInput.className = "error";
        return false;
    }else{
        nameUserInput.className = "success";
        return true;
    }
}

//Funcion para checar el CVV
// las otras validaciones  estan en html (num positivo y menor de 3 digitos)
const validateCVV = cvvInput => {
    let cvv = cvvInput.value;
    if(cvv === ""){
        cvvInput.className = "error";
        return false;
    } else{
        cvvInput.className = "success";
        return true;
    }
}

//Funcion para checar la fecha de vencimiento
// las otras validaciones estan en html (num positivo, 2 digitos de mes y año, mes < 12, numero a futuro )
const validateExpirationDate = (expirationMonthInput, expirationYearInput) => {
    let expirationMonth= expirationMonthInput.value;
    let expirationYear=expirationYearInput.value;
    if(expirationMonth ==="" && expirationYear ===""){
        expirationMonthInput.className = "error";
        expirationYearInput.className = "error";
        return false;
    }else if(expirationMonth ===""){
        expirationMonthInput.className = "error";
        expirationYearInput.className = "success";
        return false;
    }else if(expirationYear ===""){
        expirationYearInput.className = "error";
        expirationMonthInput.className = "success";
        return false;
    } 
    else{
        expirationMonthInput.className = "success";
        expirationYearInput.className = "success";
        return true;
    }
}

//Funcion para corroborar num de tarjeta (Probar con 4152313059935309)
const validateCardNumber = cardNumberInput => {
    let cardNumber = cardNumberInput.value;
    if(cardNumber === "") {  
        cardNumberInput.className = "error";
    }
        
        cardNumberArray =cardNumber.split("");
            //Declarar un objeto vacío llamado "creditCardNumber_All"
            var creditCardNumber_All = [];
        
            //Meter cada elemento de la variable "creditCardNumber" en el array "creditCardNumber_All"
            for(var i = 0; i < cardNumber.length; i++)  {	
            creditCardNumber_All.push(cardNumber.charAt(i));
            }
            
            //Invertir los elementos del array "creditCardNumber_All" con el metodo reverse()
            creditCardNumber_All = creditCardNumber_All.reverse();
            console.log(creditCardNumber_All);
        
            /*Crear un FOR que con un IF dentro en el cual los números en un índice par se multipliquen por 2 y
            Guardar nuevos digitos en un objeto	nuevo llamado "newObject" y Declarar "newObject" vacío*/
        
            var newObject= [];
            for(var j = 0; j < creditCardNumber_All.length; j++) 					{
                if(j % 2 !==0)											{
                    var result = creditCardNumber_All[j] * 2;
                    /*Dentro del IF, poner otra condicion de que en el caso de numero en indice par, 
                    si resultado es mayor a 9, separar digitos*/
                    if(result > 9)								 	{
                        result= result.toString();
                        for( var k = 0; k < result.length; k++){
                            newObject.push(result[k]);
                            }
                    } else                                    	    {
                        newObject.push(result);
                        }
                //y los numeros en un indice impar se mantengan igual
                //Guardar nuevos digitos en un object nuevo llamado "newObject"	
                }else 														{
                    result= creditCardNumber_All[j] * 1;
                    newObject.push(result);
                }
            }
        
            //Sumar elementos de "newObject" con un FOR y guardar en variable "sum"
            var sum = 0;
            for(var m = 0; m < newObject.length; m++)			{
            //Convertir strings de "newObject" a numbers
            sum += parseInt(newObject[m]);
            }
        
            //Al resultado de "sum", sacar el residuo de la division entre 10 y guardar en variable "residue"
            var residue = sum % 10;
        
            //Mostrar si es una tarjeta válida si su residuo es 0
            if(residue === 0)	{
                cardNumberInput.className = "success";
                return true;
            } else              {
                cardNumberInput.className = "error";
                return false;
            }
}

//Funcion para corroborar todos el form
const validateCardDetails = element => {//element sera el form completo
    const formArray = Array.from(form);
    let cardNumberInput = formArray[0];
    let expirationMonthInput = formArray[1];
    let expirationYearInput = formArray[2];
    let cvvInput = formArray[3];
    let nameUserInput = formArray[4];  

    validateCardNumber(cardNumberInput);
    validateExpirationDate(expirationMonthInput,expirationYearInput);
    validateCVV(cvvInput);
    validateName(nameUserInput);
    
    if(validateCardNumber(cardNumberInput) == true &&
       validateExpirationDate(expirationMonthInput,expirationYearInput)==true &&
       validateCVV(cvvInput)==true &&
       validateName(nameUserInput)==true){
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

