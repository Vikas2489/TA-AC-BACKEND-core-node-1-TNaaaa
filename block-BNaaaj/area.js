// In area.js write functions to calculate area of 
// square, rectangle and circle and export them using module.exports

function areaOfSquare(side) {
    return side * side;
}

function areaOfRectangle(length, width) {
    return length * width;
}

function areaOfCircle(radius) {
    return Math.PI * (radius * radius);
}

module.exports = {
    areaOfSquare,
    areaOfRectangle,
    areaOfCircle,
}