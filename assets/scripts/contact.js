// Function for closing the thanks popup
const thanksPopup = document.getElementById("thanksPopup");

function closeThanksPopup() {
    thanksPopup.classList.add("hidden");
}

function sendForm() {
    const submitBtn = document.getElementById("submit");

    // Function to update the button color based on input
    function updateButtonColor() {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const validmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

        const allFieldsFilled =
            name !== "" && email !== "" && message !== "" && validmail.test(email);

        if (allFieldsFilled) {
            submitBtn.style.backgroundColor = "blue";
            submitBtn.style.color = "white";
        } else {
            submitBtn.style.backgroundColor = ""; // Reset to default color
            submitBtn.style.color = ""; // Reset to default color
        }
    }

    // Add input and change event listeners to update button color
    const inputFields = [
        document.getElementById("name"),
        document.getElementById("email"),
        document.getElementById("message"),
    ];

    inputFields.forEach((inputField) => {
        inputField.addEventListener("input", updateButtonColor);
    });

    const checkboxes = [
        document.getElementById("automotive"),
        document.getElementById("oem"),
        document.getElementById("videotelematics"),
        document.getElementById("telematics"),
    ];

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", updateButtonColor);
    });

    // Form submission logic remains the same
    document
        .getElementById("contact-form")
        .addEventListener("submit", function (event) {
            event.preventDefault();

            // Validate inputs
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            const validmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

            if (!name || !email || !message || !validmail.test(email)) {
                alert("Please fill in all required fields");
                return;
            }

            // Continue with the form submission logic
            submitBtn.value = "Sending...";

            const userId = "rXtjcUzxhbrt-xBzg";
            const serviceID = "service_mz8osdt";
            const templateID = "template_ii28jzv";

            emailjs.init(userId);

            emailjs.sendForm(serviceID, templateID, this).then(
                () => {
                    submitBtn.value = "Email Sent";
                    document.getElementById("thanksPopup").classList.remove("hidden");
                    document.getElementById("thanksPopup").classList.add("active");

                    // Clear all input fields
                    document.getElementById("contact-form").reset();
                    // Reset button color
                    submitBtn.style.backgroundColor = "";
                    submitBtn.style.color = "";
                },
                (err) => {
                    submitBtn.style.backgroundColor = "red";
                    submitBtn.value = "Error!";
                    alert(JSON.stringify(err));
                }
            );
        });
}