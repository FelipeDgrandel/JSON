//JSON - JavaScript Object Notaion
//chave e valor com o objetivo de transferir dados
let invoice = {
    name: "Felipe",
    age : 28,
    products: {
        0:["Mouse 2xwm", 29.90],
        1:["Teclado Mecanico", 129.99],
        2:["Monitor", 899.99]
    }
}

generateInvoice(invoice)
 function generateInvoice(invoice){
    console.log (`O nome do comprador é ${invoice.name}`)
    console.log (`A idade é ${invoice.age}`)
    console.log ("_______________________")

    for(let index in invoice.products){
        let [productName, productPrice] = invoice.products[index]
        console.log(`- ${productName}: R$ ${productPrice}`)
    }
 }








/*let name = "felipe"
let age = 28
let products = ["mouse 2xwm", "Teclado Mecanico", "Monitor"]
let productsValues =[29.90, 129.99, 899.99]

generateInvoice (name, products, productsValues, age)

function generateInvoice(name, pruducts, productsValues, age){
    console.log(" O comprador é "+ name)
    console.log("A idade é " + age)
    console.log("_________-_________")
    console.log ("O produto é "+ pruducts[0])
    console.log (" Valor:" + productsValues[0])
}*/