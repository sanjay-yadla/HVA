var inventory = [{id:1001, name:'Laptop', price:50000, category:'Electronic Gadgets',quantity :1},
    {id:1002, name:'SmartPhone', price:20000, category:'Electronic Gadgets',quantity:1},
    {id : 1003, name:'Pizza', price:500, category:'Food',quantity:3},
    {id : 1004, name:'Biryani', price:300, category:'Food', quantity:2},
    {id : 1005, name:'Pen', price:5, category:'Stationary', quantity:10},
    {id : 1006, name:'Biscuits', price:10, category:'Food', quantity:2}]

class product {
    constructor(id, name, price, quantity)
    {   this.id = id ,
        this.name = name,
        this.price = price,
        this.quantity = quantity
    }
}
function displayProducts(){
    inventory.forEach(function(x){
    console.log(x.name +'-' + x.price+'('+x.quantity+')');
    })
}
// displayProducts()
function addProduct(id, name, price, quantity){
    const newProduct = new product(id, name, price, quantity)
    inventory.push(newProduct)
}
// addProduct(1007,'chocolate', 100, 2)
// console.log(inventory)

function updateProduct(id, quantity){
    const found = inventory.find(x => x.id === id)
    if (found){
        found.quantity += quantity;
    }
}
// updateProduct(1006,10)
// console.log(inventory)

function updateProductWithMap (newId, newQuantity){
    var mapInventory = inventory.map(function(product){
        if (product.id === newId){
            return {...product,quantity : product.quantity + newQuantity}
    }
    return product;}
    )
    console.log(mapInventory)
}

// updateProductWithMap(1006, 100)

function removeProduct(id){
    inventory = inventory.filter(product => product.id !== id)
    console.log(inventory)
}

removeProduct(1004)