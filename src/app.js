console.log("merhaba dunya burada");

var dolarDun = 9.20
var dolarBugun = 9.30

console.log(dolarBugun)
console.log(dolarDun)

function addToCart(productName){
    console.log(productName + " isimli urun sepete eklendi !");
}

let isim = "baran";
addToCart(isim);

addToCart();
let productFunc = {productName : "elma",unitPrice : 8, quantity :10}
let func = (product) => {
    console.log(product.productName)
}

func(productFunc)