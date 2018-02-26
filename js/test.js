
//reglas de testeo
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
  /*xit("indexOf", () =>{
    const nombre =" nombre";
    expect(nombre.indexOf(" ")).toEqual(0);
  })*/
});

describe('Probar entradas de nombre invalias', () => {
  it('ingresa nombre de una "palabra"', () =>{
    let inputNombre = document.querySelector('testingId')
    inputNombre.value = ''
    const submit = document.querySelector('input[type="submit"]')
    const result = document.querySelector('#testingId')

    inputNombre.value = Date.now()
    submit.click()
    expect(result.innerHTML).toEqual('Malisimo')
    expect(result.className).toEqual("error")
  })
})
