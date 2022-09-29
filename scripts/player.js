const songTitle = document.querySelector(".song-title");
const thumbnail = document.querySelector("#thumbnail");
const progressBar = document.querySelector("#progressBar");
const mainContainerGradient = document.querySelector(".box");
const mainContainerGradient2 = document.querySelector(".song-name");
const song = document.querySelector("#song");
const BG = document.querySelector("#BG");
const pp = document.querySelector("#pp");

let nextSongPlay = false;
let playing = true;
let songIndex = 0;

const songs = [
  "../songs/stepgod - schizophren.mp3",
  "../songs/stepgod - koma.mp3",
  "../songs/stepgod - rosen.mp3",
  "../songs/stepgod & Laer Xirtam - 7 tage.mp3",
  "../songs/stepgod - renn weg.mp3",
  "../songs/stepgod – winter.mp3",
  "../songs/stepgod - juwelen.mp3",
  "../songs/stepgod - taub.mp3",
  "../songs/stepgod - träume.mp3",
  "../songs/stepgod - trance.mp3",
  "../songs/stepgod - moonlight.mp3",
  "../songs/stepgod - narben.mp3",
  "../songs/stepgod - gemeinsam einsam.mp3",
  "../songs/stepgod - fake depressed.mp3",
  "../songs/stepgod - sinner.mp3"
];

const thumbnails = [
  "../pictures/main_vanica.jpg",
  "../pictures/main_vanica.jpg",
  "../pictures/cool_vanica.jpg",
  "../pictures/golden_vanica.jpg",
  "../pictures/cool_vanica.jpg",
  "../pictures/golden_vanica.jpg",
  "../pictures/cool_vanica.jpg",
  "../pictures/main_vanica.jpg",
  "../pictures/main_vanica.jpg",
  "../pictures/main_vanica.jpg",
  "../pictures/cool_vanica.jpg",
  "../pictures/main_vanica.jpg",
  "../pictures/main_vanica.jpg",
  "../pictures/main_vanica.jpg",
  "../pictures/cool_vanica.jpg"
];

const songNames = [
    "stepgod - schizophren",
    "stepgod - koma",
    "stepgod - rosen",
    "stepgod & Laer Xirtam - 7 tage",
    "stepgod - renn weg",
    "stepgod – winter",
    "stepgod - juwelen",
    "stepgod - taub",
    "stepgod - träume.mp3",
    "stepgod - trance.mp3",
    "stepgod - moonlight.mp3",
    "stepgod - narben.mp3",
    "stepgod - gemeinsam einsam.mp3",
    "stepgod - fake depressed.mp3",
    "stepgod - sinner.mp3"
];

const songGradients = [
  'linear-gradient(45deg, rgb(0,0,0) 100%, rgb(0,0,0) 100%)', 'linear-gradient(45deg, rgb(0,0,0) 100%, rgb(0,0,0) 100%)',
  'linear-gradient(45deg, rgb(72, 0, 139), rgb(0, 199, 149))', 'linear-gradient(45deg, rgb(255 233 52), rgb(153 99 19))',
  'linear-gradient(45deg, rgb(72, 0, 139), rgb(0, 199, 149))', 'linear-gradient(45deg, rgb(255 233 52), rgb(153 99 19))',
  'linear-gradient(45deg, rgb(72, 0, 139), rgb(0, 199, 149))', 'linear-gradient(45deg, rgb(0,0,0) 100%, rgb(0,0,0) 100%)',
  'linear-gradient(45deg, rgb(0,0,0) 100%, rgb(0,0,0) 100%)', 'linear-gradient(45deg, rgb(0,0,0) 100%, rgb(0,0,0) 100%)',
  'linear-gradient(45deg, rgb(72, 0, 139), rgb(0, 199, 149))', 'linear-gradient(45deg, rgb(0,0,0) 100%, rgb(0,0,0) 100%)',
  'linear-gradient(45deg, rgb(0,0,0) 100%, rgb(0,0,0) 100%)', 'linear-gradient(45deg, rgb(0,0,0) 100%, rgb(0,0,0) 100%)',
  'linear-gradient(45deg, rgb(72, 0, 139), rgb(0, 199, 149))'
];

