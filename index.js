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
function addParticipant(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const state = document.getElementById('state').value;

    const participantInfo = document.createElement('p');
    participantInfo.textContent = `🎟️ ${name} from ${state} has RSVP'd.`;

    document.querySelector('.rsvp-participants').appendChild(participantInfo);
    document.getElementById('rsvp-form').reset();
}

const validateForm = () => {
    event.preventDefault(); 
    let containsErrors = false; 
    const rsvpInputs = document.getElementById("rsvp-form").elements;
    
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

    if (containsErrors === false) {
        addParticipant();
    }
}

rsvpButton.addEventListener('click', validateForm);
/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/
