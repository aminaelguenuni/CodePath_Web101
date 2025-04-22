/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById("theme-button");
// Step 2: Write the callback function
const toggleDarkMode = () => {
    // Write your code here
    document.body.classList.toggle("dark-mode");
    // This section will run whenever the button is clicked
}

themeButton.addEventListener("click", toggleDarkMode);



/*** Form Handling [PLACEHOLDER] [ADDED IN UNIT 6] ***/
// Step 1: Query for the submit button
const rsvpButton = document.getElementById('rsvp-button');

// Step 2: Create the addParticipant function
const addParticipant = (person) => { 

    const participantInfo = document.createElement('p');
    participantInfo.textContent = `🎟️ ${person.name} from ${person.state} has RSVP'd.`;

    document.querySelector('.rsvp-participants').appendChild(participantInfo);
    document.getElementById('rsvp-form').reset();
}

const validateForm = () => {
    let containsErrors = false; 
    let rsvpInputs = document.getElementById("rsvp-form").elements;

    let person = {
        name: rsvpInputs[0].value,
        email: rsvpInputs[1].value,
        state: rsvpInputs[2].value 
    }
    
    // Loop through all inputs to validate them
    for (let i = 0; i < rsvpInputs.length; i++) {
        const input = rsvpInputs[i];
        
        // Skip the submit button
        if (input.type === 'submit') continue;
        
        // Check if input is too short
        if (input.value.length < 2) {
            containsErrors = true;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    }

    if (!containsErrors) {
        addParticipant(person); // Make sure to pass the person object
        toggleModal(person); 
    }
}

rsvpButton.addEventListener('click', validateForm);

/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/
const toggleModal = (person) => {
    let modal = document.getElementById('success-modal');
    let modalText = document.getElementById('modal-text');
    
    // Show modal
    modal.style.display = 'flex';
    
    // Update modal text with personalized message
    modalText.textContent = `🌟 Thanks for RSVPing, ${person.name}! 🌟 We're excited to see you at the event! ✨`;
    const intervalId = setInterval(animateImage, 500);
    // Set modal timeout to 5 seconds
    setTimeout(() => {
        modal.style.display = 'none';
        clearInterval(intervalId);
        // Reset image rotation when hiding
        modalImage.style.transform = 'rotate(0deg)';
    }, 5000);
}

//image part

// Animation variables (place these at the top of your file, outside any functions)
let rotateFactor = 0;
const modalImage = document.querySelector('#success-modal img');

// Animation function
const animateImage = () => {

    rotateFactor = rotateFactor === 0 ? -10 : 0;
    
    modalImage.style.transform = `rotate(${rotateFactor}deg)`;
    modalImage.style.transition = 'transform 0.3s ease-in-out';
}
