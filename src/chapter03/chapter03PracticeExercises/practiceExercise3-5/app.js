let people = {
    friends: []
};

let friend1 = {
    firstName: "John",
    lastName: "Doe",
    ID: 12345
};

let friend2 = {
    firstName: "James",
    lastName: "Plymouth",
    ID: 23456
};

let friend3 = {
    firstName: "Jonathan",
    lastName: "Rye",
    ID: 34567
};

people.friends.push(friend1, friend2, friend3);
console.log(people);
