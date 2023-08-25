const check = document.getElementById("check");
const label = document.getElementById("label-icon");
const input = document.getElementById("password");

check.addEventListener("change", () => {
    label.classList.toggle("fa-eye-slash");
    label.classList.toggle("fa-eye");

    if(label.classList.contains("fa-eye-slash")){
        input.type = "password";
    } else {
        input.type = "text";
    };
})