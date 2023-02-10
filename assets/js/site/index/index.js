import  cardCv  from "./cardCv.js";

const inputName = document.getElementById("name");
const inputPhone = document.getElementById("phone");
const inputAddress = document.getElementById("address");
const inputEmail = document.getElementById("email");
const inputWebSite = document.getElementById("webSite");
const inputSummary = document.getElementById("summary");
const inputLenguajes = document.getElementById("lenguajes");
const inputJobs = document.getElementById("jobs");
const inputEducation = document.getElementById("education");
const inputSkill = document.getElementById("skill");


const btngenerate = document.getElementById("btngenerate");
btngenerate.addEventListener("click", createContact);

const btnclear = document.getElementById("btnclear");
btnclear.addEventListener("click", formClear);

function createContact() {
  cardCv();
  if (!validate()) {
    alert("All information is required");
  } else {
    const valueName = inputName.value;
    const valuePhone = inputPhone.value;
    const valueAddress = inputAddress.value;
    const valueEmail = inputEmail.value;
    const valueWebSite = inputWebSite.value;
    const valueSummary = inputSummary.value;
    const valueLenguajes = inputLenguajes.value;
    const valueJobs = inputJobs.value;
    const valueEducation = inputEducation.value;
    const valueSkill = inputSkill.value;

    cardCv(valueName,valuePhone,valueAddress,valueEmail,valueWebSite,valueSummary,valueLenguajes,valueJobs,valueEducation,valueSkill);
    formClear();
  }
}

function formClear() {
  inputClear(inputName, true);
  inputClear(inputPhone, false);
  inputClear(inputAddress, false);
  inputClear(inputEmail, false);
  inputClear(inputWebSite, false);
  inputClear(inputSummary, false);
  inputClear(inputLenguajes, false);
  inputClear(inputJobs, false);
  inputClear(inputEducation, false);
  inputClear(inputSkill, false);
}

function validate() {
  const valueName = inputName.value;
  const valuePhone = inputPhone.value;
  const valueAddress = inputAddress.value;
  const valueEmail = inputEmail.value;
  const valueWebSite = inputWebSite.value;
  const valueSummary = inputSummary.value;
  const valueLenguajes = inputLenguajes.value;
  const valueJobs = inputJobs.value;
  const valueEducation = inputEducation.value;
  const valueSkill = inputSkill.value;

  let isValid = true;

  isValid = inputValidator(inputName, valueName, isValid);
  isValid = inputValidator(inputPhone, valuePhone, isValid);
  isValid = inputValidator(inputAddress, valueAddress, isValid);
  isValid = inputValidator(inputEmail, valueEmail, isValid);
  isValid = inputValidator(inputWebSite, valueWebSite, isValid);
  isValid = inputValidator(inputSummary, valueSummary, isValid);
  isValid = inputValidator(inputLenguajes, valueLenguajes, isValid);
  isValid = inputValidator(inputJobs, valueJobs, isValid);
  isValid = inputValidator(inputEducation, valueEducation, isValid);
  isValid = inputValidator(inputSkill, valueSkill, isValid);

  return isValid;
}

function inputValidator(input, value, isValid) {
  if (value == "" || value == null || value == undefined) {
    input.classList.add("input-error");
    input.classList.remove("input-success");
    return false;
  } else {
    input.classList.add("input-success");
    input.classList.remove("input-error");
    if (!isValid) {
      return false;
    } else {
      return true;
    }
  }
}

function inputClear(input, isFocus) {
  input.value = "";
  input.classList.remove("input-success");
  input.classList.remove("input-error");
  if (isFocus) {
    input.focus();
  }
}
