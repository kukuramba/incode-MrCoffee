const form = document.getElementById('form');
const firstName = document.getElementById('name');
const surName = document.getElementById('surname');
const phoneNumber = document.getElementById('phone-number');
const emailAddress = document.getElementById('email-address');
const message = document.getElementById('message');
const buttonForm = document.getElementById('button-form');

const modal = document.getElementById("modal-container");
const buttonModal = document.getElementById("button-modal");

form.addEventListener('submit', (e) => {

    e.preventDefault();

    checkInputs();
});

function checkInputs() {

    const firstNameValue = firstName.value.trim();
    const surNameValue = surName.value.trim();
    const phoneNumberValue = phoneNumber.value.trim();
    const emailAddressValue = emailAddress.value.trim();
    const messageValue = message.value.trim();

    if ( (firstNameValue !== "") & (surNameValue !== "") & (emailAddressValue !== "") & (messageValue !== "") & (isEmail(emailAddressValue)) ) {
           
        console.log(firstNameValue);
        console.log(surNameValue);
        console.log(phoneNumberValue);
        console.log(emailAddressValue);
        console.log(messageValue);

        modal.style.display = "block";
        } 
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// When the user clicks on button "fermer", close the modal
buttonModal.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }