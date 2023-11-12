//Activity 1

// let favFilms = [
//     "Top Boy",
//     "The Soparanos",
//     "The Walking Dead",
//     "The Simpsons",
//     "The Inbetweeners"
// ];

// favFilms.push("Harry Potter","Gulivers Travel");


// for(let i = 0; i < favFilms.length; i++){
//     console.log(favFilms[i]);
// }

//Activity 2
//  for(let i = 0; i < 6; i++)
//  {
//     console.log(Math.floor(Math.random(i)*50));
//  }

//Activity 3

// for(let i = 9;i >= 0; i--)
// {
//     console.log(i);
// }

//Activity 4

// let films = [
// "The Shining", 
// "Ip Man", 
// "Ghostbusters",
// "Pursuit of Happiness"
// ];

// for(let i = 0; i < films.length; i++)
// {
//     console.log(films[i]);
// }

// if(films[2] == "GhostBusters")
// {
//     console.log("Yay! its Ghostbusters.");
// }
// else
// {
//     console.log("Boo! We want Ghostbusters.");
// }

//Activity 5

// let randomNum = [];
// for(let i = 0; i < 6; i++)
// {
//     randomNum[i] = Math.floor(Math.random(i)*30);
// }

// for(let i = 0; i < randomNum.length; i++)
// {
//     if(randomNum[i] % 7 == 0)
//     {
//         console.log(`${randomNum[i]} is divisble by 7`);
//     }
//     else
//     {
//         console.log(`${randomNum[i]} is not divisble by 7`);
//     }
// }


//Activity 6

let bobsFollowers = [
    "Safeer",
    "Nora",
    "Xavier",
    "Brian"
];

let hannahsFollowers = [
    "Peter",
    "Nora",
    "Xavier",
    "Harry"
];

for(let i = 0; i < bobsFollowers.length; i++)
{
    for(let j = 0; j < hannahsFollowers.length; j++)
    {
        if(hannahsFollowers[j] == bobsFollowers[i])
        {
            console.log(hannahsFollowers[j]);
        }
    }
}

//Activity 7

