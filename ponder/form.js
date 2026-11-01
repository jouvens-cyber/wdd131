
const form = document.querySelector("#fsyForm");
const travelRange = document.querySelector("#travelRange");
const notesContainer = document.querySelector("#notesContainer");
const notes = document.querySelector("#notes");
const output = document.querySelector("#output");
const campusBoxes = document.querySelectorAll('input[name="campus"]');

// Show travel notes if they choose more than one campus
function updateNotesField() {
  const value = travelRange.value;

  if (value === "many") {
    notesContainer.hidden = false;
    notes.required = true;
  } else {
    notesContainer.hidden = true;
    notes.required = false;
  }
}

travelRange.addEventListener("change", updateNotesField);
updateNotesField();

// Check if the date is today or before today
function isPastDate(value) {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  const currentDate = `${year}-${month}-${day}`;
  return value <= currentDate;
}

// Get all the campuses that were checked
function getSelectedCampuses() {
  return Array.from(campusBoxes)
    .filter(box => box.checked)
    .map(box => box.value);
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.elements.namedItem("firstName").value.trim();
  const lastName = form.elements.namedItem("lastName").value.trim();
  const email = form.elements.namedItem("email").value.trim();
  const type = travelRange.value;
  const availableDate = form.elements.namedItem("availableDate").value;
  const selectedCampuses = getSelectedCampuses();
  const note = notes.value.trim();

  // Make sure they choose at least one campus
  if (selectedCampuses.length === 0) {
    output.textContent = "Please choose at least one campus.";
    return;
  }

  // Make sure they add travel notes if they choose many
  if (type === "many" && !note) {
    output.textContent = "Please add a travel note.";
    return;
  }

  // Make sure they select at least two campuses
  if (type === "many" && selectedCampuses.length < 2) {
    output.textContent = "Please select at least two campuses.";
    return;
  }

  // Make sure they choose a future date
  if (isPastDate(availableDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

  // Show their information after submitting
  output.innerHTML = `
    <h2>Preference Submitted</h2>
    <p id="submittedName"></p>
    <p id="submittedEmail"></p>
    <p id="submittedDate"></p>
    <p id="submittedCampuses"></p>
    <p id="submittedType"></p>
  `;

  document.querySelector("#submittedName").textContent =
    `${firstName} ${lastName}`;

  document.querySelector("#submittedEmail").textContent =
    `Email: ${email}`;

  document.querySelector("#submittedDate").textContent =
    `Availability: ${availableDate}`;

  document.querySelector("#submittedCampuses").textContent =
    `Campuses: ${selectedCampuses.join(", ")}`;

  document.querySelector("#submittedType").textContent =
    `Preference Level: ${type}`;

  form.reset();
  updateNotesField();
});
