const inventory = [];

let item1 = {
    name: "iPad Pro",
    model: "12.9 3rd Gen",
    cost: 1000,
    quantity: 50
};

let item2 = {
    name: "MacBook Pro",
    model: "16\" M1 Max",
    cost: 3000,
    quantity: 20
};

let item3 = {
    name: "iPhone",
    model: "14 Pro",
    cost: 1000,
    quantity: 100
};

inventory.push(item1, item2, item3);
console.log(inventory);
console.log(inventory[2].quantity);
