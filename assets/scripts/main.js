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
        backToTopBtn.style.visibility = "visible"
    } else {
        backToTopBtn.style.visibility = "hidden"
    }
}

function scrollToTop() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}


// Logic for the languages
const languageBtn = document.getElementById("changeLangBtn")
const languagePopup = document.getElementById("langOptions")
let language = document.getElementById("language")


let currentLanguage = "EN"

languageBtn.addEventListener('click', function(){
    languagePopup.classList.toggle("active")
})

function changeLang(lang) {
    currentLanguage = lang
    language.innerText = currentLanguage.toUpperCase()
    if (languagePopup.classList.contains('active')){
        languagePopup.classList.remove('active')
    }
}

// Nav functions
const hamBtn = document.getElementById("hamBtn")
const mobileMenu = document.getElementById("mobileMenu")
const openBtn = document.getElementById("open")
const closeBtn = document.getElementById("close")

hamBtn.addEventListener('click', function() {
    const mobileMenu = document.getElementById("mobileMenu")

    mobileMenu.classList.toggle("active")

    openBtn.classList.toggle("hide-icon")
    closeBtn.classList.toggle("hide-icon")
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