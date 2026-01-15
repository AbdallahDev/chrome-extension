const saveBtnEl = document.getElementById("inputBtn");
const inputTxtEl = document.getElementById("inputTxt");

saveBtnEl.addEventListener("click", function () {
  console.log(inputTxtEl.value);
});

//box div code
const boxEl = document.getElementById('box')
boxEl.addEventListener('click',function(){
    console.log("I want to open the box!")
})