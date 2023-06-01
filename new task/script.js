const content = document.querySelector(".content"),
    playimage = content.querySelector(".music-image img"),
    musicName = content.querySelector(".music-titles .name"),
    musicArtist = content.querySelector(".music-titles .artist"),
    Audio = content.querySelector(".main-song"),
    playBtn = content.querySelector("play-pause"),
    playBtnIcon = content.querySelector(".play-pause span");

let index = 1;

window.addEventListener("load", () => {
    loadData(index);
    Audio.play();
});

function loadData(indexValue) {
    musicName.innerHTML = songs[indexValue - 1].name;
    musicArtist.innerHTML = songs[indexValue - 1].artist;
    playimage.src = "images/" + songs[indexValue - 1].img + ".jpg";
    Audio.src = "music/" + songs[indexValue - 1].Audio + ".mp3";
}
playBtn.addEventListener("click", () => {
    const isMusicPaused = content.classList.contains
        ("paused");
    if (isMusicPaused) {
        pauseSong();

    }
    else {
        playSong();
    }
});
function playSong() {
    content.classList.add("paused");
    playBtnIcon.innerHTML = "pause";
    Audio.play();
}