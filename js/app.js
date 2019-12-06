// Select DOM elements
let runtimeDisplay = document.getElementById('runtimeDisplay');
let trackCount = document.getElementById('trackCount');
let trackList = document.getElementById('trackList');

// Create an array of tracks
let tracks = Array.from(trackList.children);

// Calculate minutes
let minutes = tracks
  .map( minute => parseInt(minute.firstElementChild.innerHTML))
  .reduce((sum, minute) => sum += minute, 0);

// Calculate seconds
let seconds = tracks
  .map( seconds => parseInt(seconds.lastElementChild.innerHTML))
  .reduce((sum, second) => sum += second / 60, 0)

// Calculate total time
let totalTime = minutes + seconds;

// Display track count
trackCount.textContent = tracks.length;

// Display total runtime
totalRuntime = totalTime.toFixed(2)
runtimeDisplay.textContent = totalRuntime.replace('.', ':');

// Form Validation
const form = document.querySelector('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message')

form.addEventListener('submit', (e) => {
  // validate name
  if (name.value === ""){
    e.preventDefault();
    name.placeholder = "Name is required";
    name.className += ' error';
  }else{
    name.className = 'form-control';
  }

  // validate message
  if (message.value === ""){
    e.preventDefault();
    message.placeholder = "Message is required";
    message.className += ' error';
  }else{
    message.className = 'form-control';
  }

  // validate email
  if (email.value === ""){
    e.preventDefault();
    email.placeholder = "Email is required";
    email.className += ' error';
  }else{
    name.className = 'form-control';
  }

  // validate email format
  let aPosition = email.value.indexOf('@');
  let dotPosition = email.value.lastIndexOf('.');
  // make sure there is a character before the @
  if(aPosition < 1 || dotPosition - aPosition < 2){
    e.preventDefault();
    email.className += ' error';
    email.value = "";
    email.placeholder = 'Please enter a valid email.';
  }else{
    email.className = 'form-control';
  }

}); // end form eventListener
