let users = [{
        firstName: 'Joe',
        lastName: 'Orin',
        car: 'Porsche',
        dog: 'Shitzu',
    },

    {
        firstName: 'Lori',
        lastName: "Foster",
        car: 'Porsche',
        dog: 'German Shepherd'
    },

    {
        firstName: 'Guy',
        lastName: 'Peters',
        car: 'Chevrolet',
        dog: 'Poodle'
    },

    {
        firstName: 'Lori',
        lastName: 'Foster',
        car: 'Toyota',
        dog: 'German Shepard'
    }
];
// how it is layed out.
//array.map(function(currentValue, index, arr), thisValue)
// function mapping(arr){

// users.map(function(firstName, lastName){
// console.log(firstName)
// })
// }
// console.log(mapping(users))


// let array = [
//     {
//        song: 'Hello',
//        artist: 'Adele',
//     },
//     {
//         song: 'Wonderwall',
//         artist: 'Oasis'
//     }
// ]
function mapping(givenArr) {
    givenArr.map((elem) => {
        console.log(`${elem.firstName} ${elem.lastName}`)
    })
}
mapping(users)