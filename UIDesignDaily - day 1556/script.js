const input = document.getElementById("bell");
const icon = document.getElementById("toggle");

input.addEventListener('change', ()=>{
    icon.classList.toggle("fa-bell");
    icon.classList.toggle("fa-bell-slash");
})