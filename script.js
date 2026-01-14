// membuat tag form
const form = document.createElement("form")

document.body.appendChild(form);

// membuat label dan input dalam form

// div name
const divName = document.createElement("div");

divName.setAttribute("class", "div-name")

document.body.appendChild(divName);

// label name
const labelName = document.createElement("label")

labelName.setAttribute("for", "name")

labelName.textContent = "Siapa nama Anda?"

document.querySelector(".div-name").appendChild(labelName)

// input name
const inputName = document.createElement("input")

inputName.setAttribute("id", "name")

document.querySelector(".div-name").appendChild(inputName)

// Umur
// div umur
const divUmur = document.createElement("div")

divUmur.setAttribute("class", "div-umur")

document.body.appendChild(divUmur)

// label umur
const labelUmur = document.createElement("label")

labelUmur.setAttribute("for", "umur")

labelUmur.textContent = "Berapa Umur Anda?"

document.querySelector(".div-umur").appendChild(labelUmur)

// input umur
const inputUmur = document.createElement("input")

inputUmur.setAttribute("id", "umur");

document.querySelector(".div-umur").appendChild(inputUmur)