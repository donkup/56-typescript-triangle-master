/**
 * 1. Susikurkite TypeScript projektą
 *
 * 2. Parašykite programą, kuri padeda dirbti su triangless
 *
 * 3. Aprašykite klasę "Trikampis", kuri turėtu tris atributus
 * simbolizuojančius visas tris trikampio kraštines (a, b, c).
 *
 * 4. Trikampio kraštinių reikšmės turi būti priskiriamos sukuriant
 * objektą (konstruktoriuje).
 *
 * 5. Aprašykite metodą "spausdintiDuomenis()", kuris atspausdina
 * visus trikampio duomenis (kraštines) į konsolę.
 *
 * 6. Papildykite klasę metodu, kuris apskaičiuoja ir grąžina
 * trikampio perimetrą. Spausdinant trikampio duomenis
 * atspausdinkite ir jo perimetrą.
 *
 * 7. Parašykite metodą, kuris nusako, ar toks trikampis gali
 * egzistuoti (metodas turi grąžinti boolean reikšmę).
 * Spausdindami duomenis pasakykite, ar toks trikampis gali
 * egzistuoti.
 *
 * 8. Papildykite klasę metodu, kuris nurodo, ar trikampis yra
 * statusis.
 *
 * 9. Sukurkite masyvą, kuris saugo trikampių reikšmes,
 * panaudodami ciklą atspausdinkite visų masyvę esančių trikampių
 * duomenis.
 *
 * 10. ND: Papildykite programą funkcionalumu, kuris trikampių
 * masyvą užpildo trikampiais (50 reikšmių), kurių kraštinės yra
 * atsitiktinės reikšmės.
 *
 * Papildoma: Vėliau programa masyvą prafiltravus
 * paliktų tik egzistuojančius trikampius ir atspausdintų jų duomenis.
 */
class Triangle{
    public a: number;
    public b: number;
    public c: number;

    constructor(a:number, b:number, c:number){
        this.a = a;
        this.b = b;
        this.c = c;
    }

    public printTriangleData(): void {
        console.log(`Triangle sides lengths are : a - ${this.a}, b - ${this.b}, c - ${this.c}`);
        console.log(`Perimetras = ${this.perimeter()}`);
        console.log(`Ar trikampis egzistuoja = ${this.formatBoolean(this.isExists)}`);
        console.log(`Ar trikampis statusis = ${this.arStatus ? 'Taip statusis': 'Ne nestatusis'}`); //ternary iskart spausdinant
        console.log(`--------`);  
    }

    public perimeter(): number {
        return this.a+this.b+this.c;
    }
    
    public get isExists(): boolean {
        //metodas be 'get' ir su paprastu if
        // if(this.a + this.b > this.c &&
        //     this.a + this.c > this.b &&
        //     this.b + this.c > this.a){
        //         return true;
        //     }
        // return false;
        //kadangi grazina boolean tai if galima supaprastinti iki:
        return this.a + this.b > this.c &&
                this.a + this.c > this.b &&
                this.b + this.c > this.a;
    }

    public get arStatus(): boolean {
        //metodas su 'get'
        return this.a**2 + this.b**2 === this.c**2 ||
                this.a**2 + this.c**2 === this.b**2 ||
                this.b**2 + this.c**2 === this.a**2;
    }

    private formatBoolean(input:boolean): string {
        // if(input){
        //     return 'Taip';
        // }
        // return 'Ne';
        return input ? 'Taip': 'Ne';
    }

    private get randomNumber(): number {
        return Math.floor(Math.random() * 100) + 1;
    }

    public createTriangles(array:any, quantity:number): [] {
        for (let i = 0; i < quantity; i++) {
           array.push({a:this.randomNumber, b:this.randomNumber, c:this.randomNumber})  
        }
        return array;
    }

    public printTriangleListData(array:any): void {
        for(const element of array){
           console.log(element);        
        }
    }
}

/*kuriam ir dedam trikapius i sarasa*/
// const triangle = new Triangle(5,7,22);

let triangles: Triangle[] = [];

// triangles = triangle.createTriangles(triangles,5);
// console.log(triangles);
//prints triangles array of objects

// for(const {a,b,c} of triangles){
//     triangle.printTriangleData(a,b,c);     
// };
//prints data of each object in a triangles array

/* Tas pats tik SU FUNKCIJOM below*/

//random number
function randomNumber(): number {
    return Math.floor(Math.random() * 100) + 1;
}

//function to create random triangles list
function createTriangles(quantity: number): void {
    for (let i = 0; i < quantity; i++) {
        triangles.push(new Triangle(randomNumber(), randomNumber(), randomNumber()))  
    }
}

//function to print data from given array
function printData(array: Triangle[]): void {
    let count = 1;
    for(const element of array){
        console.log(`${count++}.`);
        element.printTriangleData();     
    };
}

//calls a function to create needed number of triangles in a array
createTriangles(50);

//calls a function to print data of each object in a triangles array
printData(triangles);

//filter true triangles
const trueTriangles = triangles.filter(triangle => triangle.isExists === true);

//calls a function to print data of each object in a trueTriangles array
console.log(`Data of all true triangles:`);
console.log(`***************************`);

printData(trueTriangles)

// triangles.push(new Triangle(5,7,20))
// console.log(triangles);

// const triangle2 = new Triangle(6,7,100);
// const triangle3 = new Triangle(6,7,8);

