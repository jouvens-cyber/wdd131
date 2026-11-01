
const form = document.querySelector("#ticketForm");
const type = document.querySelector("#type");
const extraField = document.querySelector("#extraField");
const extraLabel = document.querySelector("#extraLabel");
const extraInput = document.querySelector("#extraInput");
const eventDate = document.querySelector("#eventDate");
const output = document.querySelector("#output");

// Show the correct field when the type changes
function updateExtraField() {
  if (type.value === "student") {
    extraField.hidden = false;
    extraLabel.textContent = "Student I#";
    extraInput.required = true;
    extraInput.value = "";
    extraInput.placeholder = "9 digit student number";
    extraInput.pattern = "[0-9]{9}";
    extraInput.maxLength = 9;
    extraInput.inputMode = "numeric";
  } else if (type.value === "guest") {
    extraField.hidden = false;
    extraLabel.textContent = "Access Code";
    extraInput.required = true;
    extraInput.value = "";
    extraInput.placeholder = "Enter access code";
    extraInput.removeAttribute("pattern");
    extraInput.removeAttribute("maxLength");
    extraInput.inputMode = "text";
  } else {
    extraField.hidden = true;
    extraInput.required = false;
    extraInput.value = "";
  }
}

type.addEventListener("change", updateExtraField);
updateExtraField();

// Get today's date
function getToday() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

// Show error below the form
function showError(message) {
  output.textContent = message;
  output.className = "error";
}

// Check the form when submitted
form.addEventListener("submit", function(event) {
  event.preventDefault();

  output.textContent = "";
  output.className = "";

  const firstName = document.querySelector("#firstName").value.trim();
  const lastName = document.querySelector("#lastName").value.trim();
  const emailInput = document.querySelector("#email");
  const email = emailInput.value.trim();
  const selectedType = type.value;
  const date = eventDate.value;
  const extraValue = extraInput.value.trim();

  if (!firstName || !lastName) {
    showError("Please enter your first and last name.");
    return;
  }

  if (!email || !emailInput.checkValidity()) {
    showError("Please enter a valid email address.");
    return;
  }

  if (!selectedType) {
    showError("Please select Student or Guest.");
    return;
  }

  if (!date || date <= getToday()) {
    showError("Please choose a date later than today.");
    return;
  }

  if (selectedType === "student") {
    if (!/^[0-9]{9}$/.test(extraValue)) {
      showError("Student I# must have exactly 9 digits.");
      return;
    }
  }

  if (selectedType === "guest") {
    if (extraValue !== "EVENT131") {
      showError("Incorrect access code. Please try again.");
      return;
    }
  }

  // Create the ticket information
  output.className = "ticket";
  output.innerHTML = `
    <h2>Ticket Created</h2>
    <p id="ticketName"></p>
    <p id="ticketType"></p>
    <p id="ticketDate"></p>
  `;

  document.querySelector("#ticketName").textContent =
    `${firstName} ${lastName}`;

  document.querySelector("#ticketType").textContent =
    selectedType;

  document.querySelector("#ticketDate").textContent =
    date;

  form.reset();
  updateExtraField();
});
