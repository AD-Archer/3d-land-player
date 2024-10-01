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

// Function to save user email and username to local storage
function saveUserData() {
    const email = document.getElementById('email')?.value;
    const username = document.getElementById('username')?.value;
    if (email) localStorage.setItem('userEmail', email);
    if (username) localStorage.setItem('username', username);
}

// Function to load user data from local storage
function loadUserData() {
    const email = localStorage.getItem('userEmail');
    const username = localStorage.getItem('username');
    if (email) {
        const emailField = document.getElementById('email');
        if (emailField) {
            emailField.value = email;
        }
    }
    if (username) {
        const usernameField = document.getElementById('username');
        if (usernameField) {
            usernameField.value = username;
        }
    }
}

// Function to change the theme and store the preference
function changeTheme(theme) {
    const themes = ['dark', 'light', 'mint-green', 'icy', 'fire', 'halloween', 'purple'];
    document.body.classList.remove(...themes.map(t => `${t}-theme`)); // Remove all theme classes

    if (themes.includes(theme)) {
        document.body.classList.add(`${theme}-theme`); // Add the selected theme class
        console.log(`Theme changed to ${theme.charAt(0).toUpperCase() + theme.slice(1)}!`);
    }

    // Save the theme preference in local storage
    localStorage.setItem('theme', theme);
}

// Function to load the theme from local storage
function loadTheme() {
    const theme = localStorage.getItem('theme') || 'default';
    const themes = ['dark', 'light', 'mint-green', 'icy', 'fire', 'halloween', 'purple'];
    document.body.classList.remove(...themes.map(t => `${t}-theme`));

    if (themes.includes(theme)) {
        document.body.classList.add(`${theme}-theme`);
        console.log(`Theme changed to ${theme.charAt(0).toUpperCase() + theme.slice(1)}!`);
    }
}

// Function to get a specified number of random playlists
function getRandomPlaylists(numPlaylists) {
    // Return an empty array if videoData is not defined or has no content
    if (!videoData || videoData.length === 0) return [];
    
    // Shuffle the videoData array and return the first numPlaylists items
    const shuffledPlaylists = videoData.sort(() => 0.5 - Math.random());
    return shuffledPlaylists.slice(0, numPlaylists); // Return only the specified number of playlists
}

// Function to display random playlists in the UI
function displayRandomPlaylists() {
    const playlistsContainer = document.getElementById('randomPlaylists');
    if (!playlistsContainer) return; // Ensure the container exists

    playlistsContainer.innerHTML = ''; // Clear any existing playlists

    const randomPlaylists = getRandomPlaylists(4); // Get 4 random playlists
    randomPlaylists.forEach((playlist, index) => {
        // Create a new element for each playlist
        const playlistItem = document.createElement('div');
        playlistItem.className = 'playlist-item';
        playlistItem.innerHTML = `
            <h3>${playlist.name}</h3>
            <p>${playlist.description}</p>
            <button class="view-playlist-button" data-url="${playlist.url}">View Playlist</button>
        `;
        playlistsContainer.appendChild(playlistItem); // Add the new playlist item to the container

        // Add event listener to the "View Playlist" button for updating video index
        const button = playlistItem.querySelector('.view-playlist-button');
        button.addEventListener('click', (event) => {
            const playlistUrl = event.target.getAttribute('data-url');
            const youtubeVideo = document.getElementById('youtubeVideo');
            if (youtubeVideo) {
                youtubeVideo.src = playlistUrl; // Update the video source to the selected playlist URL
                currentVideoIndex = index; // Update the current video index to the selected playlist index
            }
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
    const profileForm = document.getElementById('profileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission
            saveUserData(); // Save user data
            alert('Profile updated successfully!');
        });
    }

    // Event listener for theme buttons
    document.querySelectorAll('.theme-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const selectedTheme = event.target.textContent;
            changeTheme(selectedTheme);
        });
    });
};



// Toggle feedback form display
function toggleFeedbackForm() {
    const feedbackFormSection = document.getElementById('feedbackFormSection');
    if (feedbackFormSection) {
        feedbackFormSection.style.display = feedbackFormSection.style.display === 'none' ? 'block' : 'none';
    }
}

// Event listener for feedback form submission
const feedbackForm = document.getElementById('feedbackForm');
if (feedbackForm) {
    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('feedbackName').value;
        const email = document.getElementById('feedbackEmail').value;
        const feedback = document.getElementById('feedback').value;

        // Display feedback submission response
        const feedbackResponse = document.getElementById('feedbackResponse');
        if (feedbackResponse) {
            feedbackResponse.textContent = `Thank you, ${name}, for your feedback!`;
        }

        // Optionally, clear the form fields
        feedbackForm.reset();
    });
}
