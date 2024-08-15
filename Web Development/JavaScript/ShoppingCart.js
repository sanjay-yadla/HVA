let cart = [{name:'Pen' , price:10, quantity: 15},
    {name:'Book', price: 40, quantity: 5},
    {name:'Chocolate', price:20, quantity:10},
    {name:'Bottle', price:100, quantity:1}
];

function calculateTotalPrice(cart){
    let totalPrice = 0;
    cart.forEach(x=> totalPrice+=x.price*x.quantity);
    return totalPrice;
}

const result = calculateTotalPrice(cart);
console.log(result)