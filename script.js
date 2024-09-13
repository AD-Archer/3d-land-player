// Array of YouTube video URLs and information
const videoData = [
    { 
        url: "https://www.youtube.com/embed/videoseries?si=rsFGG5S7woDDN9il&amp;list=PLJGjdBsM0cguUT00NXKnQxDOpGzruSm6G", 
        name: "Super Mario 3D Land Playlist",
        description: "Released in 2011. Introduced 3D gameplay elements and is set in the Mario series' first 3D platformer on the Nintendo 3DS.",
        fact: "It's known for its use of 3D effects that were innovative for its time."
    },
    { 
        url: "https://www.youtube.com/embed/videoseries?si=rsFGG5S7woDDN9il&amp;list=PLEAE2BCB23A29D7B8", 
        name: "Super Mario Bros. NES Playlist",
        description: "Released in 1985. The classic 2D side-scrolling platformer that started it all.",
        fact: "It was the best-selling video game of its time and helped revive the video game industry."
    },
    { 
        url: "https://www.youtube.com/embed/videoseries?si=rsFGG5S7woDDN9il&amp;list=PL04F6446580894A57", 
        name: "Super Mario Bros. 2 Playlist",
        description: "Released in 1988. Known for its unique gameplay mechanics different from the original Super Mario Bros.",
        fact: "It was originally a game called 'Doki Doki Panic' before being rebranded for Mario."
    },
    { 
        url: "https://www.youtube.com/embed/videoseries?si=rsFGG5S7woDDN9il&amp;list=PL001A1024CB49F661", 
        name: "Super Mario Bros. 3 Playlist",
        description: "Released in 1988. Widely considered one of the greatest video games of all time.",
        fact: "Introduced the concept of power-ups and world maps."
    },
    { 
        url: "https://www.youtube.com/embed/videoseries?si=rsFGG5S7woDDN9il&amp;list=PL-OsD4kgpdtAaS2lveuh4w_ptlTc3T-37", 
        name: "New Super Mario Bros. 2 Playlist",
        description: "Released in 2012. Focuses on coin collection and includes new features for the 3DS.",
        fact: "It is a direct sequel to New Super Mario Bros. for the Nintendo DS."
    },
    { 
        url: "https://www.youtube.com/embed/videoseries?si=rsFGG5S7woDDN9il&amp;list=PLhLQajHvNrYQ2dB4FE6qxRdrmTtmHc2Na", 
        name: "Super Mario Galaxy Playlist",
        description: "Released in 2007. Known for its gravity-defying levels and innovative gameplay.",
        fact: "It won numerous awards for its design and originality."
    },
    { 
        url: "https://www.youtube.com/embed/videoseries?si=rsFGG5S7woDDN9il&list=PLbcFKfjvYToUw4GsGrgOmIf4Yju2-oSiQ", 
        name: "Super Mario World Playlist",
        description: "Released in 1990. A beloved entry in the series introducing Yoshi and the expansive Dinosaur Land.",
        fact: "It is one of the best-selling games for the Super Nintendo Entertainment System (SNES)."
    },
    { 
        url: "https://www.youtube.com/embed/videoseries?si=rsFGG5S7woDDN9il&list=PLC583980D7806298E", 
        name: "Super Mario Galaxy 2 Playlist",
        description: "Released in 2010. A direct sequel to Super Mario Galaxy, featuring new galaxies and power-ups.",
        fact: "It is often praised for improving upon its predecessor's already successful formula."
    },
    { 
        url: "https://www.youtube.com/embed/videoseries?si=rsFGG5S7woDDN9il&list=PL93EE6DF71E5913A7", 
        name: "Yoshi's Island SNES Playlist",
        description: "Released in 1995. Known for its distinctive art style and Yoshi as the main character.",
        fact: "It was a commercial success and critically acclaimed for its design and innovation."
    },
    { 
        url: "https://www.youtube.com/embed/videoseries?si=rsFGG5S7woDDN9il&list=PL84082A383E2DF285", 
        name: "Yoshi's Island DS Playlist",
        description: "Released in 2006. A follow-up to Yoshi's Island with new features and gameplay mechanics.",
        fact: "Introduced new baby characters with unique abilities."
    },
];

// Track the current video index
let currentVideoIndex = 0;

// Get the iframe element, the video name display, and the buttons
const youtubeVideo = document.getElementById('youtubeVideo');
const videoNameDisplay = document.getElementById('videoName');
const videoDescriptionDisplay = document.getElementById('videoDescription');
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');

// Function to load video based on currentVideoIndex
function loadVideo() {
    youtubeVideo.src = videoData[currentVideoIndex].url;
    videoNameDisplay.textContent = `Current Video: ${videoData[currentVideoIndex].name}`;
    videoDescriptionDisplay.innerHTML = `
        <strong>Release Date:</strong> ${videoData[currentVideoIndex].description} <br>
        <strong>Fun Fact:</strong> ${videoData[currentVideoIndex].fact}
    `;
    
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
