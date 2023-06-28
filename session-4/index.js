
let personA = {
    name: "Mina",
    age: 40,
    location: "Texas",
    likes: "unvierse guru",
};

let personB = {
    name: "Michelle",
    age: 21,
    location: "NY",
    likes: "macroni"
};

let personC = {
    name: "Jessica",
    age: 19,
    location: "Philly",
    likes: "fashion"
};

let personD = {
    name: "Phil"
    age: 50
    location: "London",
    likes: "quantum physic"
};



const biography = (person) => "Hi my name is, " + person.name + ". I am " + person.age + " years old, I live in " + person.location + " and I like " + person.likes + "."

console.log(biography(personD));
console.log(biography(personC));
console.log(biography(personB));
console.log(biography(personA));