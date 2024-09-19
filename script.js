// Array of YouTube video URLs and information
const videoData = [
    { 
        "url": "https://www.youtube.com/embed/videoseries?si=rsFGG5S7woDDN9il&list=PLJGjdBsM0cguUT00NXKnQxDOpGzruSm6G", 
        "name": "Super Mario 3D Land Playlist",
        "description": "Released in 2011. Introduced 3D gameplay elements and is set in the Mario series' first 3D platformer on the Nintendo 3DS.",
        "fact": "It's known for its use of 3D effects that were innovative for its time.",
        "image": "images/sm3dland.webp"
    },
    { 
        "url": "https://www.youtube.com/embed/videoseries?si=rsFGG5S7woDDN9il&list=PLEAE2BCB23A29D7B8", 
        "name": "Super Mario Bros. NES Playlist",
        "description": "Released in 1985. The classic 2D side-scrolling platformer that started it all.",
        "fact": "It was the best-selling video game of its time and helped revive the video game industry.",
        "image": "images/smb.jpg"
    },
    { 
        "url": "https://www.youtube.com/embed/videoseries?si=rsFGG5S7woDDN9il&list=PL04F6446580894A57", 
        "name": "Super Mario Bros. 2 Playlist",
        "description": "Released in 1988. Known for its unique gameplay mechanics different from the original Super Mario Bros.",
        "fact": "It was originally a game called 'Doki Doki Panic' before being rebranded for Mario.",
        "image": "images/smb2.jpeg"
    },
    { 
        "url": "https://www.youtube.com/embed/videoseries?si=rsFGG5S7woDDN9il&list=PL001A1024CB49F661", 
        "name": "Super Mario Bros. 3 Playlist",
        "description": "Released in 1988. Widely considered one of the greatest video games of all time.",
        "fact": "Introduced the concept of power-ups and world maps.",
        "image": "images/smb3.jpg"
    },
    { 
        "url": "https://www.youtube.com/embed/videoseries?si=rsFGG5S7woDDN9il&list=PL-OsD4kgpdtAaS2lveuh4w_ptlTc3T-37", 
        "name": "New Super Mario Bros. 2 Playlist",
        "description": "Released in 2012. Focuses on coin collection and includes new features for the 3DS.",
        "fact": "It is a direct sequel to New Super Mario Bros. for the Nintendo DS.",
        "image": "images/nsmb2.png"
    },
    { 
        "url": "https://www.youtube.com/embed/videoseries?si=rsFGG5S7woDDN9il&list=PLhLQajHvNrYQ2dB4FE6qxRdrmTtmHc2Na", 
        "name": "Super Mario Galaxy Playlist",
        "description": "Released in 2007. Known for its gravity-defying levels and innovative gameplay.",
        "fact": "It won numerous awards for its design and originality.",
        "image": "images/SuperMarioGalaxy.jpg"
    },
    { 
        "url": "https://www.youtube.com/embed/videoseries?si=rsFGG5S7woDDN9il&list=PLbcFKfjvYToUw4GsGrgOmIf4Yju2-oSiQ", 
        "name": "Super Mario World Playlist",
        "description": "Released in 1990. A beloved entry in the series introducing Yoshi and the expansive Dinosaur Land.",
        "fact": "It is one of the best-selling games for the Super Nintendo Entertainment System (SNES).",
        "image": "images/smbw.webp"
    },
    { 
        "url": "https://www.youtube.com/embed/videoseries?si=rsFGG5S7woDDN9il&list=PLC583980D7806298E", 
        "name": "Super Mario Galaxy 2 Playlist",
        "description": "Released in 2010. A direct sequel to Super Mario Galaxy, featuring new galaxies and power-ups.",
        "fact": "It is often praised for improving upon its predecessor's already successful formula.",
        "image": "images/smg2.jpg"
    },
    { 
        "url": "https://www.youtube.com/embed/videoseries?si=rsFGG5S7woDDN9il&list=PL93EE6DF71E5913A7", 
        "name": "Yoshi's Island SNES Playlist",
        "description": "Released in 1995. Known for its distinctive art style and Yoshi as the main character.",
        "fact": "It was a commercial success and critically acclaimed for its design and innovation.",
        "image": "images/yoshi snes.jpg"
    },
    { 
        "url": "https://www.youtube.com/embed/videoseries?si=rsFGG5S7woDDN9il&list=PL84082A383E2DF285", 
        "name": "Yoshi's Island DS Playlist",
        "description": "Released in 2006. A follow-up to Yoshi's Island with new features and gameplay mechanics.",
        "fact": "Introduced new baby characters with unique abilities.",
        "image": "images/yoshi island ds.jpg"
    },
    {
        "url": "https://www.youtube.com/embed/videoseries?si=PwjPMeGrq4nX5Ba0&list=PLNvQcJ1tQe2Q1q-6P2ql_WF1eBqz_v3oX",
        "name": "New Super Mario Bros. Wii",
        "description": "Released in 2009. A return to classic side-scrolling gameplay with updated graphics and multiplayer features.",
        "fact": "Marked the revival of 2D Mario games with a modern twist, leading to several successful sequels.",
        "image": "images/New-Super-Mario-Bros wii.jpg"
    },
    {
        "url": "https://www.youtube.com/embed/videoseries?si=JrYPfv5y4R_m0CpW&list=PLbVPArItGSJnBkQYBuyIyMOFHDrMO_VHq",
        "name": "New Super Mario Bros. DS",
        "description": "Released in 2006. The first game in the New Super Mario Bros. series, featuring updated graphics and a return to classic 2D platforming.",
        "fact": "Introduced a new multiplayer mode allowing two players to cooperate in gameplay.",
        "image": "images/nsmb.webp"
    },
    {
        "url": "https://www.youtube.com/embed/videoseries?si=0N4fTwMf4krjM7M6&list=PLJ28SgoVT7NItiC5c7mbzfw6bRW19eByP",
        "name": "Nintendo Wii Music",
        "description": "Released in 2008. A rhythm game for the Wii that lets players create and perform music using motion controls.",
        "fact": "Included a wide range of musical styles and instruments, encouraging creativity and improvisation.",
        "image": "images/Wii-Logo.jpg"
    },
    {
        "url": "https://www.youtube.com/embed/videoseries?si=UFeH2MBzGVbLjDru&list=PLwT7No3rTZcxmBWsoC2Nzi79c7oKCOHmo",
        "name": "DSi Music",
        "description": "Released in 2009. A collection of music tracks from the Nintendo DSi, showcasing the console's unique sound capabilities.",
        "fact": "Featured a variety of music genres to highlight the DSi's multimedia features.",
        "image": "images/Nintendo_DSi_logo.webp"
    },
    {
        "url": "https://www.youtube.com/embed/videoseries?si=in9XjNN52AsvlVpU&amp;list=PLUt3xyJNAi09IlqdYfqFAbqK7Ais2EsLQ",
        "name": "3DS OST",
        "description": "Released in 2011. A compilation of original soundtrack music from the Nintendo 3DS games, showcasing the handheld's audio capabilities.",
        "fact": "Included tracks from various popular 3DS titles, demonstrating the range of music featured on the system.",
        "image": "images/3dsbox.png"
    }
];
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

