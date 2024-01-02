const contactForm = document.querySelector('#contactForm');
const name = document.getElementById('name');
const companyName = document.getElementById('companyName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const countryCode = document.getElementById('countryCode');
const message = document.getElementById('message');

function sendEmail() {
    const bodyMsg = `<div style="border-radius:10px;overflow:hidden;margin:10px;">
   <div style="text-align: center;background-color: #d9f0fc;padding: 13px 0;"><img src="https://bondableaccountancyservices.netlify.app/images/logo.png" style="max-width: 150px;"></div>
<h3 style="margin: 10px 0;">User Details:</h3><hr>
    <b>Name:</b> ${name.value}<br><hr> <b>Company Name:</b> ${companyName.value}<br><hr> <b>Email:</b> ${email.value}<br><hr> <b>Phone:</b> ${countryCode.value}-${phone.value}<br><hr> <b>Message:</b> ${message.value}<br><hr></div>`;

    Email.send({
        SecureToken: "177c6b29-be10-45d2-bc6e-2a4d2cdc0bd1",
        To: 'info.bondableaccserv@gmail.com',
        From: 'info.bondableaccserv@gmail.com',
        Subject: "New Inquiry Form",
        Body: bodyMsg
    }).then(
        message => {
            if (message == "OK") {
                swal("Successful", "We will contact you soon!", "success");
            }
            else {
                swal("Error", "Something Wrong!", "error");
            }
        }
    );
}

// Form Validation
function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if (items[1].value != "") {
            emailCheck();
        }

        items[1].addEventListener("keyup", () => {
            emailCheck();
        });

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

// Email Check Validation
function emailCheck() {
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");
    }
    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }

}


// Form Submit
contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if (!name.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error")) {
        sendEmail();

        contactForm.reset();
        return false;
    }
})