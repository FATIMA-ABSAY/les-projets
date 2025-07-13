const songs = [
  {
    title: "Chanson 1",
    file: "musique/music1.mp3",
    cover: "image/img1.jpg"
  },
  {
    title: "Chanson 2",
    file: "musique/music2.mp3",
    cover: "image/img2.jpg"
  }
];

let currentIndex = 0;

const audio = document.getElementById('audio');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const playPauseBtn = document.getElementById('playPause');
const nextBtn = document.getElementById('next');
const progress = document.getElementById('progress');

function loadSong(index) {
  const song = songs[index];
  audio.src = song.file;
  cover.src = song.cover;
  title.textContent = song.title;
}

function playPause() {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = '⏸️';
  } else {
    audio.pause();
    playPauseBtn.textContent = '▶️';
  }
}

function nextSong() {
  currentIndex = (currentIndex + 1) % songs.length;
  loadSong(currentIndex);
  audio.play();
  playPauseBtn.textContent = '⏸️';
}

audio.addEventListener('timeupdate', () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progress.style.width = percent + '%';
});

playPauseBtn.addEventListener('click', playPause);
nextBtn.addEventListener('click', nextSong);

// Charger la première chanson
loadSong(currentIndex);
