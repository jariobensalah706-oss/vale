document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById('background-music');
    const muteButton = document.getElementById('mute-button');
    const volumeSlider = document.getElementById('volume-slider');
    const icon = muteButton.querySelector("i"); // Get the icon inside the button

    // Set default volume and loop
    audio.volume = 1;
    audio.loop = true;

    audio.play().catch(error => {
        console.log('Autoplay was prevented. User interaction needed.');
    });

    // Mute/unmute background music
    muteButton.addEventListener("click", function () {
        let isMuted = !audio.muted; // Toggle mute state

        audio.muted = isMuted;
        // Change mute icon dynamically
        icon.className = isMuted ? "fa fa-volume-off" : "fa fa-volume-up";

        // Sync volume slider with mute state
        volumeSlider.value = isMuted ? 0 : audio.volume;
    });

    // Volume slider functionality for background music
    volumeSlider.addEventListener("input", function () {
        let volume = volumeSlider.value;

        audio.volume = volume;
        // Auto-mute when volume is at 0
        let isMuted = volume == 0;
        audio.muted = isMuted;
        // Update mute button icon
        icon.className = isMuted ? "fa fa-volume-off" : "fa fa-volume-up";
    });
});
