const calcular = {
     campoIdade: 2000,
     qntDinheiro: 100,
     desconto: 10,
    calcularIdade(){
        let anoAtual = new Date().getFullYear() // ESTOU PEGANDO O ANO ATUAL
            let resposta = anoAtual - this.campoIdade
            return resposta
    },
    calcularDesconto(){
        let regex = /^[0-9]+(\.([0-9]{2}))?$/
        if(regex.test(this.qntDinheiro) && regex.test(this.desconto)){
            let conta = this.qntDinheiro * (this.desconto/100)
            return conta
        }
        }
    }
module.exports = calcular