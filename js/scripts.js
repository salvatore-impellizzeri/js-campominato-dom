const button = document.querySelector(".play");
const contenitore = document.getElementById("container-main");
let risultato = document.getElementById("result");
let livello = document.getElementById("level");

button.addEventListener("click", function(){
    
    risultato.innerHTML = '';

    contenitore.innerHTML = '';

    let cellsNumber = 0;
    let level = livello.value;

    if(livello.value == "Easy"){
        cellsNumber = 49;
        columns = 7;
    }

    else if(livello.value == "Medium"){
        cellsNumber = 81;
        columns = 9;
    }

    else if(livello.value == "Hard"){
        cellsNumber = 100;
        columns = 10;
    }

    let bombArrey = [];
    for(let j = 0; j < 16; j++){
        bomb = Math.floor(Math.random() * cellsNumber) + 1;
        if(bombArrey.includes(bomb)){
            j--;
        }

        else{
            bombArrey.push(bomb);
        }
    }
    console.log(bombArrey);

    let score = 0;
    let gameOver = false;

    for(let i = 1; i <= cellsNumber; i++){
        const box = document.createElement("div");
        box.classList.add("my-grid");
        box.style.flexBasis = `${100 / columns}%`;
        contenitore.append(box);
        box.innerHTML = i;

        box.addEventListener("click", function(){
            if(gameOver){
                return;
            }

            if(bombArrey.includes(i)){
                box.classList.add("wrong");
                console.log("BOMB:", this.innerText);
                risultato.innerHTML = `Mi dispiace hai perso! Il tuo punteggio è di ${score}`;
                gameOver = true;
            }

            else if(!box.classList.contains("color")){
                box.classList.add("color");
                score ++;
                console.log("this:", this.innerText);
            }

            if(score == (cellsNumber - 16)){
                risultato.innerHTML = "Hai vinto!";
            }
        })
    }
})