const buttonGradient = [
  'linear-gradient(45deg, rgb(0,0,0) 100%, rgb(0,0,0) 100%)', 'linear-gradient(45deg, rgb(0,0,0) 100%, rgb(0,0,0) 100%)',
  'linear-gradient(235deg, rgb(72, 0, 139), rgb(0, 199, 149))', 'linear-gradient(45deg, rgb(255 233 52), rgb(153 99 19))',
  'linear-gradient(235deg, rgb(72, 0, 139), rgb(0, 199, 149))', 'linear-gradient(45deg, rgb(255 233 52), rgb(153 99 19))',
  'linear-gradient(235deg, rgb(72, 0, 139), rgb(0, 199, 149))', 'linear-gradient(45deg, rgb(0,0,0) 100%, rgb(0,0,0) 100%)',
  'linear-gradient(45deg, rgb(0,0,0) 100%, rgb(0,0,0) 100%)', 'linear-gradient(45deg, rgb(0,0,0) 100%, rgb(0,0,0) 100%)',
  'linear-gradient(235deg, rgb(72, 0, 139), rgb(0, 199, 149))', 'linear-gradient(45deg, rgb(0,0,0) 100%, rgb(0,0,0) 100%)',
  'linear-gradient(45deg, rgb(0,0,0) 100%, rgb(0,0,0) 100%)', 'linear-gradient(45deg, rgb(0,0,0) 100%, rgb(0,0,0) 100%)',
  'linear-gradient(235deg, rgb(72, 0, 139), rgb(0, 199, 149))'
];

