class Avatar {
    #posicaoX
    #posicaoY
    #coins
    #lives = 10;
    #damage = 1;

    constructor(posicaoX, posicaoY, coins) {
        this.#posicaoX = posicaoX;
        this.#posicaoY = posicaoY;
        this.#coins = coins;
    }

    //Métodos para as posições, lembrando que começa com 0,0 no canto superior esquerdo, então no eixo x quanto mais aumenta mais ele vai pra direita e no eixo y quanto mais aumenta mais ele desce
    right(){
        if(this.#lives<=0 || this.posicaoX < 0){
            return false; 
         } else{
            return this.#posicaoX += 10;
         }
    }

    left(){
        if(this.#lives<=0 || this.posicaoX <= 0){
            return false; 
         } else{
            return  this.#posicaoX -= 10;
         
         }
    }

    forward(){
        if(this.#lives<=0 || this.posicaoY <= 0){
            return false; 
         } else{
            return this.#posicaoY -= 10;
          
         }
    }

    back(){
        if(this.#lives<=0 || this.posicaoY < 0){
            return false; 
         } else{
            return this.#posicaoY += 10;
         }
    }

    addCoins(){
        if(this.#lives<=0){
            return false; 
         } else{
            return this.#coins += 1;
         }
    }

    attack(){
        if(this.#lives<=0){
            return false; 
         } else{
            return this.#damage
           
         }
    }

    attackReceived(){
        if(this.#lives<=0){
           return false; 
        } else{
           return this.#lives -= 1;
           
        }
    }

    //O uso do _ antes do nome é para representar que ela é privada
    set posicaoX(_posicaoX){
        if(_posicaoX < 0){
            return false
        } else{

           this.#posicaoX = _posicaoX;
        }
    }

    set posicaoY(_posicaoY){
        if(_posicaoY < 0){
            return false
        } else{
            this.#posicaoY = _posicaoY;
        }
    }

    set coins(_coins){
        if(_coins < 0){
            return false
        }else{
            this.#coins = _coins;
        }
    }

    get posicaoX(){
        return this.#posicaoX;
    }

    get posicaoY(){
        return this.#posicaoY;
    }

    get coins(){
        return this.#coins;
    }

    get lives(){
        return this.#lives;
    }

    get damage(){
        return this.#damage;
    }

}

//Vou criar um bonequinho em tela e adicionar um ouvinte para chamar as funções do avatar semelhante ao desafio de movimentar a div que fizemos
const avatar = document.getElementById("avatar");
const message =  document.getElementById("message");
const body = document.querySelector("body");
const end = document.getElementById("the-end")
let isActive = false;

//Criando um avatar
const newAvatar = new Avatar(100, 200, 3);

//Aqui eu vou colocar o avatar na mesma posição que for passada ao avatar quando ele for criado
avatar.style.top = newAvatar.posicaoY + "px";
avatar.style.left = newAvatar.posicaoX + "px";



//função para mover o avatar
function moveAvatar(direction){

    const currentPosition = {
        top: newAvatar.posicaoY,
        left: newAvatar.posicaoX,
    };
    
    if(newAvatar.posicaoX === 470 && newAvatar.posicaoY === 130){
        newAvatar.addCoins();
    }

    if((newAvatar.posicaoX ===850 && newAvatar.posicaoY === 10) || (newAvatar.posicaoX ===1140 && newAvatar.posicaoY === 240) || (newAvatar.posicaoX ===570 && newAvatar.posicaoY === 420) || (newAvatar.posicaoX ===860 && newAvatar.posicaoY === 420) || (newAvatar.posicaoX ===1180 && newAvatar.posicaoY === 420)){
        newAvatar.attackReceived();
    }

    //Mostrar a mensagem de game over se o avatar chegar a 0 vidas
    if(newAvatar.lives === 0){
        end.classList.remove("hidden");
    }

    switch (direction) {
        case "up":
            newAvatar.forward();
            // currentPosition.top -= 1;
            break;
        case "down":
            newAvatar.back();
            // currentPosition.top += 1;
            break;
        case "left":
            newAvatar.left();
            // currentPosition.left -= 1;
            break;
        case "right":
            newAvatar.right();
            // currentPosition.left += 1;
            break;
    }

    //vou verificar se a div está dentro dos limites do body
            if (
                currentPosition.top >= 0 &&
                currentPosition.left >= 0 &&
                currentPosition.top + avatar.clientHeight <= body.clientHeight &&
                currentPosition.left + avatar.clientWidth <= body.clientWidth
            ) {
                avatar.style.top = currentPosition.top + "px";
                avatar.style.left = currentPosition.left + "px";
            }

}


document.addEventListener('keydown', function(event) {
    // Verifica se a tecla pressionada é uma das setas
    switch (event.key) {
        case 'Enter':
            message.innerHTML = `
            <p>O Yoshi causa: ${newAvatar.damage} ponto de dano</p>
            <p>O Yoshi tem: ${newAvatar.lives} vidas sobrando</p>
            <p>O Yoshi tem: ${newAvatar.coins} moedas</p>
            `
            break;
        case 'ArrowRight':
            moveAvatar("right");
            message.innerHTML ="";
            // message.innerHTML = `A posição X do avatar é ${newAvatar.posicaoX} `  //usei essas informações para pegar a posição na tela em que ele ganha moedas ou perde vidas
            message.innerHTML = `<p>Pressione "Enter" para ver o inventário!!</p>`
            break;
        case 'ArrowLeft':
            moveAvatar("left");
            message.innerHTML ="";
            // message.innerHTML = `A posição X do avatar é ${newAvatar.posicaoX} `
            message.innerHTML = `<p>Pressione "Enter" para ver o inventário!!</p>`
            break;
        case 'ArrowUp':
            moveAvatar("up");
            message.innerHTML ="";
            // message.innerHTML = `A posição Y do avatar é ${newAvatar.posicaoY} `
            message.innerHTML = `<p>Pressione "Enter" para ver o inventário!!</p>`
            break;
        case 'ArrowDown':
            moveAvatar("down");
            message.innerHTML ="";
            // message.innerHTML = `A posição Y do avatar é ${newAvatar.posicaoY} `
            message.innerHTML = `<p>Pressione "Enter" para ver o inventário!!</p>`
            break;
        default:
            break;
    }
});

