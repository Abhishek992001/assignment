// Function to hide all sections
function hideAllSections() {
    document.getElementById('Home').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.getElementById('Project').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
}

// Function to show the selected section
function showSection(sectionId) {
    hideAllSections(); // Hide all sections first
    document.getElementById(sectionId).style.display = 'block'; // Show the selected section
}

// Add event listeners to the buttons
document.getElementById('home-btn').addEventListener('click', function () {
    showSection('Home');
});

document.getElementById('about-btn').addEventListener('click', function () {
    showSection('about');
});

document.getElementById('project-btn').addEventListener('click', function () {
    showSection('Project');
});

document.getElementById('contact-btn').addEventListener('click', function () {
    showSection('contact');
});
