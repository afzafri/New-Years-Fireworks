let fireworks = []
let clicked = false
function setup() {
    createCanvas(window.innerWidth, window.innerHeight)
    rectMode(CENTER);
}

let targetTime = new Date((new Date).getFullYear() + 1, 0, 1) // January 1st of next year
function getCountdownTime() {
    let now = new Date()

    if (now >= targetTime) {
        var msgDone = "Happy New Year!";
        animateTitle(msgDone);
        return msgDone;
    }

    let timeDifferenceMilliseconds = targetTime.getTime() - now.getTime();
    let remainingTime = new Date(timeDifferenceMilliseconds);
    let remainingSeconds = Math.floor((timeDifferenceMilliseconds / 1000) % 60);
    let remainingMinutes = Math.floor((timeDifferenceMilliseconds / (1000 * 60)) % 60);
    let remainingHours = Math.floor((timeDifferenceMilliseconds / (1000 * 60 * 60)) % 24);

    return `${remainingHours.toString().padStart(2, '0')}:${remainingMinutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function draw() {
    background(0,0,0,25)
    if (!clicked) {
        fill(255, 255, 255, 10)
        noStroke()
        textAlign(CENTER, CENTER);
        text("click for fireworks", window.innerWidth / 2, window.innerHeight / 2);
    }else {
        textSize(100);
        fill(255, 255, 255, 10)
        noStroke()
        textAlign(CENTER, CENTER);
        text(getCountdownTime(), window.innerWidth / 2, window.innerHeight / 2);
        textSize(10);
        noStroke()
        
        for (let f of fireworks) f.step()
    }
}

function mouseReleased() {
    clicked = true
    let target = {
        x: mouseX,
        y: mouseY
    }
    fireworks.push(new Firework(target))
}

function animateTitle(Title = "Hello, World!", delay = 300) {
    let counter = 0;
    let direction = true;
    aniTitle = setInterval(function () {
        if (counter == Title.length)
            direction = false;
        if (counter == false)
            direction = true;
        counter = (direction == true) ? ++counter : --counter;
        newtitle = (counter == 0) ? " " : Title.slice(0, counter);
        document.title = newtitle;
    }, delay)
}

