const calcular = require("../calcular")
test("Valor tem que ser igual a 22", ()=>{
    expect(calcular.calcularIdade()).toEqual(22)
}) 
test("Valor do desconto igual a 10",()=>{
    expect(calcular.calcularDesconto()).toEqual(10)
})