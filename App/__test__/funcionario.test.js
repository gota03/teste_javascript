const funcionario = require("../funcionario")

test("Salário não pode ser menor que 1000",()=>{
    expect(funcionario.getSalario()).toBeGreaterThan(1000)
})
test("Salario menor que 0",()=>{
    expect(funcionario.setSalario(-1)).toBeLessThan(0)
})
test("O salário tem que ser maior que zero", ()=>{
    expect(funcionario.setSalario(200)).toBeTruthy()
})