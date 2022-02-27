console.log("Welcome to gaana ");
let songIndex = 0;
let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myprogrerssbar = document.getElementById("myprogressbar")
let songs = [
    {songName: "Shape of you", filePath: "1.mp3", coverPath: "covers/file/cover.jpg"},
   
]

masterPlay.addEventListener("click", ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle')
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle')
    }
})

audioElement.addEventListener("timeupdate",()=>{
    console.log("timeupdate");
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myprogrerssbar.value = progress;
})

myprogrerssbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogrerssbar.value*audioElement.duration/100
})