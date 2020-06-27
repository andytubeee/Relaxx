const container = document.querySelector('.container');
const text = document.querySelector('#text');
const mute = document.getElementById("muteButton");
const music = document.getElementById("music");

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

var isMute = true;
music.play();

function playMusic() {
    music.play();
}

breathAnimation();

function breathAnimation() {
    text.innerText = 'Breathe In!';
    container.className = 'container grow';

    setTimeout(() => {
        text.innerText = 'Hold';

        setTimeout(() => {
            text.innerText = 'Breathe Out!';
            container.className = 'container shrink';
        }, holdTime);
    }, breatheTime);
}

setInterval(breathAnimation, totalTime);

function pauseOnPress() {
    if (!isMute) {
        mute.innerHTML = "Unmute ▶";
        isMute = true;

        music.pause();
    } else {
        mute.innerHTML = "Mute";
        isMute = false;

        music.play();
    }
}