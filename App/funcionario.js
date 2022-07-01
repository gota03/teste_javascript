const funcionario = {
    nome: "Mateus",
    idade: 19,
    salario: 5000.00,
    getSalario(){
        return this.salario
    },
    setSalario(valor){
        if(valor<
            0){
            return valor
        }
        else{
            this.salario = valor 
            return true
        }
    }
}

module.exports = funcionario