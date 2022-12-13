let character = document.getElementById('character');
let block = document.getElementById('block');
const playerName = document.querySelector('.name-player');
//const playerName = prompt('Tap your Name: ', '');
let i = 0;

const namePlayer = window.prompt('PLAYER NAME') ;

playerName.innerHTML = 'PALYER NAME: ' + namePlayer + '<br> SCORE: ' + i;

function jump(){
    

    if(character !== "animate"){
        character.classList.add("animate");
    }
    character.classList.add("animate");
    setTimeout(() => {
        character.classList.remove("animate");
    }, 600);
   // do{i++}while(character.classList === "animate");
}

let checkDead = setInterval(() => {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));

    if(blockLeft < 10 && blockLeft > 0 && characterTop >= 335){
         block.style.animation = 'none';
         block.style.display = 'none';
        alert('You lose!! Your Max Score is: ' + i);
    }
    
}, 10);
// while(jump()){
//     i++;
// }
function increm(){
    i++;
    console.log(i);
    playerName.innerHTML = 'PALYER NAME: ' + namePlayer + '<br> SCORE: ' + i;
}
//playerName = i;
