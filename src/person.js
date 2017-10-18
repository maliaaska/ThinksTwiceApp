console.log("person.js is running");

const isAdult = (x) => x >= 18;

const canDrink = (x) => {
    if(x >= 21 ) {
        console.log(" Yeah, pour this guy a lot of alco!");
    } else {
        console.log('Are you crazy, do you want to go to the prison??');
    }
}

export { isAdult, canDrink };