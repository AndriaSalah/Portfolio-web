let trackArt = document.querySelector('.trackArt');
let trackName = document.querySelector('.trackName');
let trackArtist = document.querySelector('.trackArtist');

let seekSlider = document.querySelector('.seek_slider')
let volumeSlider = document.querySelector('.volume_slider');
let currentTime = document.querySelector('.currentTime');
let totalDuration = document.querySelector('.totalDuration');
let curr_track = document.createElement('audio');

let track_index = 0;
let shuffle = false;
let isplaying = false
let updateTimer;

let play_pause = document.querySelector('.playBtn')
let shuffleBtn=document.querySelector('.shuffle');
let playlist = document.querySelector('.playlist');
trackArt.classList.add('amada')
let random = 0
let wasplaying = false 
let rand_check = false
let rand_check_number = 0

const musicLibrary = [
    {
        imgPath   : '/Music-player/Music/Artwork/1.png',
        musicPath : '/Music-player/Music/Music/Believer.flac',
        artistName: 'Imagine Dragons',
        trackName : 'Believer'
    },
    {
        imgPath   : '/Music-player/Music/Artwork/2.png',
        musicPath : '/Music-player/Music/Music/Tiptoe.flac',
        artistName: 'Imagine Dragons',
        trackName : 'Tiptoe'
    },
    {
        imgPath   : '/Music-player/Music/Artwork/2.png',
        musicPath : '/Music-player/Music/Music/Radioactive.flac',
        artistName: 'Imagine Dragons',
        trackName : 'Radioactive'
    },
    {
        imgPath   : '/Music-player/Music/Artwork/1.png',
        musicPath : '/Music-player/Music/Music/Whatever_it_Takes.flac',
        artistName: 'Imagine Dragons',
        trackName : 'What ever it takes'
    },
    {
        imgPath   : '/Music-player/Music/Artwork/2.png',
        musicPath : '/Music-player/Music/Music/I_Dont _Know_Why.flac',
        artistName: 'Imagine Dragons',
        trackName : 'I Dont know why'
    },
    {
        imgPath   : '/Music-player/Music/Artwork/2.png',
        musicPath : '/Music-player/Music/Music/Its_Time.flac',
        artistName: 'Imagine Dragons',
        trackName : 'Its time'
    },
    
    

]



for (let index = 0; index < musicLibrary.length; index++) {
    pushToPlayList(index) 
}


nowplaying = document.querySelector(`.playlist :nth-of-type(1n)`);
nowplaying.classList.add('nowplaying')

loadtrack(track_index);

function pushToPlayList(index){
    var song = document.createElement('div');
    song.classList.add('song');

   
    var imgPath = document.createElement('img');
    imgPath.src = musicLibrary[index].imgPath;
    
    var songName = document.createElement('p');
    songName.textContent = musicLibrary[index].trackName;
   
    var button = document.createElement('button');
    button.textContent = 'play'
    button.setAttribute("onclick",`playat(${index});`);
  
    song.appendChild(imgPath);
    song.appendChild(songName);
    song.appendChild(button);
    
    playlist.appendChild(song)

}


//  nowplaying.classList.add('.nowplaying')

function loadtrack(track_index){
    clearInterval(updateTimer);
    reset();
    if (!shuffle){
    curr_track.src = musicLibrary[track_index].musicPath
    curr_track.load();
    trackArt.style.backgroundImage = `url(${musicLibrary[track_index].imgPath})`;
    trackName.textContent = musicLibrary[track_index].trackName;
    trackArtist.textContent= musicLibrary[track_index].artistName;
    }
    else{
        while(!rand_check){
            random = Math.floor(Math.random()*(musicLibrary.length -1))
            if (rand_check_number != random){
                rand_check = true
                rand_check_number = random
                break
            }
            else {
                rand_check_number = random
            }
        }
        curr_track.src = musicLibrary[random].musicPath
        curr_track.load();
        trackArt.style.backgroundImage = `url(${musicLibrary[random].imgPath})`;
        trackName.textContent = musicLibrary[random].trackName;
        trackArtist.textContent= musicLibrary[random].artistName
        console.log(random)
        playat(random)

    }
    updateTimer = setInterval(setUpdate, 500);
    curr_track.addEventListener('ended', next);

    // randombg();

}
 

function randombg(a){
        let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
        
    
        function populate(a){
            for(let i=0; i<6; i++){
                let x = Math.round(Math.random() * 14);
                let y = hex[x];
                a += y;
            }
            return a;
        }
        let Color1 = populate('#');
        let Color2 = populate('#');
        var angle = 'to right';
    
        let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
        document.body.style.background = gradient;
}

function reset(){
        currentTime.textContent = '00:00';
        totalDuration.textContent = '00:00';
        seekSlider.value=0;
}

function play(){
        
    if(!isplaying){
        
        curr_track.play();
        isplaying = true;
        trackArt.style.animationPlayState = 'running';
        play_pause.src = '/Music-player/assets/pause.png';
    }
    else {
        
        curr_track.pause();
        isplaying = false 
        trackArt.style.animationPlayState = 'paused';
        play_pause.src='/Music-player/assets/play.png';
    }
 }


function shuffles(){
        if(!shuffle){
        shuffleBtn.classList.add('active')
        shuffle = true;
        console.log('shuffle ' + shuffle)
    }
    else{
        shuffleBtn.classList.remove('active')
        shuffle = false;
        console.log('shuffle ' + shuffle)
    }
}
function next_prevTrack(direction){
    if(!shuffle){
        if(direction === 'right'){
            if(track_index < musicLibrary.length-1){
                 playat(++track_index)
            }
            else {
                track_index = 0;
                playat(track_index)
            }
        }
        else if(direction === 'left'){
            if(track_index > 0){
                playat(--track_index)

                }
                else {
                    track_index = 0;
                    playat(track_index)

                }
        }
    }
    else {
        rand_check = false
        loadtrack()
    }
        

}

function next() {
        if(track_index < musicLibrary.length-1){
            playat(++track_index)
                
            }
            else {
                curr_track.pause();
                track_index = 0;
                playat(track_index)
                
            }
}

function seekTo(){
    let seektoo = curr_track.duration * (seekSlider.value / 100);
    curr_track.currentTime = seektoo;
}
function setVolume(){
    curr_track.volume = volumeSlider.value / 100;
}

function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seekSlider.value = seekPosition;
        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        currentTime.textContent = currentMinutes + ":" + currentSeconds;
        totalDuration.textContent = durationMinutes + ":" + durationSeconds;
    }
}

function playat(number){
    
    nowplaying.classList.remove('nowplaying')
    nowplaying = document.querySelector(`.playlist :nth-of-type(${number + 1}n)`);
    nowplaying.classList.add('nowplaying')
    isplaying = false;
    if(!shuffle){
    loadtrack(number)
    play()
    }
    else play()

}