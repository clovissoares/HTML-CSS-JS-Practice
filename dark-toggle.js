const toggle = document.getElementById("toggle");
const profile = document.getElementById("profile-tag");
const theme = window.localStorage.getItem("theme");

if (theme === "dark") {
    document.body.classList.add("dark");
    toggle.checked = true;
};

toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    if (theme === "dark") {
        window.localStorage.setItem("theme", "light");
    } else window.localStorage.setItem("theme", "dark");
});
