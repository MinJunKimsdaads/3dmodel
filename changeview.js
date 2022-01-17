let changeview1 =document.getElementById('changeview1');
let changeview2 =document.getElementById('changeview2');
let btnbox=document.getElementById('btnbox');
let seatbtnbox=document.getElementById('seatbtnbox');
let doc1=document.getElementById('doc');
let header1=document.getElementById('header')

let desCar1=document.querySelector('#des1_car');
let desCar2=document.querySelector('#des2_car');
let desCar3=document.querySelector('#des3_car');
let desCar4=document.querySelector('#des4_car');

let h1 =document.getElementById('h');
let i1 =document.getElementById('i');
let j1 =document.getElementById('j');
let c1=document.getElementById('c');
let d1=document.getElementById('d');
let e1=document.getElementById('e');
let f1=document.getElementById('f');
let g1=document.getElementById('g');

changeview1.addEventListener('click',function(){
    header1.style.backgroundImage="url('./three.js-master/logo.png')"
    doc1.style.color='white';
    changeview1.style.display='none';
    changeview2.style.display='flex';
    btnbox.style.display='none';
    seatbtnbox.style.display='flex';
    h1.style.display='block';
    c1.style.display='none';
    d1.style.display='none';
    e1.style.display='none';
    f1.style.display='none';
    g1.style.display='none';

    desCar1.querySelector('h2').innerText='17인치 시네마틱 디스플레이';
    desCar2.querySelector('h2').innerText='운전 중심의 구조';
    desCar3.querySelector('h2').innerText='완벽한 주행환경';
    desCar4.querySelector('h2').innerText='새롭게 설계된 2열 좌석';
    desCar1.querySelector('p').innerHTML="탁월한 반을 속도를 갖춘 새로운 중앙 디스플레이는<br/>어디에서는 최상의 화면을 제공합니다.";
    desCar2.querySelector('p').innerHTML="Model S는 최고의 주행감을 자랑하며,<br>최상의 승차감을 제공합니다.";
    desCar3.querySelector('p').innerHTML="실내 공조장치, 트라이-존 온도 조절,<br/> 통풍시트, HEPA 필터 제공";
    desCar4.querySelector('p').innerHTML="3명의 성인을 위한 좌석,<br/>무선 충전과 수납이 가능한 접이식 팔걸이를 갖췄습니다.";
})

changeview2.addEventListener('click',function(){
    header1.style.backgroundImage="url('./three.js-master/logo.png')";
    doc1.style.color='white';
    changeview1.style.display='flex';
    changeview2.style.display='none';
    btnbox.style.display='flex';
    seatbtnbox.style.display='none';
    c1.style.display='block';
    h1.style.display='none';
    i1.style.display='none';
    j1.style.display='none';

    desCar1.querySelector('h2').innerText='반응형 퍼포먼스'
    desCar2.querySelector('h2').innerText='최적화된 공기역학'
    desCar3.querySelector('h2').innerText='정제된 디자인'
    desCar4.querySelector('h2').innerText='효율성을 위한 설계'
    desCar1.querySelector('p').innerHTML="획기적인 퍼포먼스 휠과 타이어는 차량을<br/>지탱하고 도로에 더 강한 동력을 전달합니다."
    desCar2.querySelector('p').innerHTML="모든 부분의 디테일을 고려한 외관 디자인으로 Model S는<br/>양산차 중 가장 공기역학적으로 설계되었습니다."
    desCar3.querySelector('p').innerHTML="외관은 상징적인 디자인과<br>우아한 요소가 적절히 결합되었습니다."
    desCar4.querySelector('p').innerHTML="지구상에서 가장 낮은 공기 저항 계수와<br/>압도적인 효율성을 자랑하는 Model S는 속도와<br/>주행 가능 거리를 위해 설계되었습니다."
})