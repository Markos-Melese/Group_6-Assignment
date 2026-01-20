// Get references to the HTML elements
const courseTitle = document.getElementById('courseTitle');
const status = document.getElementById('status');
const loginButton = document.getElementById('loginButton');
const logoutButton = document.getElementById('logoutButton');
const changeCourseButton = document.getElementById('coursechange');
const ageElement = document.getElementById('age'); // Added reference to age element

// Array of course titles
const courses = [
    'Web Design and Development',
    'Artificial Intelligence',
    'Advanced JavaScript'
];

// Initialize current course index
let currentCourseIndex = 0;
// Function to set status to online
function setOnline() {
    status.textContent = 'Online';
    status.className = 'online'; // Set class to online
}

// Function to set status to offline
function setOffline() {
    status.textContent = 'Offline';
    status.className = 'offline'; // Set class to offline
}

// Event listener for login button
loginButton.addEventListener('click', function() {
    setOnline(); // Set status to online when logging in
});

// Event listener for logout button
logoutButton.addEventListener('click', function() {
    setOffline(); // Set status to offline when logging out
});

// Event listener for change course button
changeCourseButton.addEventListener('click', function() {
    courseTitle.textContent = 'Course: Web Design and Development'; // previouscourse title
});

// Event listener for change course button
changeCourseButton.addEventListener('click', function() {
    // Update the course title with the current course
    courseTitle.textContent = 'Course: ' + courses[currentCourseIndex];
    
    // Increment the current course index, cycling back to 0 if necessary
    currentCourseIndex = (currentCourseIndex + 1) % courses.length;
});

// Initial setup (optional)
setOffline(); // Set initial availability to offline
courseTitle.textContent = 'Course: ' + courses[currentCourseIndex]; // Set initial course title
// Initial setup (optional)
setOffline(); // Set initial status to offline
