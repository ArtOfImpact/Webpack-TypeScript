import './style/style.css'


const users = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true

    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
]


let animals = users.filter((el) => {
    return el.animals
})

console.log(animals)

let education = users.filter((el) => {
    if (el.hasEducation === true) {
        return el
    }
})
console.log(education)


let carname = users.map((el) => {
    return el.cars
})
console.log(carname.join())

let count: string = '';

for (let user of users) {
    count += user.name

}

console.log(count)