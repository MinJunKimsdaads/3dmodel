let fullscreen = document.getElementById('fullscreen');
let exitfullscreen = document.getElementById('exitfullscreen');
let full = document.getElementById('full');
let exitfull = document.getElementById('exitfull');
let el = document.documentElement;

fullscreen.addEventListener('click',function(){
    el.webkitRequestFullscreen();
    full.style.display='none';
    exitfull.style.display='flex';
})

exitfullscreen.addEventListener('click',function(){
    document.exitFullscreen();
    full.style.display='flex';
    exitfull.style.display='none';
})