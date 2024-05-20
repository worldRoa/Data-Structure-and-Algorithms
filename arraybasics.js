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

// const totalMassChar = char.reduce(
//     (acc, cur) => acc + cur.mass, 0)

//     console.log(totalMassChar);

// // //2. Get total height of all characters

// const totalHeight = char.reduce(
//     (acc, cur) => acc + cur.height, 0)

//     console.log(totalHeight);
// // //3. Get total number of characters by eye color

// const totalNumCharByEyeColor = char.reduce((acc, cur) => {
//     const color = cur.eye_color;
//     if(acc[color]) {
//         acc[color]++;
//     }else {
//         acc[color] = 1;
//     }
//     return acc;
// }, {});

// console.log(totalNumCharByEyeColor);
// // //4. Get total number of characters in all the character names

// const totalNameMum = char.reduce((acc, cur) =>

//     acc + cur.name.length, 0)

// console.log(totalNameMum);
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

const CharbyMass = char.sort((a, b) => b.mass - a.mass);

console.log(CharbyMass);

//2. Sort by height

const byHeight = char.sort((a, b) => a.height - b.height);

console.log(byHeight);

//3. Sort by name

const byName = char.sort((a, b) => {
    if(a.name < b.name) return -1;
    return 1;
})

console.log(byName);

//4. Sort by gender

const byGender = char.sort((a, b) => {
    if(a.gender === 'female') return -1;
    return 1;
})

console.log(byGender);

//***EVERY***
// //1. Does every character have blue eyes?

// const allBlueEyesChar = char.every((char) => char.eye_color === 'blue'
// );
// console.log(allBlueEyesChar);

// //2. Does every character have mass more than 40?

// const over40MassChar = char.every((char) =>
//     char.mass > 40
// )
// console.log(over40MassChar)
// //3. Is every character shorter than 200?

// const shortChar = char.every((char) =>
//     char.height < 200);

// console.log(shortChar);

// //4. Is every character male?

// const maleChar = char.every((char) => char.gender === 'male');

// console.log(maleChar);

//***SOME***
//1. Is there at least one male character?

// const oneMaleChar = char.some((char) =>
//     char.gender === 'male');

// console.log(oneMaleChar);

// //2. Is there at least one character with blue eyes?

// const blueEyesChar = char.some((char) =>
//     char.eye_color === 'blue');

// console.log(blueEyesChar);
// //3. Is there at least one character taller than 210?

// const Taller210Char = char.some((char) =>
//     char.height > 210);

// console.log(Taller210Char);
// //4. Is there at least one character that has mass less than 50?

// const mass50Char = char.some((char) =>
//     char.mass < 50)

// console.log(mass50Char);