const textMapping = [

[{timecode:0.1, text: 
``},{timecode:16.09, text: 
`Ich bin schizophren, kann den Shit nicht mehr seh'n<br>
Ich bin schizophren, wann wird der Shit geh'n?<br>`}, {timecode: 47.85, text:
`Ich lauf' alleine herum, sehe kein'n um mich rum<br>
Doch ich fühl' mich verfolgt, hab' den Shit nie gewollt<br>
Lauf' herum, seh' Gesichter, mein altes Ich ist nicht da<br>
Ich bin schizophren, mein altes Ich wird mir fehl'n<br>`}, {timecode: 64.41, text: 
`Nehme kaum noch Drugs, doch ich habe eine Psychose<br>
Habe einen Knacks, fühle mich so wertlos, ey<br>
Mein Demon hinter mir und er bleibt bei mir<br>
Er bleibt der Einzige, er und ich, wir wurden zum Wir<br>`},{timecode: 80, text: 
`Sag', "Gib keinen Fuck", doch es fuckt mich ab<br>
Bin so ein Wrack, schau' vom Hochhaus hinab<br>
Die Stimmen sagen mir, ich soll aufgeben<br>
Die Stimmen sagen mir, ich soll draufgehen<br>`}, {timecode: 95, text:
`Ich bin schizophren, kann den Shit nicht mehr seh'n<br>
Ich bin schizophren, wann wird der Shit geh'n?<br>`}, {timecode: 128, text:
`Ich lauf' alleine herum, sehe kein'n um mich rum<br>
Doch ich fühl' mich verfolgt, hab' den Shit nie gewollt<br>
Lauf' herum, seh' Gesichter, mein altes Ich ist nicht da<br>
Ich bin schizophren, mein altes Ich wird mir fehl'n<br>`}, {timecode: 144.21, text:
`Nein, ich bring' mich bald um, denn ich find' keinen Grund<br>
Weiterzumachen, denn das alles lässt mich zerfall'n<br>
Steh' mir selber im Weg, taumel' auf einem Steg<br>
Weiß nicht mehr, was stimmt, die Stimmen woll'n, dass ich spring'<br>`}, {timecode: 160, text:
`Trau' mich nicht mehr raus, bin nie allein<br>
Versink' im Grau'n, bin seit Tagen am wein'n<br>
Die Stimmen sagen mir, ich soll jetzt gehen<br>
Die Stimmen sagen mir, ich soll aufgeben<br>`}, {timecode: 175, text:
`Ich bin schizophren, kann den Shit nicht mehr seh'n<br>
Ich bin schizophren, wann wird der Shit geh'n?<br>`}, {timecode: 230, text:
`Ich lauf' alleine herum, sehe kein'n um mich rum<br>
Doch ich fühl' mich verfolgt, hab' den Shit nie gewollt<br>
Lauf' herum, seh' Gesichter, mein altes Ich ist nicht da<br>
Ich bin schizophren, mein altes Ich wird mir fehl'n<br>`}],

[{timecode:34.5, text: 
``},{timecode:87, text: 
`Hoffe jeden Abend, dass ich heute nicht sterb'<br>
Aber nimm diese Drogen, damit ich nichts merk'<br>
Ich bin jeden Tag dem Tod nah<br>
Weil ich sauf' mich fast ins Koma<br>`}, {timecode:96, text: 
`Gedanken halten mich wach<br>
Bitte gib mir den Schnaps<br>
Und ich exe mein Glas<br>
In der Hoffnung, ich schlaf'<br>`},{timecode:105, text: 
`Und ich kann mir selber nicht verzeih'n<br>
Denn ich hasse mich noch am meisten<br>
Ich werd' mein Ziel nicht erreichen<br>
Meine Lasten werden mich begleiten<br>`},{timecode:113, text: 
`Also gib mir den Gin<br>
Ich werd' taub oder blind<br>
Und ich frag' mich, wohin<br>
Geht die Reise noch hin?<br>`},{timecode:123, text: 
`Also gib mir den Gin<br>
Ich werd' taub oder blind<br>
Und ich frag' mich, wohin<br>
Bring' mich all diese Stimm'n?<br>`},{timecode:135, text: 
``},{timecode:151, text: 
`Und ich falle fast in Ohnmacht (Ohnmacht)<br>
Trinke drei Flaschen pro Nacht (Pro Nacht)<br>
Kriegst mich nicht mehr wach, ich bin im Koma<br>
Aber bitte ruf nicht den Notarzt<br>`},{timecode:168, text: 
`Hoffe jeden Abend, dass ich heute nicht sterb'<br>
Aber nimm diese Drogen, damit ich nichts merk'<br>
Ich bin jeden Tag dem Tod nah (Tod nah)<br>
Weil ich sauf' mich fast ins Koma (Koma)<br>`},{timecode:186.62, text: 
`Hoffe jeden Abend, dass ich heute nicht sterb'<br>
Aber nimm diese Drogen, damit ich nix merk'<br>
Ich bin jeden Tag dem Tod nah (Tod nah)<br>
Weil ich sauf' mich fast ins Koma (Koma)<br>`},{timecode:210, text: ``}],

[{timecode:27.12, text: 
  ``},{timecode:41, text: 
`Auf dem Tisch, da liegen Rosen<br>
Daneben, da liegen Drogen<br>
Sag, wann hab'n wir uns verloren?<br>
(Sag, wann hab'n wir uns verloren, Shawty?)<br>`}, {timecode:55, text: 
`Bist die Blume, die die Leere in mir füllt<br>
Auch wenn jeder meint, ich bin der Junge, der nichts fühlt<br>
Doch du zeigst mir, dass es nicht stimmt<br>
Jetzt bin ich der, der den Schmerz hinnimmt<br>`},{timecode:68.5, text: 
`Doch ich fühl' nix mehr, nein, ich fühl' nix mehr<br>
Seitdem du weg bist, Baby, ja, ich fühle nix mehr<br>
Nein, ich fühl' nix mehr, nehm' viele Drogen, yeah<br>
Fühlt sich an, als würde ich ertrinken in 'nem Meer<br>`},{timecode:71.5, text: 
`Rosen sind für dich<br>
(Sind für dich)<br>`},{timecode:75, text: 
`Drogen sind für mich<br>
(Sind für mich)<br>`},{timecode:78.5, text: 
`Rosen sind für dich<br>
(Sind für dich)<br>`},{timecode:82, text: 
`Drogen sind für mich<br>
(Sind für mich)<br>`},{timecode:95.5, text: 
`Auf dem Tisch, da liegen Rosen<br>
Daneben, da liegen Drogen<br>
Sag, wann hab'n wir uns verloren?<br>
(Sag, wann hab'n wir uns verloren, Shawty?)<br>`},{timecode:120, text: 
`Auf dem Tisch, da liegen Rosen<br>
Daneben, da liegen Drogen<br>
Sag, wann hab'n wir uns verloren?<br>
(Sag, wann hab'n wir uns verloren, Shawty?)<br>`},{timecode:124.5, text: 
`Auf dem Tisch, da liegen Rosen<br>
Daneben, da liegen Drogen<br>
Sag, wann hab'n wir uns verloren?<br>
(Sag, wann hab'n wir uns verloren, Shawty?)<br>`},{timecode:159, text: ``},{timecode:180, text: 
`Auf dem Tisch, da liegen Rosen<br>
Daneben, da liegen Drogen<br>
Sag, wann hab'n wir uns verloren?<br>`}],
    
    [],[],[],[],[],[],[],[],[],[],[],[]]

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
  document.querySelector(".text-paragraph").innerHTML = textMapping[songIndex][timeCodeIndex].text
  console.log(song.currentTime)

}

function playRandomSong() {
  let randomSong = Math.floor(Math.random() * 14) + 1;
  for(let i = 0; i < randomSong; i++) {
    nextSong();
  }
}

setInterval(updateProgressValue, 300);

