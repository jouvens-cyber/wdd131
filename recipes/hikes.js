const hikes = [
    {
        name: "Bechler Falls",
        distance: "3 miles",
        tags: ["Caves", "Yellowstone", "Waterfall"],
        difficulty: 1,
        description: "Beautiful short hike in Yellowstone along the Bechler river to Bechler Falls"
    },
    {
        name: "Teton Canyon",
        distance: "3 miles",
        tags: ["Canyon", "Tetons"],
        difficulty: 1,
        description: "Beautiful short (or long) hike through Teton Canyon."
    },
    {
        name: "Denanda Falls",
        distance: "7 miles",
        tags: ["Caves", "Yellowstone", "Waterfall"],
        difficulty: 3,
        description: "Beautiful hike through Bechler meadows to Denanda Falls"
    },
    {
        name: "Coffee Pot Rapids",
        distance: "2.2 miles",
        tags: ["Rafting"],
        difficulty: 1,
        description: "Beautiful hike along the Henry's Fork of the Snake River to a set of rapids."
    },
    {
        name: "Menan Butte",
        distance: "3.4 miles",
        tags: ["Volcanic", "View"],
        difficulty: 2,
        description: "A steep climb to one of the largest volcanic tuff cones in the world."
    }
];

// Select HTML elements
const hikeContainer = document.querySelector("#hike-container");
const input = document.querySelector("#search");
const button = document.querySelector("#search-button");

// Listen for search button
button.addEventListener("click", search);

// Allow searching with Enter
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        search();
    }
});

// Generate a random hike
const randomNum = Math.floor(Math.random() * hikes.length);

// Create tag buttons
function tagTemplate(tags) {
    return tags.map(tag => `<button>${tag}</button>`).join(" ");
}

// Display difficulty rating
function difficultyTemplate(rating) {
    let html = `<span class="rating" role="img"
        aria-label="Difficulty: ${rating} out of 5">
        Difficulty: `;

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true">🥾</span>`;
        } else {
            html += `<span aria-hidden="true">▫️</span>`;
        }
    }

    html += "</span>";

    return html;
}

// Create hike HTML
function hikesTemplate(hike) {
    return `
        <div class="hike-card">
            <div class="hike-content">
                <h2>${hike.name}</h2>

                <div class="hike-tags">
                    ${tagTemplate(hike.tags)}
                </div>

                <p>${hike.description}</p>
                <p>Distance: ${hike.distance}</p>
                <p>${difficultyTemplate(hike.difficulty)}</p>
            </div>
        </div>
    `;
}

// Display a hike
function renderHike(hike) {
    hikeContainer.innerHTML += hikesTemplate(hike);
}

// Search and filter hikes
function search() {
    const hikeQuery = input.value.toLowerCase().trim();

    const filteredHikes = hikes.filter(hike =>
        hike.name.toLowerCase().includes(hikeQuery) ||
        hike.description.toLowerCase().includes(hikeQuery) ||
        hike.tags.find(tag =>
            tag.toLowerCase().includes(hikeQuery)
        )
    );

    // Sort by distance
    const sortedHikes = filteredHikes.sort((a, b) =>
        parseFloat(a.distance) - parseFloat(b.distance)
    );

    hikeContainer.innerHTML = "";

    sortedHikes.forEach(hike => {
        renderHike(hike);
    });

    if (sortedHikes.length === 0) {
        hikeContainer.textContent = "No matching hikes found.";
    }
}

// Display random hike when the page loads
function init() {
    renderHike(hikes[randomNum]);
}

init();