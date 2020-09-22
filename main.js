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
//'solution'
let l = users.map((arr) => console.log( `${arr.firstName} ${arr.lastName}`))

// //testing
// console.log(l)

// // how it is layed out.
// //array.map(function(currentValue, index, arr), thisValue)
// // function mapping(arr){

// // users.map(function(firstName, lastName){
// // console.log(firstName)
// // })
// // }
// // console.log(mapping(users))


// // let array = [
// //     {
// //        song: 'Hello',
// //        artist: 'Adele',
// //     },
// //     {
// //         song: 'Wonderwall',
// //         artist: 'Oasis'
// //     }
// // ]
// // function mapping(givenArr) {
// //     givenArr.map((elem) => {
// //         console.log(`${elem.firstName} ${elem.lastName}`)
// //     })
// // }
// // mapping(users)


const users2 = [{
        name: 'pan',
        likes: 'lasagne'
    },
    {
        name: 'lena',
        likes: 'wine'
    },
    {
        name: 'jill',
        likes: 'tacos'
    },
    {
        name: 'conner',
        likes: 'turkey'
    }
];
// Should look like:
// [{
//         pan: 'lasagne',
//         age: 30
//     },
//     {
//         lena: 'wine',
//         age: 40
//     },
//     {
//         jill: 'tacos',
//         age: 40
//     },
//     {
//         conner: 'turkey',
//         age: 60
//     }
// ]

//'solution'
    let x = users2.map((item) => {
        return {
            [item.name]: item.likes,
            age: item.name.length * 10
        }
    })

//testing
console.log(x)
