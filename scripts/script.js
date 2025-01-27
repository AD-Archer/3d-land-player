// Track the current video index
let currentVideoIndex = 0;
const themes = [
  "default",
  "dark",
  "light",
  "mint-green",
  "icy",
  "fire",
  "halloween",
  "purple",
  "pink",
  "propeller-orange",
  "gray",
  "bee",
  "sunset",
];

// ======================= Video Loading and Navigation =======================

// Function to load video based on currentVideoIndex
function loadVideo() {
  if (!videoData || videoData.length === 0) return;
  const video = videoData[currentVideoIndex];
  const youtubeVideo = document.getElementById("youtubeVideo");
  const videoNameDisplay = document.getElementById("videoName");
  const videoDescriptionDisplay = document.getElementById("videoDescription");

  if (youtubeVideo && videoNameDisplay && videoDescriptionDisplay) {
    youtubeVideo.src = video.url;
    videoNameDisplay.textContent = `Current Video: ${video.name}`;
    videoDescriptionDisplay.innerHTML = `
            <strong>Description:</strong> ${video.description} <br>
            <strong>Fun Fact:</strong> ${video.fact}
        `;
    updateNavigationButtons();
    localStorage.setItem("currentVideoIndex", currentVideoIndex);
  }
}

// Function to update navigation buttons (Previous/Next)
function updateNavigationButtons() {
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  if (prevButton) {
    prevButton.textContent =
      currentVideoIndex > 0
        ? `Previous Video: ${videoData[currentVideoIndex - 1].name}`
        : "Previous Video";
  }

  if (nextButton) {
    nextButton.textContent =
      currentVideoIndex < videoData.length - 1
        ? `Next Video: ${videoData[currentVideoIndex + 1].name}`
        : "Next Video";
  }
}

// Event listeners for navigation buttons
document.getElementById("nextButton")?.addEventListener("click", function () {
  currentVideoIndex = (currentVideoIndex + 1) % videoData.length;
  loadVideo();
});

document.getElementById("prevButton")?.addEventListener("click", function () {
  currentVideoIndex =
    (currentVideoIndex - 1 + videoData.length) % videoData.length;
  loadVideo();
});

// ======================= Playlist Handling =======================

// Function to populate the playlist selector
function populatePlaylistSelector() {
  const playlistSelector = document.getElementById("playlistSelector");
  if (!playlistSelector) return;
  playlistSelector.innerHTML = ""; // Clear existing options

  videoData.forEach((video, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = video.name;
    playlistSelector.appendChild(option);
  });
}

// Event listener for playlist selection
document
  .getElementById("playlistSelector")
  ?.addEventListener("change", function (event) {
    currentVideoIndex = parseInt(event.target.value, 10);
    loadVideo();
  });

// ======================= Theme Management =======================

// Function to change the theme and store the preference
function changeTheme(theme) {
  document.body.classList.remove(...themes.map((t) => `${t}-theme`));
  if (themes.includes(theme)) {
    document.body.classList.add(`${theme}-theme`);
    console.log(
      `Theme changed to ${theme.charAt(0).toUpperCase() + theme.slice(1)}!`
    );
    localStorage.setItem("theme", theme);
  }
}

// Function to load the theme from local storage
function loadTheme() {
  const theme = localStorage.getItem("theme") || "default";
  document.body.classList.remove(...themes.map((t) => `${t}-theme`));
  if (themes.includes(theme)) {
    document.body.classList.add(`${theme}-theme`);

    // Set the correct radio button based on the theme
    const radioButton = document.querySelector(
      `input[name="theme"][value="${theme}"]`
    );
    if (radioButton) {
      radioButton.checked = true;
    }
  }
}

// Function to dynamically create theme buttons
function createThemeButtons() {
  const themeSwitcher = document.getElementById("theme-switcher");
  themes.forEach((theme) => {
    const button = document.createElement("button");
    button.textContent = theme.charAt(0).toUpperCase() + theme.slice(1);
    button.addEventListener("click", () => changeTheme(theme));
    themeSwitcher.appendChild(button);
  });
}
// ======================= Feedback Form Handling =======================

