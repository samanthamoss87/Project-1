// Codes for cookie popup
const rejectBtn = document.getElementById("rejectBtn")
const acceptBtn = document.getElementById("acceptBtn")
const cookiePopup = document.getElementById("cookie")

// Function to check if the user has accepted the cookie
function hasAcceptedCookiePolicy() {
    return localStorage.getItem('cookiePolicyAccepted') === 'true';
}

// Function to hide the cookie popup and set a flag in local storage
function hideCookiePopup() {
    cookiePopup.style.display = 'none';
    localStorage.setItem('cookiePolicyAccepted', 'true');
}

// Show the cookie popup when the page loads if it hasn't been accepted before
window.onload = function () {
    if (!hasAcceptedCookiePolicy()) {
        cookiePopup.style.display = 'block';
    }
};

// Event listener for the reject button
rejectBtn.addEventListener("click", () => {
    hideCookiePopup();
});

// Event listener for the accept button
acceptBtn.addEventListener("click", () => {
    hideCookiePopup();
    alert("You have accepted the Cookie Policy");
});


