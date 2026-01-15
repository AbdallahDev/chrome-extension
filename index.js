const saveBtnEl = document.getElementById("inputBtn");
const inputTxtEl = document.getElementById("inputTxt");
const myLeads = [];
const leadsListEl = document.getElementById("leadsList");
leadsListEl.style.listStyleType = "none";

saveBtnEl.addEventListener("click", function () {
  myLeads.push(inputTxtEl.value);
  outputLead();
  //   inputTxtEl.value = ""
});

function outputLead() {
  const liEl = document.createElement("li");
  leadsListEl.append(liEl);
  const anchorEl = document.createElement("a");
  lead = myLeads.at(-1);
  anchorEl.href = lead;
  anchorEl.target = "_blank";
  anchorEl.textContent = lead
//   const anchorTxt = document.createTextNode(lead);
//   anchorEl.appendChild(anchorTxt);
//   liEl.appendChild(anchorEl);
  liEl.append(anchorEl);
}

//box div code
const boxEl = document.getElementById("box");
boxEl.addEventListener("click", function () {
  console.log("I want to open the box!");
});

const containerEl = document.getElementById("container");
containerEl.innerHTML =
  '<button id="buyBtn" class="styling">' + "Buy" + "</button>";

const buyBtnEl = document.getElementById("buyBtn");
buyBtnEl.addEventListener("click", function () {
  containerEl.innerHTML += "<p>Thank you for buying!</p>";
});
