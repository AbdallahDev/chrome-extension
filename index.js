const saveBtnEl = document.getElementById("inputBtn");
const inputTxtEl = document.getElementById("inputTxt");
let myLeads = [];
const leadsListEl = document.getElementById("leadsList");
const clearBtnEl = document.getElementById("clearBtn");

leadsListEl.style.listStyleType = "none";
myLeads = JSON.parse(localStorage.getItem("myLeads")) || [];

saveBtnEl.addEventListener("click", function () {
  myLeads.push(inputTxtEl.value);
  outputLead();
  inputTxtEl.value = "";

  localStorage.setItem("myLeads", JSON.stringify(myLeads));
});

function outputLead() {
  const liEl = document.createElement("li");
  leadsListEl.append(liEl);
  const anchorEl = document.createElement("a");
  lead = myLeads.at(-1);
  anchorEl.href = lead;
  anchorEl.target = "_blank";
  anchorEl.textContent = lead;
  liEl.append(anchorEl);
}

//box div code
const boxEl = document.getElementById("box");
boxEl.addEventListener("click", function () {
  console.log("I want to open the box!");
});

const containerEl = document.getElementById("container");
containerEl.innerHTML = `<button id="buyBtn" class="styling">Buy</button>`;

const buyBtnEl = document.getElementById("buyBtn");
buyBtnEl.addEventListener("click", function () {
  containerEl.innerHTML += "<p>Thank you for buying!</p>";
});

//will rebuilds the leads list after each refresh
function rebuildLeadsList() {
  //   leads = JSON.parse(localStorage.getItem("myLeads")) || [];
  if (myLeads.length > 0) {
    for (const lead of myLeads) {
      const liEl = document.createElement("li");
      leadsListEl.append(liEl);
      const anchorEl = document.createElement("a");
      anchorEl.href = lead;
      anchorEl.target = "_blank";
      anchorEl.textContent = lead;
      liEl.append(anchorEl);
    }
  }
}

rebuildLeadsList();

clearBtnEl.addEventListener("click", () => {
  localStorage.clear();
  leadsListEl.innerHTML = "";
});

let testList = `["1","2","3"]`;

console.log(typeof testList)

testList = JSON.parse(testList)

console.log(typeof testList)
testList.push("4")

console.log(testList)

testList = JSON.stringify(testList)

console.log(typeof testList, testList)