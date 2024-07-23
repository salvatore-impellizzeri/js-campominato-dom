const button = document.getElementById("play");
const contenitore = document.getElementById("container-main");

button.addEventListener("click", function(){
    
    contenitore.innerHTML = '';

    for(let i = 1; i <= 100; i++){
        const box = document.createElement("div");
        box.classList.add("my-grid");    
        contenitore.append(box);
        box.innerHTML = i;
        box.addEventListener("click", function() {
            box.classList.toggle("color");
            console.log("this", this);
          })
    }
})

