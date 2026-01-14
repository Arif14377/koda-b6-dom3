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

// Gender
// div gender
const divGender = document.createElement("div")

divGender.setAttribute("class", "div-gender")

document.body.appendChild(divGender)

// label gender
const labelGender = document.createElement("legend")

labelGender.textContent = "Apa jenis kelamin Anda?"

document.querySelector(".div-gender").appendChild(labelGender)

// div pilihan gender
const choiceGender = document.createElement("div")
choiceGender.setAttribute("class", "choice-gender")
document.querySelector(".div-gender").appendChild(choiceGender)

// input radio gender men
const men = document.createElement("input")

men.setAttribute("type", "radio")
men.setAttribute("name", "gender")
men.setAttribute("id", "men")
men.setAttribute("value", "Laki-laki")

document.querySelector(".choice-gender").appendChild(men)

// label gender men
const labelMen = document.createElement("label")

labelMen.setAttribute("for", "men")
labelMen.textContent = "Laki-laki"

document.querySelector(".choice-gender").appendChild(labelMen)

// input radio gender woman
const women = document.createElement("input")
women.setAttribute("type", "radio")
women.setAttribute("name", "gender")
women.setAttribute("id", "women")
women.setAttribute("value", "Perempua")

document.querySelector(".choice-gender").appendChild(women)

// label gender woman
const labelWomen = document.createElement("label")

labelWomen.setAttribute("for", "women")
labelWomen.textContent = "Perempuan"

document.querySelector(".choice-gender").appendChild(labelWomen)

// Rokok
// div gender
const divRokok = document.createElement("div")

divGender.setAttribute("class", "div-rokok")

document.body.appendChild(divRokok)

// label gender
const labelRokok = document.createElement("legend")

labelRokok.textContent = "Apakah anda perokok?"

document.querySelector(".div-rokok").appendChild(labelRokok)

// div pilihan gender
const isRokok = document.createElement("div")
isRokok.setAttribute("class", "choice-rokok")
document.querySelector(".div-rokok").appendChild(isRokok)

// input radio Ya Rokok
const rokokTrue = document.createElement("input")

rokokTrue.setAttribute("type", "radio")
rokokTrue.setAttribute("name", "is-rokok")
rokokTrue.setAttribute("id", "ya-rokok")
rokokTrue.setAttribute("value", "Ya")

document.querySelector(".choice-gender").appendChild(rokokTrue)

// label Ya - Rokok
const yaRokok = document.createElement("label")

yaRokok.setAttribute("for", "ya-rokok")
yaRokok.textContent = "Ya"

document.querySelector(".choice-rokok").appendChild(yaRokok)

// input radio Tidak Rokok
const rokokFalse = document.createElement("input")
rokokFalse.setAttribute("type", "radio")
rokokFalse.setAttribute("name", "is-rokok")
rokokFalse.setAttribute("id", "tidak-rokok")
rokokFalse.setAttribute("value", "Tidak")

document.querySelector(".choice-rokok").appendChild(rokokFalse)

// label Tidak Rokok
const tidakRokok = document.createElement("label")

tidakRokok.setAttribute("for", "tidak-rokok")
tidakRokok.textContent = "Tidak"

document.querySelector(".choice-rokok").appendChild(tidakRokok)