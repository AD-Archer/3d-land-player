// Track the current video index
let currentVideoIndex = 0;

// Function to populate the playlist selector
function populatePlaylistSelector() {
    const playlistSelector = document.getElementById('playlistSelector');
    if (!playlistSelector) return; // Ensure playlistSelector exists
    playlistSelector.innerHTML = ''; // Clear existing options

    videoData.forEach((video, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = video.name;
        playlistSelector.appendChild(option);
    });
}

// Function to load video based on currentVideoIndex
function loadVideo() {
    if (!videoData || videoData.length === 0) return; // Ensure videoData exists and has content
    const video = videoData[currentVideoIndex];
    const youtubeVideo = document.getElementById('youtubeVideo');
    const videoNameDisplay = document.getElementById('videoName');
    const videoDescriptionDisplay = document.getElementById('videoDescription');

    if (youtubeVideo && videoNameDisplay && videoDescriptionDisplay) {
        youtubeVideo.src = video.url;
        videoNameDisplay.textContent = `Current Video: ${video.name}`;
        videoDescriptionDisplay.innerHTML = `
            <strong>Description:</strong> ${video.description} <br>
            <strong>Fun Fact:</strong> ${video.fact}
        `;

        // Update button text based on the current video index
        const prevButton = document.getElementById('prevButton');
        const nextButton = document.getElementById('nextButton');

        if (prevButton) {
            prevButton.textContent = currentVideoIndex > 0 ? `Previous Video: ${videoData[currentVideoIndex - 1].name}` : "Previous Video";
        }
        if (nextButton) {
            nextButton.textContent = currentVideoIndex < videoData.length - 1 ? `Next Video: ${videoData[currentVideoIndex + 1].name}` : "Next Video";
        }

        // Save the current video index to local storage
        localStorage.setItem('currentVideoIndex', currentVideoIndex);
    }
}

// Function to save user email to local storage
function saveUserData() {
    const email = document.getElementById('email')?.value;
    if (email) localStorage.setItem('userEmail', email);
}

// Function to load user email from local storage
function loadUserData() {
    const email = localStorage.getItem('userEmail');
    if (email) {
        const emailField = document.getElementById('email');
        if (emailField) {
            emailField.value = email;
        }
    }
}

// Function to change the theme and store the preference
function changeTheme(theme) {
    const themes = ['dark-theme', 'light-theme', 'mint-green-theme', 'icy-theme', 'fire-theme', 'halloween-theme', 'purple-theme'];
    document.body.classList.remove(...themes); // Remove all theme classes

    if (themes.includes(`${theme}-theme`)) {
        document.body.classList.add(`${theme}-theme`); // Add the selected theme class
    }

    // Save the theme preference in local storage
    localStorage.setItem('theme', theme);
}

// Function to load the theme from local storage
function loadTheme() {
    const theme = localStorage.getItem('theme') || 'default'; // Default theme if none found
    changeTheme(theme); // Apply the saved theme
}

// Function to get random playlists
function getRandomPlaylists(numPlaylists) {
    return videoData.length ? [...videoData].sort(() => 0.5 - Math.random()).slice(0, numPlaylists) : [];
}

// Function to display random playlists
function displayRandomPlaylists() {
    const playlistsContainer = document.getElementById('randomPlaylists');
    if (!playlistsContainer) return;

    playlistsContainer.innerHTML = ''; // Clear existing playlists

    const randomPlaylists = getRandomPlaylists(4);
    randomPlaylists.forEach((playlist) => {
        const playlistItem = document.createElement('div');
        playlistItem.className = 'playlist-item';
        playlistItem.innerHTML = `
            <h3>${playlist.name}</h3>
            <p>${playlist.description}</p>
            <button class="view-playlist-button" data-url="${playlist.url}">View Playlist</button>
        `;
        playlistsContainer.appendChild(playlistItem);
    });

    document.querySelectorAll('.view-playlist-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const playlistUrl = event.target.getAttribute('data-url');
            const youtubeVideo = document.getElementById('youtubeVideo');
            if (youtubeVideo) youtubeVideo.src = playlistUrl;
        });
    });
}

// Event listener for next and previous buttons
document.getElementById('nextButton')?.addEventListener('click', function() {
    currentVideoIndex = (currentVideoIndex + 1) % videoData.length; // Loop back to the beginning
    loadVideo();
});

document.getElementById('prevButton')?.addEventListener('click', function() {
    currentVideoIndex = (currentVideoIndex - 1 + videoData.length) % videoData.length; // Loop to the end
    loadVideo();
});

// Initialize the page with the playlist and the first video
window.onload = () => {
    populatePlaylistSelector();

    // Load the last watched video index from local storage
    const savedVideoIndex = localStorage.getItem('currentVideoIndex');
    if (savedVideoIndex !== null) {
        currentVideoIndex = parseInt(savedVideoIndex, 10);
    }

    loadVideo(); // Display the loaded video
    displayRandomPlaylists(); // Display random playlists
    loadUserData(); // Load user data
    loadTheme(); // Load theme

    // Event listener for user form submission
    const submitButton = document.getElementById('submit');
    if (submitButton) {
        submitButton.addEventListener('click', function() {
            saveUserData();
            document.getElementById('user-form').style.display = 'none'; // Hide the form after submission
        });
    }

    // Event listener for theme buttons
    const themeButtons = document.querySelectorAll('#theme-switcher button');
    themeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            changeTheme(event.target.textContent.toLowerCase());
        });
    });
};

// Feedback form submission handling
const feedbackForm = document.getElementById('feedbackForm');
if (feedbackForm) {
    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const feedbackText = document.getElementById('feedback').value;
        const feedbackName = document.getElementById('feedbackName').value;
        const feedbackEmail = document.getElementById('feedbackEmail').value;

        // Save feedback to local storage
        localStorage.setItem('userFeedback', JSON.stringify({ feedbackText, feedbackName, feedbackEmail }));

        // Display feedback response
        document.getElementById('feedbackResponse').textContent = `Thank you for your feedback, ${feedbackName || 'Guest'}!`;

        // Reset the feedback form
        feedbackForm.reset();
    });
}

function toggleFeedbackForm() {
    const feedbackFormSection = document.getElementById('feedbackFormSection');
    feedbackFormSection.style.display = feedbackFormSection.style.display === 'none' ? 'block' : 'none';
}
