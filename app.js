//se obtienen los elementos de html para manipularlos de acuerdo con la validacion

const form = document.querySelector("form");
const cvvInput = document.querySelector("#cvv");
const cnInput = document.querySelector("#cn");
const expInput = document.querySelector("#exp");
const nameInput = document.querySelector("#name");


const formArr = Array.from(form);

//se comprueba que la funcion "validateCardDetails" arroje true o false para consolear
form.addEventListener("submit", e => {
  e.preventDefault();

  if (validateCardDetails(form) == true) {
    console.log("datos válidos... enviar...");
  } else {
    console.log("datos inválidos");
  }
});

//funcion la cual debe recibir todos los true de las funciones posteriores para arrojar true
function validateCardDetails(element) {
  //escribe tu código aqui
  getValue (formArr);
  return true
}

//fucncion que itera y obtiene todos los valores de los inputs
const getValue = array => {
  let newArray = array.map (element => element.value)
  let cardNumber = newArray[0];
  let date = newArray[1];
  let cvv = newArray[2];
  let userName = newArray[3];
//llama a todas las funciones para asignarles su valor
  stringToArray(cardNumber);
  valdDate(date);
  valdCvv(cvv);
  valdName(userName);
}

//funciones para validar numero de tarjeta
//separa string obtenido de input y convierte a numero
const stringToArray = numberStr =>{
  let arrayNumbers = [];
  for (let i in numberStr) {
    let numberDivided = numberStr[i].split();
    let allStr = parseInt(numberDivided.join());
    arrayNumbers.push(allStr);
  }
  //console.log(arrayNumbers);
  if (arrayNumbers == "") {
    cnInput.style.border = "2px solid #f91818";
  }else {
      getCardNumer(arrayNumbers);
  }
}

//realiza operacion necesaria para obtener un digito de cada numero ingresado
//obtiene nuevos digitos

const getCardNumer = (numbers) =>{
  let result = [];
  const element = numbers.filter((item,index) => {
    if (index %2 == 0) {
    let multiply = ""+ item * 2;
      if (multiply.length == 1) {
        let number = parseInt(multiply);
        result.push(number)
      }else {
        let digit1 = multiply [0];
        let digit2 = multiply [1];
        let number1 = parseInt(digit1);
        let number2 = parseInt(digit2);
        let sum = number1 + number2;
        result.push(sum);
      }
    }else {
      let oddNumbers = item;
      result.push(oddNumbers);
    }
    //console.log(result);
    valdCardNumer(result);
  })
}

//utiliza los nuevos digitos, los suma entre si y lo reduce a un solo numero
//comprueba que su residuo sea igual a 0 para validar tarjeta
const valdCardNumer = resultArray => {
  const value = resultArray.reduce((sum,value) => sum + value, 0);
    if (value %10 !== 0 || ""){
        cnInput.style.border = "2px solid #f91818";
    }else if (value == 0){
        cnInput.style.border = "2px solid #f91818";
    }else {
      cnInput.style.border = "2px solid #56d937";
      return true;
    }
}


/*funcion que valida que la fecha en el primer indice sea menor a 2
en el segundo sea mayor a 0 en el tercero menor a 2 y en el cuarto mayor a 8
ya que es hace referencia al año en curso y no puede ser menor a este */
const valdDate = expirationDate =>{
    let digitsDate = [];
    for (let i in expirationDate) {
      let dateDivided = expirationDate[i].split();
      let allDate = parseInt(dateDivided.join());
      digitsDate.push(allDate);
    }
    if (digitsDate[0] < 2){
      if (digitsDate[1] > 0){
        if ( digitsDate[2] < 2){
          if (digitsDate[3] >= 8){
            expInput.style.border = "2px solid #56d937";
          }else {
            expInput.style.border = "2px solid #f91818";
          }
        }
      }
    }else {
      expInput.style.border = "2px solid #f91818";
    }
  }

/*con esta funcion y una sola condicional logramos
que el usuario no pueda acceder si pone
espacios, letras o numero menor a 99*/

const valdCvv = elementCvv =>{
  if (elementCvv > 100 && elementCvv < 1000) {
    cvvInput.style.border = "2px solid #56d937";
    const value = true;
  }else {
    cvvInput.style.border = "2px solid #f91818";
  }
}


//funcion que valida que no haya espacios vacios o que tenga numeros más de 30 letras
const valdName = userName =>{
console.log(userName);
}
