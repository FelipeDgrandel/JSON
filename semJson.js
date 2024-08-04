//JSON - JavaScript Object Notaion
//chave e valor com o objetivo de transferir dados
let name = "Felipe" 
let age = 24 ;
let products = ["mouse 2xwm", "Teclado mecanico", "monitor"]
let productsValues = [29.90, 129.99, 899.99]

generateInvoice(name, products, productsValues, age)

function generateInvoice(name, products,productsValues, age){
    console.log("O comprador é "+ name)
    console.log("A idade é " + age)
    console.log("-----------------")
    console.log ("O produto é "+ products[0])
    console.log("Valor : "+ productsValues[0])

}