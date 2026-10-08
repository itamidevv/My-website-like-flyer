const modal = document.getElementById("quoteModal");
const estimateBtn = document.getElementById("estimateBtn");
const closeModal = document.querySelector(".close-modal");
const selectedServiceText = document.getElementById("selectedServiceText");
const quoteForm = document.getElementById("quoteForm");

const businessEmail = "balduezajhorren@gmail.com";

// =========================
// OPEN GENERAL ESTIMATE
// =========================

estimateBtn.addEventListener("click", function () {
selectedServiceText.textContent = "Selected: General Inquiry";
modal.style.display = "flex";

document.getElementById("customerName").focus();
});

// =========================
// SELECT SERVICE
// =========================

function selectService(serviceName) {
selectedServiceText.textContent = "Selected: " + serviceName;

modal.style.display = "flex";

document.getElementById("customerName").focus();
}

// =========================
// CLOSE MODAL
// =========================

closeModal.addEventListener("click", function () {
modal.style.display = "none";
});

// Close when clicking outside modal

window.addEventListener("click", function (event) {
if (event.target === modal) {
modal.style.display = "none";
}
});

// Close with ESC key

window.addEventListener("keydown", function (event) {
if (event.key === "Escape") {
modal.style.display = "none";
}
});

// =========================
// SEND REQUEST THROUGH GMAIL
// =========================

quoteForm.addEventListener("submit", function (event) {

event.preventDefault();

const name =
document.getElementById("customerName").value.trim();

const phone =
document.getElementById("customerPhone").value.trim();

const message =
document.getElementById("customerMessage").value.trim();

const selectedService =
selectedServiceText.textContent.replace("Selected: ", "");

if (!name || !phone || !message) {
alert("Please complete all fields.");
return;
}

const subject =
encodeURIComponent(
"Electrical Service Request - " + selectedService
);

const body =
encodeURIComponent(
`Hello REN ELECTRICS,

I would like to request an electrical service.

Service:
${selectedService}

Name:
${name}

Phone Number:
${phone}

Description:
${message}

Location:
Rizal, Kananga, Leyte

Thank you.`
);

/*
This opens the user's email client using mailto.

If Gmail is configured as the browser's mail handler,
it will open Gmail's compose window automatically.

*/

const gmailCompose =
"https://mail.google.com/mail/?view=cm&fs=1&to=${businessEmail}&su=${subject}&body=${body}";

window.open(gmailCompose, "_blank");

modal.style.display = "none";

quoteForm.reset();

});