const notificationButton = document.getElementById("notifications");
const notificationWindow = document.getElementById("window");

notificationButton.addEventListener('click',()=>{
    notificationWindow.classList.toggle("active");
});