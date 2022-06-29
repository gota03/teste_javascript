const funcionario = require("../funcionario")

test("Salário não pode ser menor que 1000",()=>{
    expect(funcionario.getSalario()).toBeGreaterThan(1000)
})
test("Salario menor que 0",()=>{
    expect(funcionario.setSalario(0)).toBeLessThan(-10)
})