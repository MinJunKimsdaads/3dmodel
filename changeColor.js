let white=document.getElementById('white');
let black=document.getElementById('black');
let silver=document.getElementById('silver');
let red=document.getElementById('red');
let blue=document.getElementById('blue');
let c =  document.getElementById('c');
let d =  document.getElementById('d');
let e =  document.getElementById('e');
let f =  document.getElementById('f');
let g =  document.getElementById('g');

white.addEventListener('click', function(){
    this.style.border='green 5px dot'
    c.style.display='block'
    d.style.display='none'
    e.style.display='none'
    f.style.display='none'
    g.style.display='none'
})
black.addEventListener('click', function(){
    c.style.display='none'
    d.style.display='block'
    e.style.display='none'
    f.style.display='none'
    g.style.display='none'
})
silver.addEventListener('click', function(){
    c.style.display='none'
    d.style.display='none'
    e.style.display='block'
    f.style.display='none'
    g.style.display='none'
})
red.addEventListener('click', function(){
    c.style.display='none'
    d.style.display='none'
    e.style.display='none'
    f.style.display='block'
    g.style.display='none'
})
blue.addEventListener('click', function(){
    c.style.display='none'
    d.style.display='none'
    e.style.display='none'
    f.style.display='none'
    g.style.display='block'
})