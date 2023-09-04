const planCard1 = document.getElementById("plan-1");
const planCard2 = document.getElementById("plan-2");

const planCheck1 = document.getElementById("plan1");
const planCheck2 = document.getElementById("plan2");


planCheck1.addEventListener("click", ()=>{
    planCard1.classList.toggle("checked")
})

