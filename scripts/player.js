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
    mainContainerGradient2.style.backgroundImage = data[3][songIndex];
    mainContainerGradient.style.backgroundImage = data[3][songIndex];
    document.querySelector('#volume').style.backgroundImage = data[4][songIndex];
    document.querySelector('#text-container').style.backgroundImage = data[4][songIndex];
    progressBar.classList = [data[6][songIndex]];

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
  if(songIndex > data[0].length-1) songIndex = 0;
  song.src = data[0][songIndex];
  thumbnail.src = data[1][songIndex];
  BG.src = data[1][songIndex];
  playing = true;
  playPause();
  songTitle.innerHTML = data[2][songIndex];
}

function previousSong() {
  songIndex--;
  if(songIndex < 0) songIndex = data[0].length-1;
  song.src = data[0][songIndex];
  thumbnail.src = data[1][songIndex];
  BG.src = data[1][songIndex];
  playing = true;
  playPause();
  songTitle.innerHTML = data[2][songIndex];
}

function updateProgressValue() {
  progressBar.max = song.duration;
  progressBar.value = song.currentTime;
  let timeCodeIndex = 0;
  for(let tm of data[5][songIndex]) {
    if(tm.timecode > song.currentTime) {
        break;
    }
     timeCodeIndex++;
  }
  document.querySelector(".text-expanded").innerHTML = data[5][songIndex][timeCodeIndex].text
  //console.log(song.currentTime)

}

function textContainerClick() {
  document.querySelector(`#text-container`).classList.toggle("expanded")
}

function playRandomSong() {
  shuffleSongs(data);
}

function shuffleSongs(array) {
  for(let a = 0; a < 6; a++){
  let currentIndex = array[a].length,  randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    for(let i = 0; i < array.length; i++) {
      [array[i][currentIndex], array[i][randomIndex]] = [
        array[i][randomIndex], array[i][currentIndex]];
    }
  }
}
  return array;
}

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

