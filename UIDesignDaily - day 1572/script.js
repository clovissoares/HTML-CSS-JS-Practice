const btnPlus = document.getElementById("plus");
const btnMinus = document.getElementById("minus");
const inputQuantity = document.getElementById("quantity");


btnPlus.addEventListener("click", () => {
    if(parseInt(inputQuantity.value) >= 0){
        inputQuantity.value = parseInt(inputQuantity.value) + 1;
    } else {
        inputQuantity.value = 0;
    } 
});

btnMinus.addEventListener("click", () => {
    if(parseInt(inputQuantity.value) > 0){
        inputQuantity.value = parseInt(inputQuantity.value) - 1;
    } else {
        inputQuantity.value = 0;
    } 
});