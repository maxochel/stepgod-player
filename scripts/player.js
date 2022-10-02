const songTitle = document.querySelector(".song-title");
const thumbnail = document.querySelector("#thumbnail");
const progressBar = document.querySelector("#progressBar");
const mainContainerGradient = document.querySelector(".box");
const mainContainerGradient2 = document.querySelector(".song-name");
const song = document.querySelector("#song");
const BG = document.querySelector("#BG");
const pp = document.querySelector("#pp");
const Volume = document.getElementById('song').volume;

let nextSongPlay = false;
let playing = true;
let songIndex = 0;

function playPause() {
  if(playing) {
    mainContainerGradient2.style.backgroundImage = songGradients[songIndex];
    mainContainerGradient.style.backgroundImage = songGradients[songIndex];
    document.querySelector('#volume').style.backgroundImage = buttonGradient[songIndex];
    document.querySelector('#text-container').style.backgroundImage = buttonGradient[songIndex];
    progressBar.classList = ['color' + songIndex];

    pp.src = "../pictures/pause-button.png";
    song.play();
    playing = false;
    thumbnail.style.width = "160%";
  } else {
    pp.src = "../pictures/play-button.ico";
    song.pause();
    nextSongPlay = true;
    playing = true;
    thumbnail.style.width = "130%";
  }
}

function nextSong() {
  songIndex++;
  if(songIndex > songs.length-1) songIndex = 0;
  song.src = songs[songIndex];
  thumbnail.src = thumbnails[songIndex];
  BG.src = thumbnails[songIndex];
  playing = true;
  playPause();
  songTitle.innerHTML = songNames[songIndex];
}

function previousSong() {
  songIndex--;
  if(songIndex < 0) songIndex = songs.length-1;
  song.src = songs[songIndex];
  thumbnail.src = thumbnails[songIndex];
  BG.src = thumbnails[songIndex];
  playing = true;
  playPause();
  songTitle.innerHTML = songNames[songIndex];
}

function updateProgressValue() {
  progressBar.max = song.duration;
  progressBar.value = song.currentTime;
  let timeCodeIndex = 0;
  for(let tm of textMapping[songIndex]) {
    if(tm.timecode > song.currentTime) {
        break;
    }
     timeCodeIndex++;
  }
  document.querySelector(".text-expanded").innerHTML = textMapping[songIndex][timeCodeIndex].text
  console.log(song.currentTime)

}

function textContainerClick() {
  document.querySelector(`#text-container`).classList.toggle("expanded")
}

function playRandomSong() {
  const randomSong = Math.floor(Math.random() * 14);
  for(let i = 0; i < randomSong; i++) {
    nextSong();
  }
  //shuffleSongs(songs)
  //shuffleSongs(songNames)
}

/*function shuffleSongs(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}*/

document.addEventListener('keyup', event => {
  if (event.code === 'Space') {
    playPause();
  }
})

document.addEventListener('keyup', event => {
  if (event.code === 'ArrowLeft') {
    previousSong();
  }
})

document.addEventListener('keyup', event => {
  if (event.code === 'ArrowRight') {
    nextSong();
  }
})

document.addEventListener('keyup', event => {
  if (event.code === 'ArrowUp') {
    document.getElementById('song').volume+=0.1
  }
})

document.addEventListener('keyup', event => {
  if (event.code === 'ArrowDown') {
    document.getElementById('song').volume-=0.1
  }
})

document.addEventListener('keyup', event => {
  if (event.code === 'KeyA') {
    previousSong();
  }
})

document.addEventListener('keyup', event => {
  if (event.code === 'KeyD') {
    nextSong();
  }
})

document.addEventListener('keyup', event => {
  if (event.code === 'KeyW') {
    document.getElementById('song').volume+=0.1
  }
})

document.addEventListener('keyup', event => {
  if (event.code === 'KeyS') {
    document.getElementById('song').volume-=0.1
  }
})

setInterval(updateProgressValue, 500);

