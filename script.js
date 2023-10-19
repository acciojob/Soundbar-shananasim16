function playAudio(filename) {
    var audio = document.getElementById("audioPlayer");
    audio.src = "sounds/" + filename;
    audio.play();
}

function stopAudio() {
    var audio = document.getElementById("audioPlayer");
    audio.pause();
    audio.currentTime = 0;
}

