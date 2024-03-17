const input = document.querySelector('.input');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const inputnumber = document.querySelector('.inputnumber');
const output = document.querySelector('.output');
const Restart = document.querySelector('.Restart')
let randomnumber;
let attempt = 0;

function display() {
    const show = input.value;
    inputnumber.innerHTML = show;
    
}

function startGame() {
    randomnumber = Math.floor(Math.random() * 11);
    btn1.style.display = "none";
    btn2.style.display = "block";
    inputnumber.style.display = "block";
    output.innerHTML = '';
    input.value = '';
    input.style.display = "block"

    console.log(randomnumber);
}

function restartGame() {
    randomnumber = '';
    btn1.style.backgroundColor = "lightgreen"
    btn1.style.display = "block";
    btn2.style.display = "none";
    Restart.style.display = "none";
    output.innerHTML = '';
    inputnumber.innerHTML = '';
    input.style.display = "none"
    inputnumber.style.display = "none";
    input.value = '';

}

function checkans() {
    const guess = input.value;

    if (attempt < 3) {
        attempt++;
        if (guess == randomnumber) {
            output.innerText = 'You won!';
            Restart.style.display = "block"
            btn2.style.display = 'none';

        } else if (guess < randomnumber) {
            output.innerHTML = `Too low !! ${3 - attempt} chances left`;
        } else {
            output.innerHTML = `Too high ${3 - attempt} chances left`;
        }
    } else {
        output.innerHTML = `You lost! The random number was ${randomnumber}.`;
        btn2.style.display = 'none';
        Restart.style.display = "block"
    }
}

btn1.addEventListener('click', startGame);
btn2.addEventListener('click', checkans);
btn2.addEventListener('click', display);
Restart.addEventListener('click', restartGame)
