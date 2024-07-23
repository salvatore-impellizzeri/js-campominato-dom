const button = document.getElementById("play");
const contenitore = document.getElementById("container-main");
const risultato = document.getElementById("result")

button.addEventListener("click", function(){
    
    contenitore.innerHTML = '';

    const bombArrey = [];
    for(let j = 0; j < 16; j++){
        bomb = Math.floor(Math.random() * 100) + 1;
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

    for(let i = 1; i <= 100; i++){
        const box = document.createElement("div");
        box.classList.add("my-grid");    
        contenitore.append(box);
        box.innerHTML = i;

        box.addEventListener("click", function(){
            if(gameOver){
                return;
            }

            if(bombArrey.includes(i)){
                box.classList.toggle("wrong");
                console.log("BOMB:", this.innerText);
                risultato.innerHTML = `Mi dispiace hai perso! Il tuo punteggio è di ${score}`;
                gameOver = true;
            }

            else if(!box.classList.contains("color")){
                box.classList.toggle("color");
                score ++;
                console.log("this:", this.innerText);
            }
        })
    }
})



