// Get the audio element
let a = document.querySelector("audio");

// Check if localStorage.audioplay is set to 'true'
if (localStorage.audioplay === 'true') {
    a.loop = true;
    a.play().catch(error => {
        console.error("Error playing audio automatically:", error);
    });
}

// Set an onclick event listener on the document
document.onclick = () => {
    if (a.paused) {
        a.volume = 0.2;
        a.play().catch(error => {
            console.error("Error playing audio on click:", error);
        });
        a.loop = true;
        localStorage.audioplay = 'true';
    }
};
