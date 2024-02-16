// Codes for cookie popup
const rejectBtn = document.getElementById("rejectBtn")
const acceptBtn = document.getElementById("acceptBtn")
const cookiePopup = document.getElementById("cookie")

window.onload = function () {
    cookiePopup.style.display = "block"
}

// when user clicks cookie popup will be removed directly.
rejectBtn.addEventListener("click", () => {
    cookiePopup.style.display = "none";
})

// when user clicks the accept btn remove the cookie popup and show the alert.
acceptBtn.addEventListener("click", () => {
    cookiePopup.style.display = "none";
    alert("You accepted the Cookie Policy")
})