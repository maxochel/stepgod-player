
function playPause() {
  if(playing) {
    mainContainerGradient2.style.backgroundImage = data[3][songMapping[songIndex]];
    mainContainerGradient.style.backgroundImage = data[3][songMapping[songIndex]];
    document.querySelector('#volume').style.backgroundImage = data[4][songMapping[songIndex]];
    document.querySelector('#text-container').style.backgroundImage = data[4][songMapping[songIndex]];
    document.querySelector('.track-list').style.backgroundImage = data[4][songMapping[songIndex]];
    progressBar.classList = [data[6][songMapping[songIndex]]];

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
  song.src = data[0][songMapping[songIndex]];
  thumbnail.src = data[1][songMapping[songIndex]];
  BG.src = data[1][songMapping[songIndex]];
  playing = true;
  playPause();
  songTitle.innerHTML = data[2][songMapping[songIndex]];
}

function previousSong() {
  songIndex--;
  if(songIndex < 0) songIndex = data[0].length-1;
  song.src = data[0][songMapping[songIndex]];
  thumbnail.src = data[1][songMapping[songIndex]];
  BG.src = data[1][songMapping[songIndex]];
  playing = true;
  playPause();
  songTitle.innerHTML = data[2][songMapping[songIndex]];
}

function updateProgressValue() {
  progressBar.max = song.duration;
  progressBar.value = song.currentTime;
  let timeCodeIndex = 0;
  for(let tm of data[5][songMapping[songIndex]]) {
    if(tm.timecode > song.currentTime) {
        break;
    }
     timeCodeIndex++;
  }
  if (song.volume < 0.05) song.volume = 0.01; 
  if (song.volume > 0.95) song.volume = 1; 
  document.querySelector(".text-expanded").innerHTML = data[5][songMapping[songIndex]][timeCodeIndex].text;
  //console.log(song.currentTime);

}

function textContainerClick() {
  document.querySelector(`#text-container`).classList.toggle("expanded");
}

function playRandomSong() {
  songMapping.sort(() => Math.random()-0.5);
  nextSong();
}

function setSong(SongIndex) {
  songIndex = SongIndex;
  song.src = data[0][songMapping[songIndex]];
  thumbnail.src = data[1][songMapping[songIndex]];
  BG.src = data[1][songMapping[songIndex]];
  songTitle.innerHTML = data[2][songMapping[songIndex]];
  mainContainerGradient2.style.backgroundImage = data[3][songMapping[songIndex]];
  mainContainerGradient.style.backgroundImage = data[3][songMapping[songIndex]];
  document.querySelector('#volume').style.backgroundImage = data[4][songMapping[songIndex]];
  document.querySelector('#text-container').style.backgroundImage = data[4][songMapping[songIndex]];
  document.querySelector('.track-list').style.backgroundImage = data[4][songMapping[songIndex]];
  progressBar.classList = [data[6][songMapping[songIndex]]];
  song.play();
  pp.src = "../pictures/pause-button.png";
  playing = false;
  thumbnail.style.width = "160%";
}

document.addEventListener('keyup', event => {
  if (event.code === 'Space') {
    playPause();
  }
});

document.addEventListener('keyup', event => {
  if (event.code === 'ArrowLeft') {
    song.currentTime -= 5;
  }
});

document.addEventListener('keyup', event => {
  if (event.code === 'ArrowRight') {
    song.currentTime += 5;
  }
});

document.addEventListener('keyup', event => {
  if (event.code === 'ArrowUp') {
    document.getElementById('song').volume+=0.05;
  }
});

document.addEventListener('keyup', event => {
  if (event.code === 'ArrowDown') {
    document.getElementById('song').volume-=0.05;
  }
});

document.addEventListener('keyup', event => {
  if (event.code === 'KeyA') {
    previousSong();
  }
});

document.addEventListener('keyup', event => {
  if (event.code === 'KeyD') {
    nextSong();
  }
});

document.addEventListener('keyup', event => {
  if (event.code === 'KeyW') {
    document.getElementById('song').volume+=0.05;
  }
});

document.addEventListener('keyup', event => {
  if (event.code === 'KeyS') {
    document.getElementById('song').volume-=0.05;
  }
});

document.addEventListener('keyup', event => {
  if (event.code === 'KeyR') {
    playRandomSong();
  }
});

setInterval(updateProgressValue, 500);

