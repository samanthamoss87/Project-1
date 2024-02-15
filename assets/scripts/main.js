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



// Audio play pause functions
function toggleAudio(audioId) {
    let audio = document.getElementById(audioId)

    if (audio.paused) {
        audio.play()
    } else {
        audio.pause()
        audio.currentTime = 0
    }
}


// Functions for back to top button
window.onscroll = function() {
    scrollFunction()
}

function scrollFunction() {
    let backToTopBtn = document.getElementById("backToTopBtn")

    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        backToTopBtn.style.opacity = 1
    } else {
        backToTopBtn.style.opacity = 0
    }
}

function scrollToTop() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}