// Function to save user data to local storage
function saveUserData() {
  const email =
    document.getElementById("email")?.value ||
    document.getElementById("feedbackEmail")?.value;
  const username =
    document.getElementById("username")?.value ||
    document.getElementById("feedbackName")?.value;
  if (email) localStorage.setItem("userEmail", email);
  if (username) localStorage.setItem("username", username);
}

// Function to load user data from local storage
function loadUserData() {
  const email = localStorage.getItem("userEmail");
  const username = localStorage.getItem("username");

  if (email) {
    const emailField = document.getElementById("email");
    const feedbackEmailField = document.getElementById("feedbackEmail");
    if (emailField) emailField.value = email; // Directly set value
    if (feedbackEmailField) feedbackEmailField.value = email; // Directly set value
  }

  if (username) {
    const usernameField = document.getElementById("username");
    const feedbackNameField = document.getElementById("feedbackName");
    if (usernameField) usernameField.value = username; // Directly set value
    if (feedbackNameField) feedbackNameField.value = username; // Directly set value
    const currentUserDisplay = document.getElementById("current-user");
    if (currentUserDisplay) currentUserDisplay.textContent = username; // Update the current user display
  }
}

// Event listener for feedback form submission
document
  .getElementById("feedbackForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("feedbackName").value;
    const feedbackMessage = document.getElementById("feedback").value; // Get the feedback text
    const feedbackResponse = document.getElementById("feedbackResponse");

    saveUserData();

    // Create feedback string and add it to the list
    const feedbackEntry = `${name}: ${feedbackMessage}`;
    feedbacklist.push(feedbackEntry); // Add the new feedback to the feedback list
    displayFeedback(); // Update the displayed feedback

    if (feedbackResponse) {
      feedbackResponse.textContent = `Thank you, ${name}, for your feedback!`;
    }
    event.target.reset(); // Reset the form
  });

// ======================= Random Playlists =======================

// Function to get a specified number of random playlists
function getRandomPlaylists(numPlaylists) {
  if (!videoData || videoData.length === 0) return [];
  const shuffledPlaylists = videoData.sort(() => 0.5 - Math.random());
  return shuffledPlaylists.slice(0, numPlaylists);
}

// Function to display random playlists in the UI
function displayRandomPlaylists() {
  const playlistsContainer = document.getElementById("randomPlaylists");
  if (!playlistsContainer) return;
  playlistsContainer.innerHTML = ""; // Clear any existing playlists

  const randomPlaylists = getRandomPlaylists(4); // Get 4 random playlists
  randomPlaylists.forEach((playlist) => {
    const playlistItem = document.createElement("div");
    playlistItem.className = "playlist-item";
    playlistItem.innerHTML = `
            <h3>${playlist.name}</h3>
            <p>${playlist.description}</p>
            <button class="view-playlist-button" data-url="${playlist.url}">View Playlist</button>
        `;
    playlistsContainer.appendChild(playlistItem);

    // Add event listener to the "View Playlist" button for updating video index
    playlistItem
      .querySelector(".view-playlist-button")
      .addEventListener("click", (event) => {
        const playlistUrl = event.target.getAttribute("data-url");
        const youtubeVideo = document.getElementById("youtubeVideo");
        if (youtubeVideo) {
          youtubeVideo.src = playlistUrl;
        }
      });
  });
}

// ======================= password functionality that enforces a 4-character password =======================

document
  .getElementById("profile-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const username = document.getElementById("username").value;
    const errorMessage = document.getElementById("error-message");

    // Check if the username is at least 4 characters long
    if (username.length < 4) {
      errorMessage.textContent = "Username must be at least 4 characters long.";
    } else {
      errorMessage.textContent = "";
      // Proceed with form submission or other actions
      alert("Profile updated successfully!");
    }
  });
// ======================= Initialization =======================

// Function to initialize the page
function initializePage() {
  populatePlaylistSelector();
  const savedVideoIndex = localStorage.getItem("currentVideoIndex");
  if (savedVideoIndex !== null) {
    currentVideoIndex = parseInt(savedVideoIndex, 10);
  }
  loadVideo();
  displayRandomPlaylists(); // displays random playlists to be changed later
  loadUserData();
  loadTheme(); // Load the saved theme
}

// Initialize everything when the page loads
window.onload = initializePage;
