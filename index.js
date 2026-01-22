const saveBtnEl = document.getElementById("inputBtn");
const inputTxtEl = document.getElementById("inputTxt");
let myLeads = JSON.parse(localStorage.getItem("myLeads")) ?? [];
const leadsListEl = document.getElementById("leadsList");
const clearBtnEl = document.getElementById("clearBtn");
const saveTabBtnEl = document.getElementById("saveTabBtn");

const tabs = [{ url: "https://github.com/AbdallahDev" }];

saveBtnEl.addEventListener("click", function () {
  addNewValue(myLeads, "myLeads", inputTxtEl.value);
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

const nameEl = document.getElementById("name");
const greetTxtEl = document.getElementById("greetTxt");

function greeting(greetTxt, name) {
  const msg = `${greetTxt}, ${name}`;
  console.log(msg);
}

const showMsgEl = document.getElementById("showMsg");
showMsgEl.addEventListener("click", () => {
  greeting(greetTxtEl.value, nameEl.value);
});

function getFirst(arry, indx) {
  return arry[indx];
}

saveTabBtnEl.addEventListener("click", () => {
  // async function getCurrentTabUrl() {
  //   // Query for the active tab in the current window
  //   let queryOptions = { active: true, currentWindow: true };
  //   // The tabs array will contain one Tab object
  //   let [tab] = await chrome.tabs.query(queryOptions);
  //   return tab.url;
  // }

  // // Example usage
  // getCurrentTabUrl().then((url) => {
  //   addNewValue(myLeads, "myLeads", url);
  // });
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    addNewValue(myLeads, "myLeads", tabs[0].url);
  });
});

function addNewValue(valuesArray, arrayName, value) {
  valuesArray.push(value);
  render(valuesArray);

  localStorage.setItem(arrayName, JSON.stringify(valuesArray));

  inputTxtEl.value = "";
}

async function getCurrentTabUrl() {
  // Query for the active tab in the current window
  let queryOptions = { active: true, currentWindow: true };
  // The tabs array will contain one Tab object
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab.url;
}

// Example usage
getCurrentTabUrl().then((url) => {
  console.log("Current Tab URL: " + url);
});
