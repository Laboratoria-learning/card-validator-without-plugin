#Pseudocódigo

-Pedir el numero de tarjeta por medio de un form

-desabilitar el boton de verificar/pagar por dafault

-si no se ingresan 16 numeros o si esta vacio desabilitar boton-- if()

-Guardar el value del input (número de Tarjeta)

-Convertir el numero a un array (Array.from())

-revertir el orden del array-- reverse()

-Identificar los numeros que esten en indices pares-- map(element, index)

-A los numeros que esten en indices pares los multiplicamos x 2-- if()

-Si el resultado es mayor o igual a 10 se suman los digitos y se regresa al array-- if() 

-Si el resultado es menor a 10 no se cambia y se regresa al array--- else{}

-Sumamos todos los numeros del array-- reduce()

-Dividimos el resultado entre 10-- reduce()/10

-Si el residuo es igual a 0 regresamos (tarjeta valida)

-Si el residuo es diferente a 0 regresamos (tarjeta invalida)

<!-- Revisar implementación para el boton desabilitado
Materialize.toast('I am a toast!', 3000, 'rounded') -->


<!-- Funciones:
-función que desabilita boton (por default y por condición)
Revisar si se necesitan mas funciones
-función que valida tarjeta -->
