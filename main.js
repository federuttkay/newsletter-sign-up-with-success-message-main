const mainCard = document.querySelector("#main-card");
const successCard = document.querySelector("#success-card");
const errorMessage = document.querySelector("#error-message");
const input = document.querySelector("#email-input");
const submit = document.querySelector(".suscribe-btn");
const cardForm = document.querySelector(".card__form");
const dismissBtn = document.querySelector("#dismiss-btn");
const emailInMessage = document.querySelector(".success-p span");

input.addEventListener("click", removeError);
input.addEventListener("keydown", removeError);
submit.addEventListener("click", validateEmail);
cardForm.addEventListener("submit", submitForm);
dismissBtn.addEventListener("click", dismissMsg);

function removeError(e) {
	e.target.classList.remove("error");
	console.log("function REMOVE ERROR called");
}

function validateEmail(e) {
	console.log("function VALIDATE called");

	const validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if (!input.value.match(validRegex)) {
		input.classList.add("error");
		errorMessage.classList.add("error");
	}
}

function submitForm(e) {
	console.log("Submitted");
	e.preventDefault();

	emailInMessage.textContent = input.value;
	input.value = "";
	mainCard.classList.add("none");
	successCard.classList.remove("none");
}

function dismissMsg(e) {
	mainCard.classList.remove("none");
	successCard.classList.add("none");
	emailInMessage.textContent = "";
}
