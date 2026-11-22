// Sort numbers
const nums = [12, 10, 8, 3];

function compareFn(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    }
    return 0;
}

console.log(nums.sort(compareFn));

// Sort strings
const simpleList = [
    "oranges", "grapes", "lemons", "apples",
    "Bananas", "watermelons", "coconuts",
    "broccoli", "mango"
];

const lowerList = simpleList.map(fruit => fruit.toLowerCase());
const lowerSort = lowerList.sort();

console.log(lowerSort);

// Filter fruits
const searchTerm = "an";

const filteredFruit = lowerSort.filter(fruit =>
    fruit.includes(searchTerm)
);

console.log(filteredFruit);

// Sort objects by price
const products = [
    { productName: "Wireless Mouse", price: 29.99 },
    { productName: "Bluetooth Keyboard", price: 49.99 },
    { productName: "Laptop Stand", price: 39.99 }
];

const productSort = products.sort((a, b) => a.price - b.price);

console.log(productSort);

// Filter objects
const animals = [
    {
        name: "Lion",
        traits: ["brave", "strong", "fierce", "wild"]
    },
    {
        name: "Elephant",
        traits: ["large", "gentle", "smart", "wild"]
    },
    {
        name: "Fox",
        traits: ["sly", "quick", "clever", "wild"]
    },
    {
        name: "Dog",
        traits: ["loyal", "friendly", "playful", "cuddly"]
    },
    {
        name: "Cat",
        traits: ["quiet", "independent", "curious", "cuddly"]
    }
];

const query = "dog";

const filteredList = animals.filter(animal =>
    animal.name.toLowerCase().includes(query)
);

console.log(filteredList);

// Filter animal traits
const queryTrait = "wild";

const filteredTraits = animals.filter(animal =>
    animal.traits.find(trait =>
        trait.toLowerCase().includes(queryTrait)
    )
);

console.log(filteredTraits);