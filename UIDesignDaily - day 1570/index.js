const btnFollow = document.getElementById("follow");
const iconFollow = document.getElementById("follow-icon");

btnFollow.addEventListener("click", ()=> {
    iconFollow.classList.toggle("fa-user-plus");
    iconFollow.classList.toggle("fa-user-minus");
    btnFollow.classList.toggle("message");
    btnFollow.classList.toggle("follow");

    if(btnFollow.textContent === "Follow"){
        btnFollow.innerHTML = iconFollow.outerHTML + "Unfollow";
    } else {
        btnFollow.innerHTML = iconFollow.outerHTML + "Follow";
    }
});