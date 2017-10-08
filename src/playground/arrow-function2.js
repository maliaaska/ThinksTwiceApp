//arguments object - no longer bound withh arrow function

const add = (a, b) =>  {
   // console.log(arguments);
    return a + b;
};
console.log(add(2, 1, 10001))

// this keyword - no longer bound


const user = {
    name: 'Arek',
    cities: ["Warsaw", 'Amsterdam', "Barcelona"],
    printPlacesLived() {
        return this.cities.map((city) =>   this.name + ' has lived in ' + city);
       
        return cityMessages;
    }

};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [2, 4, 6],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
        }
    
};

console.log(multiplier.multiply());