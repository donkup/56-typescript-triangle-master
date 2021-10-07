"use strict";
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    printTriangleData() {
        console.log(`Triangle sides lengths are : a - ${this.a}, b - ${this.b}, c - ${this.c}`);
        console.log(`Perimetras = ${this.perimeter()}`);
        console.log(`Ar trikampis egzistuoja = ${this.formatBoolean(this.isExists)}`);
        console.log(`Ar trikampis statusis = ${this.arStatus ? 'Taip statusis' : 'Ne nestatusis'}`);
        console.log(`--------`);
    }
    perimeter() {
        return this.a + this.b + this.c;
    }
    get isExists() {
        return this.a + this.b > this.c &&
            this.a + this.c > this.b &&
            this.b + this.c > this.a;
    }
    get arStatus() {
        return Math.pow(this.a, 2) + Math.pow(this.b, 2) === Math.pow(this.c, 2) ||
            Math.pow(this.a, 2) + Math.pow(this.c, 2) === Math.pow(this.b, 2) ||
            Math.pow(this.b, 2) + Math.pow(this.c, 2) === Math.pow(this.a, 2);
    }
    formatBoolean(input) {
        return input ? 'Taip' : 'Ne';
    }
    get randomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }
    createTriangles(array, quantity) {
        for (let i = 0; i < quantity; i++) {
            array.push({ a: this.randomNumber, b: this.randomNumber, c: this.randomNumber });
        }
        return array;
    }
    printTriangleListData(array) {
        for (const element of array) {
            console.log(element);
        }
    }
}
let triangles = [];
function randomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}
function createTriangles(quantity) {
    for (let i = 0; i < quantity; i++) {
        triangles.push(new Triangle(randomNumber(), randomNumber(), randomNumber()));
    }
}
function printData(array) {
    let count = 1;
    for (const element of array) {
        console.log(`${count++}.`);
        element.printTriangleData();
    }
    ;
}
createTriangles(50);
printData(triangles);
const trueTriangles = triangles.filter(triangle => triangle.isExists === true);
console.log(`Data of all true triangles:`);
console.log(`***************************`);
printData(trueTriangles);
