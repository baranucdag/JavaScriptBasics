let card = [
    {id:1,prductName:"telefon",quantity:5,unirPrice:5},
    {id:2,prductName:"bilgisayar",quantity:15,unirPrice:15},
    {id:3,prductName:"bardak",quantity:25,unirPrice:52},
    {id:4,prductName:"kalem",quantity:35,unirPrice:53},
]

card.push( {id:5,prductName:"silgi",quantity:23,unirPrice:5})

card.map(x=>console.log(x.prductName))

let quantityOver15 = card.filter(x=>x.quantity>15)
console.log(quantityOver15)

let total = card.reduce((acc,x)=>acc+x.unirPrice*x.quantity,0)
console.log(total)