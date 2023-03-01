class student {
    name ;
    roll;
    constructor (n = 'not defiend', r = 'none'){
        this.name = n;
        this.roll = r; 
    }
    showdetails(nn, rr){
        console.log(`my name is ${this.name} , my roll is ${this.roll}`)
    }
}

const student1 = new student('rasel', 3);
const student2 = new student ('Zahidul vai', 01);
const student3 = new student (8);
console.log( student3)