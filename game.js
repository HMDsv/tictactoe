let turn = 'x';
let som =0;
let arrX = [],
    arrO = [],
    lastgame = [],
    box = document.querySelectorAll('.square');

function startgame(i){
    let element = document.getElementById(i);
    
    if(element.innerHTML =='' && turn=='x'){
        element.innerHTML = 'x';
        arrX.push(Number(i));
        turn = 'o';      
        lastgame.push(i);
        autoTurn(); 
     // som = 45 This means that all the boxes are full
        som+=Number(i);
    } 
    
     //Rules for check the winner :
    checkWinner(arrX,arrO);
    if(checkWinner(arrX,arrO) == 'X'){
        for(let j=0 ; j<9; j++)
        box[j].removeAttribute('onclick');
        document.getElementsByTagName('h1')[0].style.display= 'block';
        document.getElementsByTagName('h1')[0].innerHTML+= win;
        document.getElementsByTagName('button')[0].style.visibility= 'visible';;
    }else if(checkWinner(arrX,arrO) == 'O'){
        for(let j=0 ; j<9; j++)
        box[j].removeAttribute('onclick');
        document.getElementsByTagName('h1')[0].style.display= 'block';
        document.getElementsByTagName('h1')[0].innerHTML+= win;
        document.getElementsByTagName('button')[0].style.visibility= 'visible';;
    }else if(som ==45){
        for(let j=0 ; j<9; j++)
        box[j].removeAttribute('onclick');
        document.getElementsByTagName('h1')[0].style.display= 'block';
        document.getElementsByTagName('h1')[0].innerHTML= 'equalize';
        document.getElementsByTagName('button')[0].style.visibility= 'visible';;
    }
};
// Restart the Game after Win or Equalize :
function restart(){
    document.getElementsByTagName('h1')[0].style.display= 'none';
    document.getElementsByTagName('h1')[0].innerHTML= 'WINNER : ';
    document.getElementsByTagName('button')[0].style.visibility= 'hidden';    
    som = 0;
    arrO = [];
    arrX = [];
    lastgame = [];
    turn = 'x';
    for(let j=0 ; j<9; j++){
        box[j].innerHTML='';
        box[j].setAttribute('onclick','startgame(this.id)');
    }
}

function autoTurn(){
let randbox;
do {
     randbox= Math.floor(Math.random()  *  10);
    randbox == 0 ? randbox+=1 : randbox;
    if (document.getElementById(randbox).innerHTML =='' ) {
        arrO.push(Number(randbox));
        document.getElementById(randbox).innerHTML = 'o';
        turn = 'x';
        som+=Number(randbox); 
        lastgame.push(randbox);
        console.log(lastgame.length);
    }else if(lastgame.length == 9){
        turn = "x";
    }
} while (turn=='o');
}

function checkWinner(X,O){
    Winner = X;
    win = 'X';
    //Check out the winner X or O
    for(let i = 0 ;i<=1 ;i++){
if(Winner.includes(1) && Winner.includes(2) && Winner.includes(3)){
    return win;
}else if(Winner.includes(4) && Winner.includes(5) && Winner.includes(6)){
    return win;
}else if(Winner.includes(7) && Winner.includes(8) && Winner.includes(9)){
    return win;
}else if(Winner.includes(1) && Winner.includes(5) && Winner.includes(9)){
    return win;
}else if(Winner.includes(3) && Winner.includes(5) && Winner.includes(7)){
    return win;
}else if(Winner.includes(1) && Winner.includes(4) && Winner.includes(7)){
    return win;
}else if(Winner.includes(2) && Winner.includes(5) && Winner.includes(8)){
    return win;
}else if(Winner.includes(3) && Winner.includes(6) && Winner.includes(9)){
    return win;
}
else{
    Winner = O;
    win = 'O';
}
}
}
