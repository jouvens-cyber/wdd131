
// forEach
const steps = ["one", "two", "three"];

steps.forEach(function(item) {
    console.log(item);
});

// map
const myList = document.querySelector("#myList");

const stepsHTML = steps.map(function(item) {
    return `<li>${item}</li>`;
});

myList.innerHTML = stepsHTML.join("");

// GPA using map
const grades = ["A", "B", "C"];

function convert(grade) {
    let points;

    switch (grade) {
        case "A":
            points = 4;
            break;
        case "B":
            points = 3;
            break;
        case "C":
            points = 2;
            break;
        case "D":
            points = 1;
            break;
        case "F":
            points = 0;
            break;
        default:
            alert("not a valid grade");
    }

    return points;
}

const gpaPoints = grades.map(convert);
console.log(gpaPoints);

// reduce
const totalPoints = gpaPoints.reduce(function(total, item) {
    return total + item;
});

const gpaAverage = totalPoints / gpaPoints.length;
console.log(gpaAverage);

// filter
const words = ["watermelon", "peach", "apple", "tomato", "grape"];

const shortWords = words.filter(function(word) {
    return word.length < 6;
});

console.log(shortWords);

// indexOf
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;

const luckyIndex = myArray.indexOf(luckyNumber);
console.log(luckyIndex);

// Dynamic content using objects
const studentContainer = document.querySelector("#studentContainer");

const students = [
    {last: "Andrus", first: "Aaron"},
    {last: "Masa", first: "Manny"},
    {last: "Tanda", first: "Tamanda"}
];

students.forEach(function(item) {
    const name = document.createElement("div");
    name.classList.add("format");

    const studentHTML = `
        <span>${item.first}</span>
        <span>${item.last}</span>
        <hr>
    `;

    name.innerHTML = studentHTML;
    studentContainer.appendChild(name);
});
