console.log('Welcome');
let songIndex=0;
let masterPlay=document.getElementById('masterplay');
let audioElement=new Audio('songs/1.mp3');
let progressBar=document.getElementById('myprogressbar');
let next=document.getElementById('for');
let prev=document.getElementById('back');
let gif=document.getElementById('pla');
let masterSongName=document.getElementById('wa');


//array created named song
let song=[
    {songName:'Warriyo - Mortals',filepath:'songs/1.mp3',cover:'covers/1.jpg'},
    {songName:'Alan Walker-Fade ',filepath:'songs/2.mp3',cover:'covers/2.jpg'},
    {songName:'Cartoon - On&On',filepath:'songs/3.mp3',cover:'covers/3.jpg'},
    {songName:'Alan Wlaker -Spectre',filepath:'songs/4.mp3',cover:'covers/4.jpg'},
    {songName:'DEAF KEV-Invincible',filepath:'songs/5.mp3',cover:'covers/5.jpg'},
    {songName:'Cartoon - Why We Lose',filepath:'songs/6.mp3',cover:'covers/6.jpg'},
    {songName:'Jani - Heroes Night',filepath:'songs/7.mp3',cover:'covers/7.jpg'},
    {songName:'DISFIGURE - Blank',filepath:'songs/8.mp3',cover:'covers/8.jpg'},
    {songName:'Electro - Light-Symbolism',filepath:'songs/9.mp3',cover:'covers/9.jpg'},
    {songName:'E;ectrnomia - Sky High',filepath:'songs/10.mp3',cover:'covers/10.jpg'},
] 

//for playing and pausing the song 
masterPlay.addEventListener('click', ()=>
{
    if(audioElement.paused||audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
//updating and the position of the progressBar or input type range
audioElement.addEventListener('timeupdate', ()=>
{
    let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value=progress;
})
//changing the progressBar and updating the song audioElement
progressBar.addEventListener('change',()=>{
    audioElement.currentTime=progressBar.value*audioElement.duration/100;
 })
//For playing next another song

next.addEventListener('click', ()=>{
    if(songIndex>=9)
    {
        songIndex=0;
    }
    else
    {
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=song[songIndex].songName;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

//For playing previous song

prev.addEventListener('click', ()=>{
    if(songIndex<=0)
    {
        songIndex=0;
    }
    else
    {
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=song[songIndex].songName;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
