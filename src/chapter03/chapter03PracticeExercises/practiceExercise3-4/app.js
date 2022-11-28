let myCar = {
    make: "Tesla",
    model: "Cybertruck",
    color: "silver",
    interiorColor: "white",
    forSale: false
};

let variable = "color";
myCar[variable] = "black";
variable = "forSale";
console.log(`Make: ${myCar.make}\nModel: ${myCar.model}`);
console.log(`For Sale: ${myCar[variable]}`);
