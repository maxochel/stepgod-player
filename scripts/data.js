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

let data = [

  //songs
  [
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
    "../songs/stepgod - sinner.mp3",
    "../songs/stepgod - zufall.mp3"
  ],
  //thumbnails
  [
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
"../pictures/cool_vanica.jpg",
"../pictures/main_vanica.jpg"
  ],
  //songNames
  [
    "schizophren",
    "koma",
    "rosen",
    "7 tage",
    "renn weg",
    "winter",
    "juwelen",
    "taub",
    "träume",
    "trance",
    "moonlight",
    "narben",
    "gemeinsam einsam",
    "fake depressed",
    "sinner",
    "zufall"
  ],
  //songGradients
  [
'linear-gradient(45deg, rgb(0,0,0) 100%, rgb(0,0,0) 100%)', 'linear-gradient(45deg, rgb(0,0,0) 100%, rgb(0,0,0) 100%)',
'linear-gradient(45deg, rgb(72, 0, 139), rgb(0, 199, 149))', 'linear-gradient(45deg, rgb(255 233 52), rgb(153 99 19))',
'linear-gradient(45deg, rgb(72, 0, 139), rgb(0, 199, 149))', 'linear-gradient(45deg, rgb(255 233 52), rgb(153 99 19))',
'linear-gradient(45deg, rgb(72, 0, 139), rgb(0, 199, 149))', 'linear-gradient(45deg, rgb(0,0,0) 100%, rgb(0,0,0) 100%)',
'linear-gradient(45deg, rgb(0,0,0) 100%, rgb(0,0,0) 100%)', 'linear-gradient(45deg, rgb(0,0,0) 100%, rgb(0,0,0) 100%)',
'linear-gradient(45deg, rgb(72, 0, 139), rgb(0, 199, 149))', 'linear-gradient(45deg, rgb(0,0,0) 100%, rgb(0,0,0) 100%)',
'linear-gradient(45deg, rgb(0,0,0) 100%, rgb(0,0,0) 100%)', 'linear-gradient(45deg, rgb(0,0,0) 100%, rgb(0,0,0) 100%)',
'linear-gradient(45deg, rgb(72, 0, 139), rgb(0, 199, 149))','linear-gradient(45deg, rgb(0,0,0) 100%, rgb(0,0,0) 100%)'
  ],
  //buttonGradients
  [
'linear-gradient(45deg, rgb(0,0,0) 100%, rgb(0,0,0) 100%)', 'linear-gradient(45deg, rgb(0,0,0) 100%, rgb(0,0,0) 100%)',
'linear-gradient(235deg, rgb(72, 0, 139), rgb(0, 199, 149))', 'linear-gradient(45deg, rgb(255 233 52), rgb(153 99 19))',
'linear-gradient(235deg, rgb(72, 0, 139), rgb(0, 199, 149))', 'linear-gradient(45deg, rgb(255 233 52), rgb(153 99 19))',
'linear-gradient(235deg, rgb(72, 0, 139), rgb(0, 199, 149))', 'linear-gradient(45deg, rgb(0,0,0) 100%, rgb(0,0,0) 100%)',
'linear-gradient(45deg, rgb(0,0,0) 100%, rgb(0,0,0) 100%)', 'linear-gradient(45deg, rgb(0,0,0) 100%, rgb(0,0,0) 100%)',
'linear-gradient(235deg, rgb(72, 0, 139), rgb(0, 199, 149))', 'linear-gradient(45deg, rgb(0,0,0) 100%, rgb(0,0,0) 100%)',
'linear-gradient(45deg, rgb(0,0,0) 100%, rgb(0,0,0) 100%)', 'linear-gradient(45deg, rgb(0,0,0) 100%, rgb(0,0,0) 100%)',
'linear-gradient(235deg, rgb(72, 0, 139), rgb(0, 199, 149))','linear-gradient(45deg, rgb(0,0,0) 100%, rgb(0,0,0) 100%)'
  ],
  //textMapping
  [
  //schizophren
  [{timecode:0.4, text: 
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
  //koma
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
  //rosen
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
  //7 tage
  [{timecode:7.52, text: 
    ``},{timecode:35.05, text:
    `Sieben Tage drunk, die ganze Woche nur Party<br>
    Zwei Tapes in der Nacht, weil ich finde den Schlaf nie<br>
    Wieder todes drunk<br>
    Am Rosenthaler Platz<br>`},{timecode:39.1, text:
    `Wieder todes drunk<br>
    Am Rosenthaler Platz<br>`},{timecode:46.3, text:
    `Sieben Tage wach, ist schon lang keine Phase mehr<br>
    Ich rauch wieder Kette und Laer ext eine Flasche leer<br>`},{timecode:50, text:
    `Sie bricht mir mein Herz<br>
    Shit, ich kann nicht mehr, kann nicht mehr<br>`},{timecode:54, text:
    `Sie bricht mir mein Herz<br>
    Shit, ich lach nicht mehr, lach nicht mehr<br>`},{timecode:62, text:
    `Broken Heart, in Berlin<br>
    Nimm 'ne Kippe und zieh<br>
    Meine Welt drehte sich<br>
    All die Jahre um sie<br>`},{timecode:69.5, text:
    `Und ich zieh, zieh, zieh<br>
    Und ich zieh, zieh, zieh<br>
    Und ich zieh, zieh, zieh<br>
    Und ich zieh, zieh, zieh<br>`},{timecode:81.3, text:
    `Sieben Tage drunk, die ganze Woche nur Party<br>
    Zwei Tapes in der Nacht, weil ich finde den Schlaf nie<br>
    Wieder todes drunk<br>
    Am Rosenthaler Platz<br>`},{timecode:85, text:
    `Wieder todes drunk<br>
    Am Rosenthaler Platz<br>`},{timecode:100.07, text:
    `Ich bin immer wach, ich bin immer wieder drunk<br>
    Treffe alle meine Jungs am Rosenthaler Platz<br>
    Ich bin wieder viel zu Hacke<br>
    Aber schenk' mir noch was nach<br>
    Und mein Herz ist viel zu broken<br>
    Deshalb sauf' ich ganze Nacht`},{timecode:107.66, text:
    `Ich bin die ganze Nacht wieder nur drunk<br>
    Fuck mich nicht ab, man, ich brauche mehr Alk<br>
    Zieh von der Kippe, vergesse was war<br>
    Schreibe 'ne Message doch schicke nichts ab<br>`},{timecode:108.7, text:
    `ab<br>`},{timecode:116, text:
    `Ich betäube mich und komme nicht mehr klar<br>
    Deshalb bin ich jede Nacht am Rosenthaler Platz<br>`},{timecode:127.8, text:
    `Sieben Tage drunk, die ganze Woche nur Party<br>
    Zwei Tapes in der Nacht, weil ich finde den Schlaf nie<br>
    Wieder todes drunk<br>
    Am Rosenthaler Platz<br>`},{timecode:145, text:
    `Wieder todes drunk<br>
    Am Rosenthaler Platz<br>`}],
  //renn weg
  [{timecode:43.22, text: 
    ``},{timecode:53.2, text: 
    `Renn' weg von den Feelings, die ich mal hatte<br>
    Renn' weg vor mein'n Zielen, weil ich's niemals schaffe<br>
    Renn' weg vor mir selber<br>
    Und ich renn' weg vor all mein'n Problemen<br>
    Die mich jede gottverdammte Nacht plagen<br>`},{timecode:63.2, text: 
    `Und ich renn', renn', renn'<br>
    Doch ich komm' nicht davon<br>
    Und ich renn', renn', renn'<br>
    Doch ich komm' nicht davon<br>`},{timecode:73.2, text: 
    `Renn' weg von den Feelings, die ich mal hatte<br>
    Renn' weg vor mein'n Zielen, weil ich's niemals schaffe<br>
    Renn' weg vor mir selber<br>
    Und ich renn' weg vor all mein'n Problemen<br>
    Die mich jede gottverdammte Nacht plagen<br>`},{timecode:83.2, text: 
    `Und ich renn', renn', renn'<br>
    Doch ich komm' nicht davon<br>
    Und ich renn', renn', renn'<br>
    Doch ich komm' nicht davon<br>`},{timecode:93.62, text: 
    `Ich renn' weg vor der Zeit<br>
    Bin gefangen im Raum<br>
    Und es tut mir echt leid<br>
    Doch du kennst mich nur kaum<br>`},{timecode:99, text: 
    `Kann mich dir nicht öffnen<br>
    Und ich werd' es niemals können<br>
    Auch wenn ich es wollen würde<br>
    Mann, ich scheitere daran<br>`},{timecode:104.1, text: 
    `Merke, wenn ich Feelings catche<br>
    Distanzier' ich mich sofort von denen<br>
    Vielleicht werd' ich niemals ein echter Mann<br>`},{timecode:114.04, text: 
    `Und ich renn', renn', renn'<br>
    Doch ich weiß nicht wovor<br>
    Hab' ich Angst vorm Leben<br>
    Oder vor dem Tod?<br>`},{timecode:115.3, text: 
    `Und ich renn', renn', renn'<br>
    Doch ich weiß nicht wovor<br>
    Und ich weiß nicht<br>
    Was mir auf dem Weg noch droht<br>`},{timecode:124, text: 
    `Und ich renn', renn', renn'<br>
    Doch ich weiß nicht wovor<br>
    Und ich weiß nicht<br>
    Was mir auf dem Weg noch droht<br>`},{timecode:144.2, text: 
    ``},{timecode:154.2, text: 
    `Renn' weg von den Feelings, die ich mal hatte<br>
    Renn' weg vor mein'n Zielen, weil ich's niemals schaffe<br>
    Renn' weg vor mir selber<br>
    Und ich renn' weg vor all mein'n Problemen<br>
    Die mich jede gottverdammte Nacht plagen<br>`},{timecode:164.5, text: 
    `Und ich renn', renn', renn'<br>
    Doch ich komm' nicht davon<br>
    Und ich renn', renn', renn'<br>
    Doch ich komm' nicht davon<br>`},{timecode:174.68, text: 
    `Renn' weg von den Feelings, die ich mal hatte<br>
    Renn' weg vor mein'n Zielen, weil ich's niemals schaffe<br>
    Renn' weg vor mir selber<br>
    Und ich renn' weg vor all mein'n Problemen<br>
    Die mich jede gottverdammte Nacht plagen<br>`},{timecode:184.4, text: 
    `Und ich renn', renn', renn'<br>
    Doch ich komm' nicht davon<br>
    Und ich renn', renn', renn'<br>
    Doch ich komm' nicht davon<br>`},{timecode:210, text: 
    ``}],
  //winter
  [{timecode:15, text: 
    ``},{timecode:26.15, text: 
    `Brachte dir den Sommer im Winter<br>
    Denn du kanntest nur den Dezember<br>
    Brachtest mir mein Herz, doch kein Wunder<br>
    Denn am Ende trag ich immer die Schuld dran<br>`},{timecode:36.7, text: 
    `Hast mein Herz geklaut<br>
    Und es dann versaut<br>
    Hab dir jedes gottverdammte Wort ohne Zweifeln geglaubt<br>`},{timecode:47.9, text: 
    `Hast mein Herz geklaut<br>
    Und es dann versaut<br>
    Hab dir jedes gottverdammte Wort ohne Zweifeln geglaubt<br>`},{timecode:49.5, text: 
    ``},{timecode:53.55, text: 
    `Hast mein Herz geklaut, geklaut<br>`},{timecode:58.9, text: 
    `Und es dann versaut<br>`},{timecode:65.5, text: 
    `Hast mein Herz geklaut, geklaut<br>
    Und es dann versaut<br>
    Und es dann versaut, versaut<br>`},{timecode:69.5, text: 
    `Hast mein Herz geklaut, geklaut<br>
    Und es dann versaut<br>
    Und es dann versaut, versaut<br>`},{timecode:80, text: 
    `Nails schwarz wie meine Zukunft<br>
    Ging es mir schlecht, warst du meine Zuflucht<br>
    Ist doch ganz egal was in mei'm Blut pumpt<br>
    Auch wenn ich passed out geh, komm ich nie zur Vernunft<br>`},{timecode:91.5, text: 
    `Bist jetzt unterwegs, wie ein Ghost in mein' Dreams<br>
    Heute bin ich mir sicher, du hast mich nie geliebt<br>
    Hast mein Herz geklaut, so als wärst du ein Dieb<br>
    Doch wer weiß, vielleicht hab ich den ganzen Schmerz verdient<br>`},{timecode:102.23, text: 
    `Hast mein Herz geklaut<br>
    Und es dann versaut<br>
    Hab dir jedes gottverdammte Wort ohne Zweifeln geglaubt<br>`},{timecode:104.1, text: 
    ``},{timecode:108, text: 
    `Hast mein Herz geklaut, geklaut<br>`},{timecode:113.5, text: 
    `Und es dann versaut<br>`},{timecode:124.8, text: 
    `Hast mein Herz geklaut, geklaut<br>
    Und es dann versaut<br>
    Und es dann versaut, versaut<br>`},{timecode:135, text: 
    ``}],
  //juwelen
  [{timecode:14, text: 
    ``},{timecode:28.8, text: 
    `Kann nicht schlafen, bin ich nicht in meinem Zimmer voller Rauch<br>
    Früher nicht geschätzt, doch du bist, was ich heute brauch'<br>
    Waren glücklich, brauchten keine teuren Juwelen<br>
    In mei'm Zimmer Wolken, doch es fängt nicht an zu regnen<br>`},{timecode:43, text: 
    `Kann nicht schlafen, bin ich nicht in meinem Zimmer voller Rauch<br>
    Früher nicht geschätzt, doch du bist, was ich heute brauch'<br>
    Waren glücklich, brauchten keine teuren Juwelen<br>
    In mei'm Zimmer Wolken, doch es fängt nicht an zu regnen<br>`},{timecode:57.2, text: 
    `Seit Tagen kein Tageslicht mehr geseh'n, halte Abstand<br>
    Unser Film ist lange schon vorbei, wir sind beim Abspann<br>
    Frage mich zwei Fragen und zwar, "Trägst du unser Armband?"<br>
    Und ich frage mich, wann es denn endlich für dich klar stand<br>`},{timecode:70.6, text: 
    `Dass du einen andren Mann liebst<br>
    Und dafür mich all die Jahre anlügst<br>
    Dass du mit 'nem andren Mann fickst<br>
    Und dafür mein Herz in zwei brichst<br>`},{timecode:85, text: 
    `Kann nicht schlafen, bin ich nicht in meinem Zimmer voller Rauch<br>
    Früher nicht geschätzt, doch du bist, was ich heute brauch'<br>
    Waren glücklich, brauchten keine teuren Juwelen<br>
    In mei'm Zimmer Wolken, doch es fängt nicht an zu regnen<br>`},{timecode:99.53, text: 
    `Kann nicht schlafen, bin ich nicht in meinem Zimmer voller Rauch<br>
    Früher nicht geschätzt, doch du bist, was ich heute brauch'<br>
    Waren glücklich, brauchten keine teuren Juwelen<br>
    In mei'm Zimmer Wolken, doch es fängt nicht an zu regnen<br>
    `},{timecode:115, text: 
    ``}],
  //taub
  [{timecode:12.6, text: 
    ``},{timecode:22.9, text: 
    `Hasse es zu lieben und ich liebe es zu hassen<br>
    Seit paar Jahren ist es schwer, mich noch am Leben zu lassen<br>
    Dauert nicht mehr lang und ich werde vor Wut noch platzen<br>`},{timecode:23.7, text: 
    ``},{timecode:25.6, text: 
    `Ja, ja, ja<br>`},{timecode:37.85, text: 
    `Tagein, tagaus<br>
    Alk rein, nachts raus<br>
    Lern' nie daraus<br>
    Feelings sind taub<br>`},{timecode:50.3, text: 
    `Bin ein Taugenix und ich trau' mich nicht<br>
    Das sind die Worte, die ich jeden Tag zu hören krieg'<br>
    Bin ein Niemand, schaff' es niemals<br>
    Aber sag mir, warum stream'n sie meine Lieder?<br>`},{timecode:63.01, text: 
    `Sag mir nicht, "Ich hasse dich", ich glaub's nicht<br>
    Vor paar Jahren war ich alles für dich<br>
    Heute sipp' ich Gift und ficke 'ne Bitch<br>
    Damit ich dich vergiss`},{timecode:75.6, text: 
    `Heute fickst du mit 'nem Random und ich kann nix gegen tun<br>
    Bin nicht besser, hab' 'ne Bad Bitch neben mir in meinem Stu'<br>
    Gedanken nicht bei ihr, denn ich frag' mich, "Was machst gerade du?"<br>
    Drunk as fuck, schreib' 'ne Nachricht,<br>doch ich schick' sie dir nicht mehr zu<br>`},{timecode:88, text: 
    `Packe meine sachen, doch ich nehme nix mit<br>
    On my way, kalte Welt, der boden zu rutschig<br>
    Mein Demon hält mich fest und sagt, er sorgt sich gut um mich<br>
    Keine Liebe mehr, wann trau' ich mich und setz' den Schlussstrich?<br>`},{timecode:98.1, text: 
    `Hasse es zu lieben und ich liebe es zu hassen<br>
    Seit paar Jahren ist es schwer, mich noch am Leben zu lassen<br>
    Dauert nicht mehr lang und ich werde vor Wut noch platzen<br>`},{timecode:99.1, text: 
    ``},{timecode:100.75, text: 
    `Ja, ja, ja, ja<br>`},{timecode:113.2, text: 
    `Tagein, tagaus<br>
    Alk rein, nachts raus<br>
    Lern' nie daraus<br>
    Feelings sind taub<br>`},{timecode:130, text: 
    ``}],
  //träume
  [{timecode:14, text: 
    ``},{timecode:27.7, text: 
    `Heb' mein Glas auf die Träume, die gefallen sind<br>
    Ich hab' Scars in der Brust, wo dein Name steht<br>
    Krieg' nur Hass, frag' mich, wann endlich mein Glück beginnt<br>
    Bin mir lange nicht mehr sicher, was mein Leben mir bringt<br>`},{timecode:41.8, text: 
    `Heb' mein Glas auf die Träume, die gefallen sind<br>
    Ich hab' Scars in der Brust, wo dein Name steht<br>
    Krieg' nur Hass, frag' mich, wann endlich mein Glück beginnt<br>
    Bin mir lange nicht mehr sicher, was mein Leben mir bringt<br>`},{timecode:55.42, text: 
    `Late-Night-Call von deinem Ex, doch du gehst nicht ran<br>
    Bin ein Wichser, denn ich habe viele Fehler begang'n<br>
    Nimm ein Glas und ich ex', vielleicht geht es ja dann<br>
    Doch ich werde wieder wasted und verliere den verstand<br>`},{timecode:68.9, text: 
    `Das ist schon seit Jahren keine Phase<br>
    Schon seit Jahren will ich aufhören zu atmen<br>
    Ich hab' daily immer wieder diese Qualen<br>
    Ich zerbrech' daran, muss ich sie weiter tragen<br>`},{timecode:83.5, text: 
    `Mache die Augen zu und hör' dein'n Nam'n<br>
    Doch wenn ich aufwache, fall' ich fast zusamm'n<br>
    Nachbarn hör'n, wie ich mein'n Spiegel einschlag'<br>
    Habe nie bemerkt, dass unsre Liebe auf dem Gleis lag<br>`}],
  //trance
  [{timecode:15.9, text: 
    ``},{timecode:31, text: 
    `(discent)<br>
    Schau' nach vorn, doch ich gehe zurück<br>
    Denke kurz nach, was passiert ist und ich werde verrückt<br>
    Hab' mich verlor'n auf der suche nach mein' eigenem glück<br>`},{timecode:45.4, text: 
    `Doch bevor ich es finde, setz' ich mir selber den strich<br>
    (ich befinde mich in trance)<br>
    Es ist nichts mehr, wie es damals war, ich leb' nur in mei'm traum<br>
    Denke kurz nach und ich schreibe es auf, merk', ich hab', dich gebraucht<br>`},{timecode:63, text: 
    `Liege auf dem boden dеs tales und schaue stehts bеrgauf<br>
    Es ist nicht mehr, wie es damals war (nicht mehr, wie es damals war)<br>
    Ich geh' passed out in ‘ner andern stadt (passed out in ‘ner andern stadt)<br>
    Wie hab' ich mein life so krass verkackt? (wie hab' ich es so verkackt?)<br>`},{timecode:68.5, text: 
    `Doch ist egal, ich mach's noch einmal, noch einmal, noch einmal, ja<br>
    Denke wie kurt, gib mir den lauf<br>
    Leben zu kurz, ich denke nicht, kaum<br>
    Leben nur drama`},{timecode:75.5, text: 
    `Lang her, dass ich klar kam<br>
    Rauche zu viel, atmen wird schwer<br>
    Leben touché, noch lebend bisher<br>
    Ich war mal nah dran<br>`},{timecode:90.7, text: 
    `Mich fickte das karma<br>
    Ich brauch' langsam eine pause, weil ich nicht mehr funktionier'<br>
    Wie sollt ich dir glauben? konnt dich nur verlier'n<br>
    Mache viele fehler, kann nicht kontrollier'n<br>`},{timecode:107.6, text: 
    `Früher gab ich wärme, heut mein herz am frier'n (discent)<br>
    Heute schmeiß' ich mein leben weg, denn hab' kein glück verdient<br>
    Meine weste ist verdreckt und es gibt kein'n, der mich liebt<br>
    Heute schmeiß' ich mein leben weg, denn hab' kein glück verdient<br>`},{timecode:121.6, text: 
    `Und es gibt kein'n, der mich liebt<br>
    Schau' nach vorn, doch ich gehe zurück<br>
    Denke kurz nach, was passiert ist und ich werde verrückt<br>
    Hab' mich verlor'n auf der suche nach mein' eigenem glück<br>`},{timecode:125.05, text: 
    `Doch bevor ich es finde, setz' ich mir selber den strich<br>`},{timecode:126.4, text: 
    `(ich befinde mich in trance)<br>`},{timecode:142.4, text: 
    `Es ist nichts mehr, wie es damals war, ich leb' nur in mei'm traum<br>
    Denke kurz nach und ich schreibe es auf, merk', ich hab', dich gebraucht<br>
    Liege auf dem boden des tales und schaue stehts bergauf (discent)<br>
    Und ich hoffe, ich komm' raus<br>`},{timecode:160, text: 
    ``}],
  //moonlight
  [{timecode:16, text: 
    ``},{timecode:23.9, text: 
    `Schau' hoch Richtung Moonlight<br>
    Ich war für dich da, jede Uhrzeit<br>
    Keine Luft, ist Gift, was in mei'm Blut treibt<br>
    Verlier' kein Wort, auch wenn ich schrei'<br>`},{timecode:31.6, text: 
    `Shawty, es tut mir so leid<br>
    Denn ich hab' dir schon viel zu oft verzeiht<br>`},{timecode:47.1, text: 
    `Schau' hoch Richtung Moonlight<br>
    Bin nicht wirklich lebend, ich muss tot sein<br>
    Keine Luft, ist Gift, was in mei'm Blut treibt<br>
    Verlier' kein Wort, auch wenn ich schrei'<br>
    Hast mich gefickt mit dein Lies<br>
    Und deshalb sind meine Feelings heut auf Eis<br>`},{timecode:54.9, text: 
    `Zeiten vergeh'n immer schnеller und ich werde immеr älter, ja,<br> immer älter, ja, ja<br>`},{timecode:61.75, text: 
    `Ich warte nicht auf mein Ende, halt' die Knarre an mein'n Schädel, ja,<br> an mein Schädel, ja<br>`},{timecode:63.65, text: 
    `In mein' Kopf, Kopf, Kopf<br>`},{timecode:65.66, text: 
    `alles schrott, schrott, schrott<br>`},{timecode:67.75, text: 
    `Bin so lost, lost, lost<br>`},{timecode:69.6, text: 
    `bitte hilf mir, Gott<br>`},{timecode:80.5, text: 
    `Bin mein Enemy, such' die Destiny<br>
    Doch ich find' sie nie<br>
    Und deshalb halt' ich eine Knarre an mein'n<br>Kopf, Kopf, Kopf, Kopf, Kopf<br>`},{timecode:84.4, text: 
    `Und ich drücke dann auf Schuss, Schuss, Schuss, Schuss, Schuss<br>`},{timecode:87.8, text: 
    `Denn ich gehe heute knock, knock, knock, knock, knock<br>`},{timecode:94, text: 
    `Damit mein Herz nicht mehr weiter pocht,<br> nicht mehr weiter pocht, ja, ja, ja<br>`},{timecode:101.5, text: 
    `Schau' hoch Richtung Moonlight<br>
    Ich war für dich da, jede Uhrzeit<br>
    Keine Luft, ist Gift, was in mei'm Blut treibt<br>
    Verlier' kein Wort, auch wenn ich schrei'<br>`},{timecode:109.5, text: 
    `Shawty, es tut mir so leid<br>
    Denn ich hab' dir schon viel zu oft verzeiht<br>`},{timecode:125, text: 
    `Schau' hoch Richtung Moonlight<br>
    Bin nicht wirklich lebend, ich muss tot sein<br>
    Keine Luft, ist Gift, was in mei'm Blut treibt<br>
    Verlier' kein Wort, auch wenn ich schrei'<br>
    Hast mich gefickt mit dein Lies<br>
    Und deshalb sind meine Feelings heut auf Eis<br>`},{timecode:130, text: 
    `Meine Feelings sind am frier'n<br>`},{timecode:135, text: 
    `Und mein Kopf am explodier'n<br>`},{timecode:139, text: 
    `Vor paar Jahr'n warst du hier, vor paar Jahr'n warst du hier<br>`},{timecode:142, text: 
    `Vor paar Jahr'n warst du mir<br>`},{timecode:145.2, text: 
    `Doch wie soll ich's reparier'n<br>`},{timecode:149, text: 
    `Wenn du jemand andern liebst?<br>`},{timecode:153, text: 
    `Wie wirst du drauf reagier'n<br>`},{timecode:156.8, text: 
    `Wenn ich heute Abend geh'?<br>`},{timecode:164.3, text: 
    `Schau' hoch Richtung Moonlight<br>
    Ich war für dich da, jede Uhrzeit<br>
    Keine Luft, ist Gift, was in mei'm Blut treibt<br>
    Verlier' kein Wort, auch wenn ich schrei'<br>`},{timecode:172.1, text: 
    `Shawty, es tut mir so leid<br>
    Denn ich hab' dir schon viel zu oft verzeiht<br>`},{timecode:176, text: 
    `Schau' hoch Richtung Moonlight<br>
    Bin nicht wirklich lebend, ich muss tot sein<br>`},{timecode:180, text: 
    `Keine Luft, ist Gift, was in mei'm Blut treibt<br>
    Verlier' kein Wort, auch wenn ich schrei'<br>`},{timecode:187.7, text: 
    `Hast mich gefickt mit dein Lies<br>
    Und deshalb sind meine Feelings heut auf Eis<br>`},{timecode:206.8, text: 
    ``},{timecode:225, text: 
    `Schau' hoch Richtung Moonlight<br>
    Ich war für dich da, jede Uhrzeit<br>
    Keine Luft, ist Gift, was in mei'm Blut treibt<br>
    Verlier' kein Wort, auch wenn ich schrei'<br>
    Shawty, es tut mir so leid<br>
    Denn ich hab' dir schon viel zu oft verzeiht<br>`}],
  //narben
  [{timecode:14, text: 
    ``},{timecode:29, text: 
    `Sauf' mich fast ins Koma, vielleicht heilt es meine Narben<br>
    Ficke mit 'ner Random Bitch, kenn' nicht mal ihren Namen<br>
    Wollt mich dir nie öffnen, aber du hast es geschafft<br>
    Denke nur an dich zurück und ich weine mich in den Schlaf<br>`},{timecode:43.3, text: 
    `Sauf' mich fast ins Koma, vielleicht heilt es meine Narben<br>
    Ficke mit 'ner Random Bitch, kenn' nicht mal ihren Namen<br>
    Wollt mich dir nie öffnen, aber du hast es geschafft<br>
    Denke nur an dich zurück und ich weinе mich in den Schlaf<br>`},{timecode:57.4, text: 
    `Mit hundertachtzig Dingern durch diе Autobahn<br>
    Viel zu fast, seh' mein Leben an mir vorbeifahr'n<br>
    Und maybe sterb' ich tonight<br>
    Doch ist egal, wegen dir bin ich so weit<br>`},{timecode:71, text: 
    `Baby, heut ist Payday, lüg mich nicht an<br>
    War nicht der Einzige für dich, hattest noch einen Mann<br>
    Lieg' im Grab in meiner Fantasy<br>
    Und ich bin viel zu schnell in meiner Galaxy<br>`},{timecode:85.8, text: 
    `Durch dich kam'n all die Lasten endlich tragbar vor<br>
    Heut bist du gone, mein Herz wurd zum Tatort<br>
    Denn das Leben ist ein Geben und Nehmen<br>
    Ich gebe ihr mein Herz und nehme mein Leben, miss you<br>`},{timecode:100, text: 
    `Sauf' mich fast ins Koma, vielleicht heilt es meine Narben<br>
    Ficke mit 'ner Random Bitch, kenn' nicht mal ihren Namen<br>
    Wollt mich dir nie öffnen, aber du hast es geschafft<br>
    Denke nur an dich zurück und ich weine mich in den Schlaf<br>`},{timecode:114, text: 
    `Sauf' mich fast ins Koma, vielleicht heilt es meine Narben<br>
    Ficke mit 'ner Random Bitch, kenn' nicht mal ihren Namen<br>
    Wollt mich dir nie öffnen, aber du hast es geschafft<br>
    Denke nur an dich zurück und ich weine mich in den Schlaf<br>`},{timecode:132, text: 
    `Ich wein' mich in den Schlaf, ja, sie ist nicht mehr da, ja<br>
    Tausend Narben, die ich noch habe und keine hat mich gewarnt, ja<br>
    Ist egal, wer noch da war, sie ging fort und ich lag da<br>
    Fragen über Fragen, aber sie fickt noch das Karma<br>
    Du sagst, dass du mich liebst, doch du liegst in andren Arm'n<br>`},{timecode:143, text: 
    `Womit hab' ich's verdient? Fuck, du treibst mich in den Wahn<br>
    In mei'm Herzen Krieg, schwinge längst die weißen Fahn'n<br>
    Ich weiß, dass du es siehst, trotzdem hältst du nicht mehr an<br>`},{timecode:156, text: 
    `Du hältst nicht an, ich bin done, werde krank<br>
    Doch irgendwann bin ich down, smoke ein'n Blunt<br>`},{timecode:171.1, text: 
    `Sauf' mich fast ins Koma, vielleicht heilt es meine Narben<br>
    Ficke mit 'ner Random Bitch, kenn' nicht mal ihren Namen<br>
    Wollt mich dir nie öffnen, aber du hast es geschafft<br>
    Denke nur an dich zurück und ich weine mich in den Schlaf<br>`},{timecode:185.6, text: 
    `Sauf' mich fast ins Koma, vielleicht heilt es meine Narben<br>
    Ficke mit 'ner Random Bitch, kenn' nicht mal ihren Namen<br>
    Wollt mich dir nie öffnen, aber du hast es geschafft<br>
    Denke nur an dich zurück und ich weine mich in den Schlaf<br>`},{timecode:200, text: 
    ``}],
  //gemeinsam einsam
  [{timecode:4, text: 
    `(Ts-Ts-Ts-Tsurreal)<br>`},{timecode:12.5, text: 
    ``},{timecode:25.38, text: 
    `Bin ich high, bist du down, bin ich down, bist du high<br>
    Sad as fuck, in der Zeit kam keiner<br>
    Haben kaum, was noch bleibt, doch wir bleiben zu zweit<br>
    Und wir sind gemeinsam einsam<br>`},{timecode:38, text: 
    `Bin ich high, bist du down, bin ich down, bist du high<br>
    Sad as fuck, in der Zeit kam keiner<br>
    Haben kaum, was noch bleibt, doch wir bleiben zu zweit<br>
    Und wir sind gemeinsam einsam<br>`},{timecode:62.8, text: 
    `Sind gemeinsam einsam auf der Suche nach uns selber<br>
    Seit du hier warst, wird die Welt immer ein Stückchen kälter<br>
    Doch ich muss jetzt weitеr, denn wo gestern noch Zеit war<br>
    Sind heute Ziele, von denen ich immer noch keins erreicht hab'<br>
    Und es wird nicht leichter, wenn du bei mir bleibst<br>
    Sind zusammen gefang'n in der Einsamkeit<br>`},{timecode:75.6, text: 
    `Wir sind gemeinsam einsam, eingefang'n in der Einsamkeit, wo<br>
    keiner den andren hält<br>
    Sad as fuck, in der Zeit kam keiner, auch wenn wir es gebraucht<br>
    haben, doch wir leben in einer kalten Welt<br>`},{timecode:88.1, text: 
    `Bin ich high, bist du down, bin ich down, bist du high<br>
    Sad as fuck, in der Zeit kam keiner<br>
    Haben kaum, was noch bleibt, doch wir bleiben zu zweit<br>
    Und wir sind gemeinsam einsam<br>`},{timecode:100.8, text: 
    `Bin ich high, bist du down, bin ich down, bist du high<br>
    Sad as fuck, in der Zeit kam keiner<br>
    Haben kaum, was noch bleibt, doch wir bleiben zu zweit<br>
    Und wir sind gemeinsam einsam<br>`},{timecode:130, text: 
    ``}],
  //fake depressed
  [{timecode:10, text: 
    `(Ts-Ts-Ts-Tsurreal)<br>`},{timecode:27, text: 
    ``},{timecode:41.2, text: 
    `Leute sagen, ich bin fake depressiv<br>
    Aber nur weil ich meine Probleme selbst therapier', ja<br>
    Doch was wisst ihr schon davon, sich selbst zu verlier'n<br>
    Und auf der Suche nach sich selbst nur noch Hass zu verspür'n?<br>`},{timecode:54.8, text: 
    `Leute sagen, ich bin fake depressiv<br>
    Aber nur weil ich meine Probleme selbst therapier', ja<br>
    Doch was wisst ihr schon davon, sich selbst zu verlier'n<br>
    Und auf der Suche nach sich selbst nur noch Hass zu verspür'n?<br>`},{timecode:68.45, text: 
    `Hab' es mir nicht ausgesucht, so zu sein wie ich bin<br>
    Wenn ich's könnte, würd ich's ändern, doch ich krieg's nicht hin<br>
    Hass mich ruhig, laber kein'n Scheiß<br>
    Juckt mich eigentlich nicht, was du Bastard da schreibst<br>`},{timecode:82, text: 
    `Denn du kennst mich nicht, du wirst mich niemals kennenlern'n<br>
    Doch wenn du die Chance hättest, würdest du das gern ändern<br>
    Und vielleicht bring' ich mich endlich bald um<br>
    Juckt mich nicht, ob du denkst, dass ich den Scheiß fake, Bro<br>`},{timecode:95.7, text: 
    `Du weißt nicht, wie es ist<br>
    Ohne Essen auf dem tisch<br>
    Du weißt nicht, wie es ist<br>
    Sad zu sein, weil das Life dich fickt<br>`},{timecode:109.3, text: 
    `Leute sagen, ich bin fake depressiv<br>
    Aber nur weil ich meine Probleme selbst therapier', ja<br>
    Doch was wisst ihr schon davon, sich selbst zu verlier'n<br>
    Und auf der Suche nach sich selbst nur noch Hass zu verspür'n?<br>`},{timecode:123.6, text: 
    `Leute sagen, ich bin fake depressiv<br>
    Aber nur weil ich meine Probleme selbst therapier', ja<br>
    Doch was wisst ihr schon davon, sich selbst zu verlier'n<br>
    Und auf der Suche nach sich selbst nur noch Hass zu verspür'n?<br>`},{timecode:140, text: 
    ``},],
  //sinner
  [{timecode:17.2, text: 
    ``},{timecode:35, text: 
    `Neuer Tag, neue Sünde und so geht es schon seit Jahren<br>
    Und wenn jemand mich fragt, ist es nur eine Phase<br>
    Wieso ich das mache? Hab' zu viele Lasten zu tragen<br>
    Und nur so seh' ich in der dunklen Welt endlich paar Farben<br>`},{timecode:39, text: 
    `Bin kein guter Mensch<br>
    Denn hab' 'ne Sünde in der Bag<br>`},{timecode:43.5, text: 
    `Bin kein guter Mensch<br>
    Kapuze auf, halt' mich bedeckt<br>`},{timecode:47.9, text: 
    `Bin kein guter Mеnsch<br>
    Kann nicht clean sein, hab' Blut gelеckt<br>`},{timecode:52.1, text: 
    `Bin kein guter Mensch<br>
    Bin ein Sinner und bald weg<br>`},{timecode:65, text: 
    `Bin ein schlechtes Vorbild, denn ich bin ein Sinner<br>
    Ein Uhr mittags und ich geh' passed out in meinem Zimmer<br>
    Bin ein schlechtes Vorbild, denn ich bin ein Sinner<br>
    Breche Herzen, doch es juckt mich nicht, denn ich fühl' nix mehr<br>`},{timecode:70.8, text: 
    `Bin ein schlechtes Vorbild, denn ich bin ein Sinner<br>
    Ein Uhr mittags und ich geh' passed out in meinem Zimmer<br>
    Bin ein schlechtes Vorbild, denn ich bin ein Sinner<br>
    Breche Herzen, doch es juckt mich nicht, denn ich fühl' nix mehr<br>`},{timecode:75.6, text: 
    `Außer Hass in mir<br>`},{timecode:86.9, text: 
    `Sag, was ist mit mir los?<br>
    Leb' ein'n Film wie im Kino<br>
    Laufe durch die Straßen wie 'ne Leiche<br>
    Und merk' langsam, dieser Scheiß hier bringt mich noch um<br>`},{timecode:104, text: 
    `Schon seit längerem kein WhatsApp, isoliere mich selbst<br>
    24/7 dem Tod nah, weil mich nix mehr hier hält<br>
    Verliere meinen Verstand<br>
    Nimm nicht ernst, was ich sag'<br>
    Denn ich bin doch nur ein Sinner mit einem ganz großen knacks<br>`},{timecode:121.6, text: 
    `Bin ein schlechtes Vorbild, denn ich bin ein Sinner<br>
    Ein Uhr mittags und ich geh' passed out in meinem Zimmer<br>
    Bin ein schlechtes Vorbild, denn ich bin ein Sinner<br>
    Breche Herzen, doch es juckt mich nicht, denn ich fühl' nix mehr<br>`},{timecode:136.9, text: 
    ``},{timecode:138.8, text: 
    `(You gotta go)`},{timecode:145.2, text: 
    `Bin ein schlechtes Vorbild, denn ich bin ein Sinner<br>
    Ein Uhr mittags und ich geh' passed out in meinem Zimmer<br>
    Bin ein schlechtes Vorbild, denn ich bin ein Sinner<br>
    Breche Herzen, doch es juckt mich nicht, denn ich fühl' nix mehr<br>`},{timecode:174.2, text: 
    `Bin ein schlechtes Vorbild, denn ich bin ein Sinner<br>
    Ein Uhr mittags und ich geh' passed out in meinem Zimmer<br>
    Bin ein schlechtes Vorbild, denn ich bin ein Sinner<br>
    Breche Herzen, doch es juckt mich nicht, denn ich fühl' nix mehr<br>`},{timecode:185, text: 
    ``}],
  //zufall
  [{timecode:6, text: 
    ``},{timecode:8, text: 
    `(Ts-Ts-Ts-Tsurreal)<br>`},{timecode:27.7, text: 
    ``},{timecode:41.55, text: 
    `Bin am worken, damit ihr es endlich gut habt<br>
    Hustle den ganzen Tag, lass' nix mehr dem Zufall<br>
    Und vielleicht fall' ich bald um<br>
    Doch ich war zu lang schon stumm<br>`},{timecode:55.4, text: 
    `Bin am worken, damit ihr es endlich gut habt<br>
    Hustle den ganzen Tag, lass' nix mehr dem Zufall<br>
    Und vielleicht fall' ich bald um<br>
    Doch ich war zu lang schon stumm<br>`},{timecode:69, text: 
    `In der Schulzeit wurd ich ausgelacht, für was ich bin<br>
    Heute sind das die Leute, die meine Lieder stream'n<br>
    Und ich wusste, es wird nie einfach<br>
    Weil für das Leben gibt еs keine Freifahrt<br>`},{timecode:83.3, text: 
    `Doch ich hab' еs ausgesucht, damit ihr's besser habt<br>
    Damit meine Fam nie wieder mehr die Geldnot plagt<br>
    Damit ich sagen kann, „Ich hab's geschafft<br>
    Heute Hype, damals wurde ich ausgelacht“<br>`},{timecode:96.9, text: 
    `Hatte 'nen Dream, zog nach Berlin<br>
    Bin am brenn'n so wie Benzin<br>
    Hatte 'nen Dream, zog nach Berlin<br>
    Ließ meine Fam ganz allein steh'n<br>`},{timecode:110.7, text: 
    `Bin am worken, damit ihr es endlich gut habt<br>
    Hustle den ganzen Tag, lass' nix mehr dem Zufall<br>
    Und vielleicht fall' ich bald um<br>
    Doch ich war zu lang schon stumm<br>`},{timecode:124.5, text: 
    `Bin am worken, damit ihr es endlich gut habt<br>
    Hustle den ganzen Tag, lass' nix mehr dem Zufall<br>
    Und vielleicht fall' ich bald um<br>
    Doch ich war zu lang schon stumm<br>`},{timecode:140, text: 
    ``},]],
  ["color0","color1","color2","color3","color4","color5","color6","color7","color8","color9","color10","color11","color12","color13","color14","color15","color16",]];