const videoPlayer = document.getElementById("video-player");

// Function to play the video
function playVideo() {
    videoPlayer.play();
}

// Function to pause the video
function pauseVideo() {
    videoPlayer.pause();
}

// Function to stop the video
function stopVideo() {
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
}

// ## MENU FUNCTIONS ###

function openAbout() {
    window.location.href = "about.html"; 
}

function openContacts() {
    window.location.href = "contact.html"; 
}

function openGalery() {
    window.location.href = "galery.html"; 
}

function openGameplay() {
    window.location.href = "gameplay.html"; 
}

function openMain() {
    window.location.href = "index.html"; 
}