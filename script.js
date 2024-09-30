let currentVideoIndex = 0;
let currentPlaylistIndex = 0; // Track the currently selected playlist index
let playlists = []; // Array to hold multiple playlists

// Function to fetch playlist data from external file
async function fetchPlaylists() {
    try {
        const response = await fetch('playlists.json'); // Adjust path as necessary
        const data = await response.json();
        playlists = data.music; // Assuming your playlists are inside 'music'
        populatePlaylistSelector();
        loadVideo();
    } catch (error) {
        console.error('Error fetching playlists:', error);
    }
}

// Function to populate the playlist selector
function populatePlaylistSelector() {
    const playlistSelector = document.getElementById('playlistSelector');
    playlistSelector.innerHTML = ''; // Clear existing options

    playlists.forEach((playlist, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = playlist.name; // Display playlist name
        playlistSelector.appendChild(option);
    });

    // Set default to the first playlist
    playlistSelector.value = currentPlaylistIndex;

    // Add event listener for playlist selection
    playlistSelector.addEventListener('change', (event) => {
        currentPlaylistIndex = event.target.value;
        currentVideoIndex = 0; // Reset to first video in the new playlist
        loadVideo();
    });
}

// Function to load video based on currentVideoIndex and currentPlaylistIndex
function loadVideo() {
    const video = playlists[currentPlaylistIndex]; // Access selected playlist
    const youtubeVideo = document.getElementById('youtubeVideo');
    const videoNameDisplay = document.getElementById('videoName');
    const videoDescriptionDisplay = document.getElementById('videoDescription');

    youtubeVideo.src = video.url;
    videoNameDisplay.textContent = `Current Playlist: ${video.name}`;
    videoDescriptionDisplay.innerHTML = `
        <strong>Description:</strong> ${video.description} <br>
        <strong>Fun Fact:</strong> ${video.fact}
    `;

    // Update button text based on the current video index
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    prevButton.textContent = currentVideoIndex > 0 ? `Previous Playlist: ${playlists[currentVideoIndex - 1].name}` : "Previous Playlist";
    nextButton.textContent = currentVideoIndex < playlists.length - 1 ? `Next Playlist: ${playlists[currentVideoIndex + 1].name}` : "Next Playlist";

    // Save the current video index and playlist index to local storage
    localStorage.setItem('currentVideoIndex', currentVideoIndex);
    localStorage.setItem('currentPlaylistIndex', currentPlaylistIndex);
}

// Function to save email and theme to local storage
function saveUserData() {
    const email = document.getElementById('email').value;
    localStorage.setItem('userEmail', email);
}

// Function to load user data from local storage
function loadUserData() {
    const email = localStorage.getItem('userEmail');
    if (email) {
        document.getElementById('email').value = email;
    }
}

// Function to change the theme and store the preference
function changeTheme(theme) {
    // Remove existing theme classes
    document.body.classList.remove('dark-theme', 'light-theme');

    // Apply the selected theme
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
    } else if (theme === 'light') {
        document.body.classList.add('light-theme');
    }

    // Save the theme preference in local storage
    localStorage.setItem('theme', theme);
}

// Function to load the theme from local storage
function loadTheme() {
    const theme = localStorage.getItem('theme');
    if (theme) {
        changeTheme(theme); // Apply the saved theme
    }
}

// Function to get 4 random playlists
function getRandomPlaylists(numPlaylists) {
    const shuffled = [...playlists].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numPlaylists);
}

// Function to display random playlists
function displayRandomPlaylists() {
    const playlistsContainer = document.getElementById('randomPlaylists');
    if (!playlistsContainer) {
        console.error('Element with ID "randomPlaylists" not found.');
        return;
    }

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

    // Add event listener to all "View Playlist" buttons
    document.querySelectorAll('.view-playlist-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const playlistUrl = event.target.getAttribute('data-url');
            document.getElementById('youtubeVideo').src = playlistUrl;
        });
    });
}

// Initialize the page with the fetched data
window.onload = function () {
    fetchPlaylists();
    loadUserData();
    loadTheme();
};

// Initialize the page with the playlist and the first video
window.onload = async () => {
    await fetchPlaylists(); // Fetch playlists when the page loads

    // Load the last watched video index and playlist index from local storage
    const savedVideoIndex = localStorage.getItem('currentVideoIndex');
    const savedPlaylistIndex = localStorage.getItem('currentPlaylistIndex');

    if (savedVideoIndex !== null) {
        currentVideoIndex = parseInt(savedVideoIndex);
    }
    
    if (savedPlaylistIndex !== null) {
        currentPlaylistIndex = parseInt(savedPlaylistIndex);
    }

    loadVideo(); // Display the loaded video
    displayRandomPlaylists(); // Display random playlists
    loadUserData(); // Load user data
    loadTheme(); // Load theme

    // Event listeners
    document.getElementById('playlistSelector').addEventListener('change', (event) => {
        currentPlaylistIndex = parseInt(event.target.value); // Update the current playlist index
        currentVideoIndex = 0; // Reset video index when changing playlists
        loadVideo();
    });

    document.getElementById('nextButton').addEventListener('click', function() {
        currentVideoIndex = (currentVideoIndex + 1) % playlists[currentPlaylistIndex].videos.length; // Loop back to the beginning
        displayRandomPlaylists();
        loadVideo();
    });

    document.getElementById('prevButton').addEventListener('click', function() {
        currentVideoIndex = (currentVideoIndex - 1 + playlists[currentPlaylistIndex].videos.length) % playlists[currentPlaylistIndex].videos.length; // Loop to the end
        displayRandomPlaylists();
        loadVideo();
    });

    // Event listener for user form submission
    document.getElementById('submit').addEventListener('click', function() {
        saveUserData();
        document.getElementById('user-form').style.display = 'none'; // Hide the form after submission
    });

    // Event listener for theme buttons
    document.querySelectorAll('#theme-switcher button').forEach(button => {
        button.addEventListener('click', (event) => {
            changeTheme(event.target.textContent.toLowerCase());
        });
    });
};

// Show feedback form when the feedback button is clicked
document.getElementById('feedbackButton').addEventListener('click', function() {
    const feedbackFormSection = document.getElementById('feedbackFormSection');
    feedbackFormSection.style.display = feedbackFormSection.style.display === 'none' ? 'block' : 'none';
});
  
// Function to handle feedback form submission
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    const feedbackText = document.getElementById('feedback').value;
    const feedbackName = document.getElementById('feedbackName').value;
    const feedbackEmail = document.getElementById('feedbackEmail').value;
  
    // You can handle feedback submission logic here (e.g., send to server or store locally)
    
    // Display a response message
    document.getElementById('feedbackResponse').textContent = `Thank you for your feedback, ${feedbackName || 'Guest'}!`;
  
    // Optionally, save feedback to local storage (you can modify this as needed)
    localStorage.setItem('userFeedback', JSON.stringify({ feedbackText, feedbackName, feedbackEmail }));
  
    // Clear the form inputs
    document.getElementById('feedbackForm').reset();
});