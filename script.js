// Array of YouTube video URLs and names
const videoData = [
    { url: "https://www.youtube.com/embed/videoseries?si=rsFGG5S7woDDN9il&amp;list=PLJGjdBsM0cguUT00NXKnQxDOpGzruSm6G", name: "Super Mario 3D land Playlist"},
    { url: "https://www.youtube.com/embed/videoseries?si=rsFGG5S7woDDN9il&amp;list=PLEAE2BCB23A29D7B8", name: "Super Mario Bros. nes Playlist"},
    { url: "https://www.youtube.com/embed/videoseries?si=rsFGG5S7woDDN9il&amp;list=PL04F6446580894A57", name: "Super Mario Bros. 2 Playlist"},
    { url: "https://www.youtube.com/embed/videoseries?si=rsFGG5S7woDDN9il&amp;list=PL001A1024CB49F661", name: "Super Mario Bro. 3 Playlist"},
    { url: "https://www.youtube.com/embed/videoseries?si=rsFGG5S7woDDN9il&amp;list=PL-OsD4kgpdtAaS2lveuh4w_ptlTc3T-37", name: "New Super Mario bros 2 land Playlist"},
    { url: "https://www.youtube.com/embed/videoseries?si=rsFGG5S7woDDN9il&amp;list=PLhLQajHvNrYQ2dB4FE6qxRdrmTtmHc2Na", name: "Super Mario Galaxy Playlist"},
    { url: "https://www.youtube.com/embed/videoseries?si=rsFGG5S7woDDN9il&list=PLbcFKfjvYToUw4GsGrgOmIf4Yju2-oSiQ", name: "Super Mario World Playlist" },
    { url: "https://www.youtube.com/embed/videoseries?si=rsFGG5S7woDDN9il&list=PLC583980D7806298E", name: "Super Mario Galaxy 2 Playlist" },
    { url: "https://www.youtube.com/embed/videoseries?si=rsFGG5S7woDDN9il&list=PL93EE6DF71E5913A7", name: "Yoshi Island Snes Playlist" },
    { url: "https://www.youtube.com/embed/videoseries?si=rsFGG5S7woDDN9il&list=PL84082A383E2DF285", name: "Yoshi Island DS" },
];


// Track the current video index
let currentVideoIndex = 0;

// Get the iframe element, the video name display, and the buttons
const youtubeVideo = document.getElementById('youtubeVideo');
const videoNameDisplay = document.getElementById('videoName');
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');

// Function to load video based on currentVideoIndex
function loadVideo() {
    youtubeVideo.src = videoData[currentVideoIndex].url;
    videoNameDisplay.textContent = `Current Video: ${videoData[currentVideoIndex].name}`;
    
    // Update button text based on the current video index
    prevButton.textContent = currentVideoIndex > 0 ? `Previous Video: ${videoData[currentVideoIndex - 1].name}` : "Previous Video";
    nextButton.textContent = currentVideoIndex < videoData.length - 1 ? `Next Video: ${videoData[currentVideoIndex + 1].name}` : "Next Video";
}

// Event listener for Next Episode button
nextButton.addEventListener('click', function() {
    if (currentVideoIndex < videoData.length - 1) {
        currentVideoIndex++;
        loadVideo();
    }
});

// Event listener for Previous Episode button
prevButton.addEventListener('click', function() {
    if (currentVideoIndex > 0) {
        currentVideoIndex--;
        loadVideo();
    }
});

// Initialize the video display
loadVideo();
