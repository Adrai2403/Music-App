console.log('Welcome to my Music');
let songindex =0;
let audioelement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songs = [
    {songname: "Crazy kiya", filepath: "songs/1.mp3" , coverpath: "covers/cover1.jpg"},
    {songname: "War Theme", filepath: "songs/2.mp3" , coverpath: "covers/cover2.webp"},
    {songname: "Andekhi Anjani", filepath: "songs/3.mp3" , coverpath: "covers/cover3.jpg"},
    {songname: "Baware", filepath: "songs/4.mp3" , coverpath: "covers/cover4.jpg"},
    {songname: "Chikni chameli", filepath: "songs/5.mp3" , coverpath: "covers/cover5.jpg"},
    {songname: "Sooraj ki Bahue", filepath: "songs/6.mp3" , coverpath: "covers/cover6.jpg"},
    {songname: "Toh Zinda hu", filepath: "songs/7.mp3" , coverpath: "covers/cover7.jpg"},
]

masterplay.addEventListener('click', ()=>{
    if(audioelement.paused || audioelement.currentTime <= 0){
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});
audioelement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioelement.currentTime/audioelement.duration)*100)
    myprogressbar.value  = progress;
});
myprogressbar.addEventListener('change', ()=>{
    audioelement.currentTime = (myprogressbar.value * audioelement.duration)/100;
});

const makeallplay = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((elememt) => {
        elememt.classList.remove('fa-pause-circle');
        elememt.classList.add('fa-play-circle');
        
    });
}

Array.from(document.getElementsByClassName('songitemplay')).forEach(element => {
    element.addEventListener('click', (e)=>{
        makeallplay();
        songindex = parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioelement.src = `songs/${songindex + 1}.mp3`;
        mastersongname.innerText = songs[songindex].songname;
        audioelement.currentTime = 0;
        audioelement.play();
        gif.style.opacity =1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
});

document.getElementById('next').addEventListener('click', ()=>{
    if(songindex>=6){
        songindex =0;
    }
    else{
    songindex += 1;
    }
    audioelement.src = `songs/${songindex +1}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    gif.style.opacity =1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
});
document.getElementById('previous').addEventListener('click', ()=>{
    if(songindex<=0){
        songindex =6;
    }
    else{
    songindex -= 1;
    }
    audioelement.src = `songs/${songindex +1}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    gif.style.opacity=1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
});