// Function to update video display based on selection
function updateVideoDisplay(index) {
    const video = videoData[index];
    const youtubeVideo = document.getElementById('youtubeVideo');
    const videoName = document.getElementById('videoName');
    const videoDescription = document.getElementById('videoDescription');
    
    youtubeVideo.src = video.url;
    videoName.textContent = `Current Video: ${video.name}`;
    videoDescription.innerHTML = `
        <strong>Description:</strong> ${video.description} <br>
        <strong>Fun Fact:</strong> ${video.fact}
    `;
}

// Track the current video index
let currentVideoIndex = 0;

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
    
    console.log('Random Playlists:', randomPlaylists); // Debugging

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
    loadVideo(); // Display the first video initially
    displayRandomPlaylists(); // Display random playlists

    // Event listeners
    document.getElementById('playlistSelector').addEventListener('change', (event) => {
        currentVideoIndex = parseInt(event.target.value);
        loadVideo();
    });

    document.getElementById('nextButton').addEventListener('click', function() {
        currentVideoIndex = (currentVideoIndex + 1) % videoData.length; // Loop back to the beginning
        loadVideo();
    });

    document.getElementById('prevButton').addEventListener('click', function() {
        currentVideoIndex = (currentVideoIndex - 1 + videoData.length) % videoData.length; // Loop to the end
        loadVideo();
    });
};