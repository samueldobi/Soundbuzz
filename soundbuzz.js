// Store all the neccesary buttons in varriables
const playBtn = document.getElementById('playbar');
const pauseBtn = document.getElementById('pausebar');
const prevBtn = document.getElementById('prevbar');
const fowardBtn = document.getElementById('fowardbar') 

const tracks = [
  {
    name: "Arya Star ft Ckay - Beggie Beggie",
    image: "",
    songPath: document.getElementById('0') 
  },
  {
    name: "Glass Animals - Heat Waves ",
    image: "",
    songPath: document.getElementById('1')
  },
  {
    name: "Juice Wrld - Already Dead",
    image: "",
    songPath: document.getElementById('2')
  },
  {
    name: "Kayode - Live Forever",
    image: "",
    songPath: document.getElementById('3')
  },
  {
    name: "Rema - Calm Down",
    image: "",
    songPath: document.getElementById('4')
  },
  {
    name: "The Kid Laroi ft Justin Bieber - Stay",
    image: "",
    songPath: document.getElementById('5')
  },
  {
    name: "Wizkid ft Tems & Justin Bieber - Essence",
    image: "",
    songPath: document.getElementById('6')
  },
]


// functions
// load the track into the DOM


 function loadTrack(aud){
   aud.src = tracks[trackIndex].songPath;
  // aud.load();
  // aud.src = tracks[trackIndex].songPath;
 }

let trackIndex = 0;

// for previous songs
function prevTrack(){
  let aud = tracks[trackIndex].songPath;
  // loadTrack()
  trackIndex--
  if (trackIndex < 0){
    trackIndex = tracks.length -1;
  }
}
prevBtn.addEventListener('click', prevTrack);


// to play the music
function playTrack(){
  let aud = tracks[trackIndex].songPath; 
  aud.play();
  playBtn.style.display = "none";
  pauseBtn.style.display = "block";
  loadTrack(tracks[trackIndex])
}
playBtn.addEventListener('click', playTrack);

// to pause the music
function pauseTrack(){
  let aud = tracks[trackIndex].songPath; 
  aud.pause();
  playBtn.style.display = "block";
  pauseBtn.style.display = "none";
}
pauseBtn.addEventListener('click', pauseTrack);

// for the next song button
function nextTrack(){
  trackIndex++
  if (trackIndex > tracks.length -1 ) {
    trackIndex = 0;
  }

}
fowardBtn.addEventListener('click', nextTrack);

// loadTrack(trackIndex);
// let aud = tracks[trackIndex].songPath;
loadTrack(tracks[trackIndex])
