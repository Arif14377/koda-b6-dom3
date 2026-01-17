// membuat tag form di dalam body
const form = document.createElement("form")
document.body.appendChild(form);

// membuat label dan input dalam form

// div name
const divName = document.createElement("div");
divName.setAttribute("class", "div-name")
form.append(divName);


// label name
const labelName = document.createElement("label")
labelName.setAttribute("for", "name")
labelName.textContent = "Siapa nama Anda?"
divName.append(labelName)
const brName = document.createElement("br")
divName.append(brName)

// input name
const inputName = document.createElement("input")
inputName.setAttribute("id", "name")
divName.appendChild(inputName)

// Umur
// div umur
const divUmur = document.createElement("div")
divUmur.setAttribute("class", "div-umur")
form.append(divUmur)

// label umur
const labelUmur = document.createElement("label")
labelUmur.setAttribute("for", "umur")
labelUmur.textContent = "Berapa Umur Anda?"
divUmur.append(labelUmur)
const brUmur = document.createElement("br")
divUmur.append(brUmur)

// input umur
const inputUmur = document.createElement("input")
inputUmur.setAttribute("id", "umur");
divUmur.append(inputUmur)

// Gender
// div gender
const divGender = document.createElement("div")
divGender.setAttribute("class", "div-gender")
form.append(divGender)

// label gender
const labelGender = document.createElement("legend")
labelGender.textContent = "Apa jenis kelamin Anda?"
divGender.append(labelGender)

// div pilihan gender
const choiceGender = document.createElement("div")
choiceGender.setAttribute("class", "choice-gender")
divGender.append(choiceGender)

// input radio gender men
const men = document.createElement("input")

men.setAttribute("type", "radio")
men.setAttribute("name", "gender")
men.setAttribute("id", "men")
men.setAttribute("value", "Laki-laki")

choiceGender.append(men)

// label radio gender men
const labelMen = document.createElement("label")
labelMen.setAttribute("for", "men")
labelMen.textContent = "Laki-laki"
choiceGender.append(labelMen)

// input radio gender woman
const women = document.createElement("input")
women.setAttribute("type", "radio")
women.setAttribute("name", "gender")
women.setAttribute("id", "women")
women.setAttribute("value", "Perempua")

choiceGender.append(women)

// label gender woman
const labelWomen = document.createElement("label")
labelWomen.setAttribute("for", "women")
labelWomen.textContent = "Perempuan"
choiceGender.append(labelWomen)

// Rokok
// div Rokok
const divRokok = document.createElement("div")
divGender.setAttribute("class", "div-rokok")
form.append(divRokok)

// label Rokok
const labelRokok = document.createElement("legend")
labelRokok.textContent = "Apakah anda perokok?"
divRokok.append(labelRokok)

// div pilihan isRokok?
const isRokok = document.createElement("div")
isRokok.setAttribute("class", "is-rokok")
divRokok.append(isRokok)

// input radio Ya Rokok
const rokokTrue = document.createElement("input")
rokokTrue.setAttribute("type", "radio")
rokokTrue.setAttribute("name", "is-rokok")
rokokTrue.setAttribute("id", "ya-rokok")
rokokTrue.setAttribute("value", "Ya")

isRokok.append(rokokTrue)

// label Ya - Rokok
const yaRokok = document.createElement("label")

yaRokok.setAttribute("for", "ya-rokok")
yaRokok.textContent = "Ya"
isRokok.appendChild(yaRokok)

// input radio Tidak Rokok
const rokokFalse = document.createElement("input")
rokokFalse.setAttribute("type", "radio")
rokokFalse.setAttribute("name", "is-rokok")
rokokFalse.setAttribute("id", "tidak-rokok")
rokokFalse.setAttribute("value", "Tidak")

isRokok.append(rokokFalse)

// label Tidak Rokok
const tidakRokok = document.createElement("label")

tidakRokok.setAttribute("for", "tidak-rokok")
tidakRokok.textContent = "Tidak"

isRokok.append(tidakRokok)


// checkbox list rokok
const divListRokok = document.createElement("div")
divListRokok.classList.add("list-rokok")
form.append(divListRokok)

const ifRokok = document.createElement("legend")
ifRokok.textContent = "Jika anda perokok, rokok apa yang anda pernah coba?"
divListRokok.append(ifRokok)

// checkbox gudang garam
const cbGudangGaram = document.createElement("input")
cbGudangGaram.setAttribute("type", "checkbox")
cbGudangGaram.setAttribute("name", "rokok")
cbGudangGaram.setAttribute("id", "gg")
cbGudangGaram.setAttribute("value", "Gudang Garam")
divListRokok.append(cbGudangGaram)

const labelGudangGaram = document.createElement("label")
labelGudangGaram.setAttribute("for", "gg")
labelGudangGaram.textContent = "Gudang Garam"
divListRokok.append(labelGudangGaram)

const brGg = document.createElement("br")
divListRokok.append(brGg)

const cbFilter = document.createElement("input")
cbFilter.setAttribute("type", "checkbox")
cbFilter.setAttribute("name", "rokok")
cbFilter.setAttribute("id", "filter")
cbFilter.setAttribute("value", "Filter")
divListRokok.append(cbFilter)

const labelFilter = document.createElement("label")
labelFilter.setAttribute("for", "filter")
labelFilter.textContent = "Filter"
divListRokok.append(labelFilter)

const brF = document.createElement("br")
divListRokok.append(brF)

// Lucky Strike
const cbLs = document.createElement("input")
cbLs.setAttribute("type", "checkbox")
cbLs.setAttribute("name", "rokok")
cbLs.setAttribute("id", "ls")
cbLs.setAttribute("value", "Lucky Strike")
divListRokok.append(cbLs)

const labelLs = document.createElement("label")
labelLs.setAttribute("for", "ls")
labelLs.textContent = "Lucky Strike"
divListRokok.append(labelLs)

const brL = document.createElement("br")
divListRokok.append(brL)

// Marlboro
const cbMarlboro = document.createElement("input")
cbMarlboro.setAttribute("type", "checkbox")
cbMarlboro.setAttribute("name", "rokok")
cbMarlboro.setAttribute("id", "marlboro")
cbMarlboro.setAttribute("value", "Marlboro")
divListRokok.append(cbMarlboro)

const labelMarlboro = document.createElement("label")
labelMarlboro.setAttribute("for", "marlboro")
labelMarlboro.textContent = "Marlboro"
divListRokok.append(labelMarlboro)

const brM = document.createElement("br")
divListRokok.append(brM)

// Esse
const cbEsse = document.createElement("input")
cbEsse.setAttribute("type", "checkbox")
cbEsse.setAttribute("name", "rokok")
cbEsse.setAttribute("id", "esse")
cbEsse.setAttribute("value", "Esse")
divListRokok.append(cbEsse)

const labelEsse = document.createElement("label")
labelEsse.setAttribute("for", "esse")
labelEsse.textContent = "Esse"
divListRokok.append(labelEsse)

const brE = document.createElement("br")
divListRokok.append(brE)

// div > button*2
const divButton = document.createElement("div")
form.append(divButton)

const btnSubmit = document.createElement("button")
divButton.setAttribute("type", "submit")
btnSubmit.textContent = "Kirim"
divButton.append(btnSubmit)

const btnReset = document.createElement("button")
divButton.setAttribute("type", "reset")
btnReset.textContent = "Reset"
divButton.append(btnReset)

// const rawQs = window.location.search
// const queryString = new URLSearchParams(window.location.search.slice(rawQs.length))