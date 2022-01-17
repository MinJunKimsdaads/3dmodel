let des1 = document.getElementById('des1_car');
let des2 = document.getElementById('des2_car');
let des3 = document.getElementById('des3_car');
let des4 = document.getElementById('des4_car');
let scroll1 = document.getElementById('scroll')
window.addEventListener('scroll', function(){
    if(window.scrollY==0){
        scroll1.style.display='flex';
        des1.style.display='block';
        des2.style.display='block';
        des3.style.display='block';
        des4.style.display='block';
    } else {
        scroll1.style.display='none';
        des1.style.display='none';
        des2.style.display='none';
        des3.style.display='none';
        des4.style.display='none';
    }
})