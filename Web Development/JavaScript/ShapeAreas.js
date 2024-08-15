function areaOfRectangle (l, w){
    let area = l*w;
    return area;
}

function areaOfCircle(r){
    var area = Math.PI * r * r;
    return area;
}

function areaOfTriangle(b , h){
    return 0.5 *b * h;
}

function calculatePaintingCost(d1,d2,calculateArea){
    var area = calculateArea(d1,d2)
    const costPerUnit = 2;
    var totalCost = area * costPerUnit;
    return totalCost;
}

console.log(calculatePaintingCost(5, 10, areaOfRectangle));
console.log(calculatePaintingCost(3,null,areaOfCircle));
console.log(calculatePaintingCost(6, 8, areaOfTriangle));