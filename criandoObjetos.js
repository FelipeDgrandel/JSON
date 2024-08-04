class formaDeBolo{
    constructor(saborDaMassa, recheioMassa){
        this.saborDaMassa = saborDaMassa
        this.recheioMassa = recheioMassa
    }
    escrever(){
        console.log(`Esta massa tem sabor de ${this.saborDaMassa} e recheio de ${this.recheioMassa}`)
    }
    assando(){
        console.log(`Em andamento massa de ${this.saborDaMassa}`)
    }
}
let bolo = new formaDeBolo ("chocolate", "cenoura")
let boloDeFesta = new formaDeBolo("baumilha", "nutella com MMS")
let boloDeCasamento = new formaDeBolo("ló", " castanhas com chantilly e nozes")
bolo.escrever()
boloDeFesta.escrever()
boloDeCasamento.assando()








/*class pessoa {
    constructor(corCabelos, corOlhos, etnia, sexo, idade){
        this.corCabelos = corCabelos
        this.corOlhos = corOlhos
        this.etnia = etnia
        this.sexo = sexo
        this.idade = idade
    }
    escrever(){
        console.log()
    }
}
let pessoaFisica = new pessoa("pretos", "castanhos","parda","masc",28)
console.log(pessoaFisica)*/