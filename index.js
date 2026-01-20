const saveBtnEl = document.getElementById("inputBtn");
const inputTxtEl = document.getElementById("inputTxt");
let myLeads = JSON.parse(localStorage.getItem("myLeads")) ?? [];
const leadsListEl = document.getElementById("leadsList");
const clearBtnEl = document.getElementById("clearBtn");

saveBtnEl.addEventListener("click", function () {
  myLeads.push(inputTxtEl.value);
  render(myLeads);
  inputTxtEl.value = "";

  localStorage.setItem("myLeads", JSON.stringify(myLeads));
});

function render(leads) {
  const liEl = document.createElement("li");
  leadsListEl.append(liEl);
  const anchorEl = document.createElement("a");
  lead = leads.at(-1);
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
function renderList(leads) {
  if (leads.length > 0) {
    for (const lead of leads) {
      const liEl = document.createElement("li");
      leadsListEl.append(liEl);
      const anchorEl = document.createElement("a");
      anchorEl.href = lead;
      anchorEl.target = "_blank";
      anchorEl.textContent = lead;
      liEl.append(anchorEl);
    }
  } else leadsListEl.innerHTML = "";
}

renderList(myLeads);

clearBtnEl.addEventListener("dblclick", () => {
  localStorage.clear();
  myLeads = [];
  renderList(myLeads);
});
