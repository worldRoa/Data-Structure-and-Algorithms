const char = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names

// const names = char.map(
//     (char) => {
//         return char.name
// });
// console.log(names);

// //2. Get array of all heights

// const heights = char.map(
//     (char) => {
//         return char.height
//     });
// console.log(heights)
// //3. Get array of objects with just name and height properties


// //4. Get array of all first names

// //***REDUCE***
// //1. Get total mass of all characters

const totalMassChar = char.reduce(
    (acc, cur) => acc + cur.mass, 0)

    console.log(totalMassChar);

// //2. Get total height of all characters

const totalHeight = char.reduce(
    (acc, cur) => acc + cur.height, 0)

    console.log(totalHeight);
// //3. Get total number of characters by eye color

const totalNumCharByEyeColor = char.reduce((acc, cur) => {
    const color = cur.eye_color;
    if(acc[color]) {
        acc[color]++;
    }else {
        acc[color] = 1;
    }
    return acc;
}, {});

console.log(totalNumCharByEyeColor);
// //4. Get total number of characters in all the character names

// //***FILTER***
// //1. Get characters with mass greater than 100

// const greater100Char = char.filter( 
//     (char) => char.mass > 100
// );
// console.log(greater100Char)

// //2. Get characters with height less than 200

// const shorter200Char = char.filter(
//     (char) => char.height < 200
// );
// console.log(shorter200Char);
// //3. Get all male characters

// const maleChar = char.filter(
//     (char) => char.gender === "male"
// )
// console.log(maleChar);
// //4. Get all female characters

// const femaleChar = char.filter(
//     (char) => char.gender === "female"
// );
// console.log(femaleChar);

//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?

const allBlueEyesChar = char.every((char) => char.eye_color === 'blue'
);
console.log(allBlueEyesChar);

//2. Does every character have mass more than 40?

const over40MassChar = char.every((char) =>
    char.mass > 40
)
console.log(over40MassChar)
//3. Is every character shorter than 200?

const shortChar = char.every((char) =>
    char.height < 200);

console.log(shortChar);

//4. Is every character male?

const maleChar = char.every((char) => char.gender === 'male');

console.log(maleChar);

//***SOME***
//1. Is there at least one male character?


//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?