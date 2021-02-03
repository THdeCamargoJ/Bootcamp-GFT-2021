const dino = document.querySelector(".dino");
const background = document.querySelector(".background");
let isJumping = false;
let dinoPosition = 0;


function handleKeyUp(event) {
    const keyHandlers = {
        32: () => {
            if (!isJumping)
                jump();
        }
    };

    const key = keyHandlers[event.keyCode];

    if (key) key();
}


function jump() {
    isJumping = true;

    let upInterval = setInterval( () => {
        if (dinoPosition >= 150) {
            clearInterval(upInterval);

            let downInterval = setInterval( () => {
                if (dinoPosition <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    dinoPosition -= 20;
                    dino.style.bottom = dinoPosition + "px";
                }
            }, 20);
        
        } else {
            dinoPosition += 20;
            dino.style.bottom = dinoPosition + "px";
        }
    }, 20); // 20ms
}


function cactusCreator() {
    const cactus = document.createElement("div");
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    cactus.classList.add("cactus");
    cactus.style.right = 0;
    background.appendChild(cactus);
    let leftInterval = setInterval(() => {
        cactusPosition -= 10;
        cactus.style.left = cactusPosition + "px";
        if (cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if (cactusPosition > 0 
                    && cactusPosition < 60
                        && dinoPosition < 60) {
            clearInterval(leftInterval);
            document.body.innerHTML = "<h1 class=\"game-over\">Game Over</h1>";
        }
    }, 20);

    setTimeout(cactusCreator, randomTime);
}


document.addEventListener("keyup", handleKeyUp);
cactusCreator();