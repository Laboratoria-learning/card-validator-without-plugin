const validarNombre = (nombre) => {
  console.log(nombre);
  if (nombre === "") {
    return false;
  }
  if(nombre.indexOf(" ") === 0){
    return false;
  }
  const array = nombre.split(" ").filter((element) => {
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



describe("Validar nombre", () => {
  it("Existe la función", () => {
    expect(validarNombre).toBeDefined();
  });
  it("No acepta cadena vacía", () => {
    expect(validarNombre("")).toEqual(false);
  });
  it("Cada palabra tiene máximo 30 caracteres", () => {
    const prueba = "SuperCalifragilisticoespiralidoso parangaricutirimicuaro"
    expect(validarNombre(prueba)).toEqual(false)
  });
  it("Debe tener mayúsculas y minúsculas");
  it("Mínimo 2 palabras", () => {
    const unaPalabra = "Juanito";
    expect(validarNombre(unaPalabra))
    .toEqual(false)
    const dosPalabras = "La Bikina"
    expect(validarNombre(dosPalabras))
    .toEqual(true)
    const trampa = "Lalo  "
    expect(validarNombre(trampa))
    .toEqual(false)

  });
  it("No empieza con espacios", () => {
    const fechaAhorita = Date.now()
    const nombreRandom =` ${fechaAhorita}`
    expect(validarNombre(nombreRandom)).toEqual(false);
  });
  xit("indexOf", () =>{
    const nombre =" nombre";
    expect(nombre.indexOf(" ")).toEqual(0);
  })
});
