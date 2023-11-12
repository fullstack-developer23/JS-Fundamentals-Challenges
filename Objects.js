//Activity 1

const person = {
    myName: "Safeer",

    sayHi() {
        return `This is my name ${this.myName}`;
    }

};

console.log(person.sayHi());

//Activity 2

const pet = {
    petName: "Bella",
    typeOfPet: "cat",
    age: 5,
    colour: "golden brownish",

    eat(){

        return(`${this.petName} is eating apple.`)
    },

    drink(){

        return(`${this.petName} is drinking milk.`)
    }

};

console.log(pet.eat());
console.log(pet.drink());

//Activity 3
const coffeeShop = {
    branch: "Manchester",
    drinks: ["coke", 1.50,
            "coffee", 2.50,
            "fanta", 3.50,
            "tea", 0.50                
            ],
    meals: [
        "sandwich", 2.50,
        "toastie", 4,
        "soup", 3,
        "pie", 2
    ],
    drinksOrdered(drink){
        for (let i = 0; i < this.drinks.length; i++){
            if (drink == this.drinks[i]){
                console.log(`The drink ${drink} costs ${this.drinks[i+1]}.`)
            }
        }
    },
    mealOrdered(meal){
        for (let i = 0; i < this.meals.length; i++){
            if (meal == this.meals[i]){
                console.log(`The meal ${meal} costs ${this.meals[i+1]}.`)
            }
        }
    },
};
coffeeShop.drinksOrdered("fanta");
coffeeShop.mealOrdered("pie");