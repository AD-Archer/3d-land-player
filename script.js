// Track the current video index
let currentVideoIndex = 0;

// Function to populate the playlist selector
function populatePlaylistSelector() {
    const playlistSelector = document.getElementById('playlistSelector');
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
    const video = videoData[currentVideoIndex];
    const youtubeVideo = document.getElementById('youtubeVideo');
    const videoNameDisplay = document.getElementById('videoName');
    const videoDescriptionDisplay = document.getElementById('videoDescription');

    youtubeVideo.src = video.url;
    videoNameDisplay.textContent = `Current Video: ${video.name}`;
    videoDescriptionDisplay.innerHTML = `
        <strong>Description:</strong> ${video.description} <br>
        <strong>Fun Fact:</strong> ${video.fact}
    `;

    // Update button text based on the current video index
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    prevButton.textContent = currentVideoIndex > 0 ? `Previous Video: ${videoData[currentVideoIndex - 1].name}` : "Previous Video";
    nextButton.textContent = currentVideoIndex < videoData.length - 1 ? `Next Video: ${videoData[currentVideoIndex + 1].name}` : "Next Video";

    // Save the current video index to local storage
    localStorage.setItem('currentVideoIndex', currentVideoIndex);
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
    const shuffled = [...videoData].sort(() => 0.5 - Math.random());
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

    randomPlaylists.forEach((playlist, index) => {
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

// Initialize the page with the playlist and the first video
window.onload = () => {
    populatePlaylistSelector();

    // Load the last watched video index from local storage
    const savedVideoIndex = localStorage.getItem('currentVideoIndex');
    if (savedVideoIndex !== null) {
        currentVideoIndex = parseInt(savedVideoIndex);
    }

    loadVideo(); // Display the loaded video
    displayRandomPlaylists(); // Display random playlists
    loadUserData(); // Load user data
    loadTheme(); // Load theme

    // Event listeners
    document.getElementById('playlistSelector').addEventListener('change', (event) => {
        currentVideoIndex = parseInt(event.target.value);
        loadVideo();
    });

    document.getElementById('nextButton').addEventListener('click', function() {
        currentVideoIndex = (currentVideoIndex + 1) % videoData.length; // Loop back to the beginning
        displayRandomPlaylists();
        loadVideo();
    });

    document.getElementById('prevButton').addEventListener('click', function() {
        currentVideoIndex = (currentVideoIndex - 1 + videoData.length) % videoData.length; // Loop to the end
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
