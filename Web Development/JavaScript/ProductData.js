let products = [{id:1001, name:'Laptop', price:50000, category:'Electronic Gadgets'},
    {id:1002, name:'SmartPhone', price:20000, category:'Electronic Gadgets'},
    {id : 1003, name:'Pizza', price:500, category:'Food'},
    {id : 1004, name:'Biryani', price:300, category:'Food'},
    {id : 1005, name:'Pen', price:5, category:'Stationary'},
    {id : 1006, name:'Biscuits', price:10, category:'Food'}

]

function displayProducts(array){
    array.forEach(n=> console.log(n.name +'- $'+n.price));
}
displayProducts(products)
const taxRate = 10/100;
let productsWithTax = products.map(x=>{x.price=x.price*(1+taxRate);
    return {
        id : x.id,
        name : x.name,
        price : x.price,
        category : x.category
    }
});
displayProducts(productsWithTax)

let foodProducts = products.filter(function(x){
    return x.category==='Food'
})
displayProducts(foodProducts)

let affordableProducts = products.filter(x=>x.price <= 10);

console.log(affordableProducts)

const affordableProductsStrings = affordableProducts.map(function(n){
    return n.name+':'+n.price;
})

console.log(affordableProductsStrings)

var totalPrice = 0;
products.forEach(function(p){
    return totalPrice+=p.price;
});
console.log(totalPrice)