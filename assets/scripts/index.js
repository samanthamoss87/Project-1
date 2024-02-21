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


// Change logo when browser is small
function updateImgSrc() {
    const logo = document.getElementById("logo")
    let windowWidth = window.innerWidth

    if (windowWidth<1000) {
        logo.src = './assets/img/logo/RSLogo.png'
    } else {
        logo.src = './assets/img/logo/RSVisionLogo.png'
    }
}

updateImgSrc()

window.addEventListener('resize', updateImgSrc)