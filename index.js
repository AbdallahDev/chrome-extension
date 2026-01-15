const saveBtnEl = document.getElementById("inputBtn");
const inputTxtEl = document.getElementById("inputTxt");
const myLeads = [];
const leadsDivEl = document.getElementById("leadsDiv");

saveBtnEl.addEventListener("click", function () {
  myLeads.push(inputTxtEl.value);
  outputLead();
});

function outputLead() {
  const anchorEl = document.createElement("a");
  lead = myLeads.at(-1);
  anchorEl.href = lead;
  const anchorTxt = document.createTextNode(lead);
  anchorEl.appendChild(anchorTxt);
  leadsDivEl.appendChild(anchorEl);
  const breakEl = document.createElement("br");
  anchorEl.target = "_blank";
  leadsDivEl.appendChild(breakEl);
}

//box div code
const boxEl = document.getElementById("box");
boxEl.addEventListener("click", function () {
  console.log("I want to open the box!");
});
