function sendForm() {
    let contactForm = document.getElementById("contact-form");
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const automotive = document.getElementById("automotive").value;
    const oem = document.getElementById("oem").value;
    const videoTel = document.getElementById("videotelematics").value;
    const telematics = document.getElementById("telematics").value;
    const message = document.getElementById("message").value;
    const submitBtn = document.getElementById("submit");

    const userId = "rXtjcUzxhbrt-xBzg";
    const serviceID = "service_mz8osdt";
    const templateID = "template_ii28jzv";

    emailjs.init(userId);

    var validmail = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Validate inputs
        if (
            !name ||
            !email ||
            !automotive ||
            !oem ||
            !videoTel ||
            !telematics ||
            !message
        ) {
            alert("Please fill in all fields");
        }

        // Additional email validation
        if (email.match(!validmail)) {
            alert("Please enter a valid email address");
        }
        submitBtn.style.backgroundColor = "blue";
        submitBtn.style.color = "white";
        submitBtn.value = "Sending...";

        emailjs.sendForm(serviceID, templateID, this).then(
            () => {
                submitBtn.value = "Email Sent";
                alert("Sent!");

                // Clear all input fields
                contactForm.reset()
            },
            (err) => {
                submitBtn.style.backgroundColor = "red";
                submitBtn.value = "Error!";
                alert(JSON.stringify(err));
            }
        );
    });
}