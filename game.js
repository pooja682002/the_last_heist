const story = {
    start: {
        text: "The crew is assembled. The plan is set. Tonight, you’ll attempt the most daring heist in history—the Bank of Madrid. The Professor’s voice crackles: 'No mistakes. The police are always a step ahead.'\n\nYour heart pounds. This is it.",
        img: "assets/images/plan.webp",
        sound: "heartbeat-sound",
        choices: [
            { text: "Head to the bank", next: "setup" },
            { text: "Double-check escape routes", next: "professorCall" }
        ]
    },

    setup: {
        text: "You arrive. The city is eerily silent. A shadow moves in the alley, and flickering streetlights hint at trouble.",
        img: "assets/images/Scene1.webp",
        sound: "suspense-sound",
        choices: [
            { text: "Proceed as planned", next: "insideBank" },
            { text: "Signal the team to hold", next: "professorCall" }
        ]
    },

    professorCall: {
        text: "'We have a problem,' the Professor warns. 'There’s an informant among us.'\n\nWho can you trust?",
        img: "assets/images/ProfessorCall.webp",
        sound: "radio-static",
        choices: [
            { text: "Continue with caution", next: "insideBank" },
            { text: "Abort the mission", next: "abort" }
        ]
    },

    insideBank: {
        text: "You breach the bank. Hostages under control. Suddenly, an alarm blares—someone triggered it. A mistake, or sabotage?",
        img: "assets/images/inside bank.webp",
        sound: "alarm-sound",
        choices: [
            { text: "Lock the doors & continue", next: "lockDoors" },
            { text: "Scan the hostages", next: "hostageCheck" }
        ]
    },

    hostageCheck: {
        text: "One man is sweating too much. His hands shake. He avoids eye contact.\n\nAn undercover cop.",
        img: "assets/images/hostagecheck.webp",
        choices: [
            { text: "Take him as leverage", next: "hostages" },
            { text: "Knock him out", next: "lockDoors" }
        ]
    },

    lockDoors: {
        text: "The doors are locked, but sirens wail outside. Time is running out.",
        img: "assets/images/lockdoors.webp",
        choices: [
            { text: "Hack security", next: "securityHack" },
            { text: "Blow the vault open", next: "vaultPuzzle" }
        ]
    },

    securityHack: {
        text: "A puzzle blocks the override: I guard treasures without a weapon. I am silent, but I can be broken. The more I hold, the stronger I become. What am I?",
        img: "assets/images/puzzlequestion.webp",
        choices: [
            { text: "Lock", next: "wrongHack" },
            { text: "Password", next: "vaultPuzzle" }
        ]
    },

    wrongHack: {
        text: "Incorrect! The system locks down, alerting police.",
        img: "assets/images/bg.webp",
        choices: [
            { text: "Try again", next: "securityHack" },
            { text: "Go loud—guns blazing", next: "fight" }
        ]
    },

    vaultPuzzle: {
        text: "The vault is locked. The Professor sends a riddle: 'I am a three-digit number. My tens digit is five more than my ones digit, and my hundreds digit is eight less than my tens digit.'",
        img: "assets/images/vaultpuzzle.webp",
        choices: [
            { text: "Enter code 194", next: "wrongCode" },
            { text: "Enter code 150", next: "vaultTunnel" }
        ]
    },

    vaultTunnel: {
        text: "The vault door swings open! As you fill the bags, motion detectors trigger. Move fast.",
        img: "assets/images/vaulttunnel.webp",
        sound: "alarm-sound",
        choices: [
            { text: "Navigate the laser grid", next: "laserGrid" },
            { text: "Take hostages as shields", next: "hostages" }
        ]
    },

    laserGrid: {
        text: "The tunnel ahead has a deadly laser grid. A wrong move means instant lockdown.",
        img: "assets/images/lasergrid.webp",
        choices: [
            { text: "Crawl under", next: "dead" },
            { text: "Hack the system", next: "gridHack" }
        ]
    },

    gridHack: {
        text: "To deactivate the grid, solve: 'What is the square root of 144?'",
        img: "assets/images/complete pic.webp",
        choices: [
            { text: "12", next: "undergroundEscape" },
            { text: "14", next: "wrongHack" }
        ]
    },

    undergroundEscape: {
        text: "You enter a maintenance tunnel. The Professor warns: 'One leads to freedom. The other… doesn’t.'",
        img: "assets/images/undergroundtunnel.webp",
        choices: [
            { text: "Take the left tunnel", next: "deadEnd" },
            { text: "Take the right tunnel", next: "sniperRooftop" }
        ]
    },

    sniperRooftop: {
        text: "You emerge onto a rooftop. A police sniper has you in his sights!",
        img: "assets/images/rooftop scene.webp",
        choices: [
            { text: "Take cover", next: "chopperEscape" },
            { text: "Distract & run", next: "finalEscape" }
        ]
    },

    chopperEscape: {
        text: "A helicopter hovers above. The team is waiting—if you can reach it.",
        img: "assets/images/helicopter.webp",
        choices: [
            { text: "Jump for it!", next: "success" },
            { text: "Find another route", next: "finalEscape" }
        ]
    },

    finalEscape: {
        text: "You find an abandoned parking lot. A getaway car roars to life. As you speed away, police scanners report you in the wrong part of the city. You did it.",
        img: "assets/images/carescape.webp",
        sound: "victory-sound",
        choices: [],
        ending: "The Perfect Heist"
    },

    deadEnd: {
        text: "Steel doors slam shut behind you. The police are waiting.",
        img: "assets/images/deadend.webp",
        choices: [],
        ending: "Trapped Underground"
    },

    abort: {
        text: "You try to slip away, but a traitor was among you. The police are waiting outside.",
        img: "assets/images/abort.webp",
        choices: [],
        ending: "Betrayal & Capture"
    },

    fight: {
        text: "Gunfire erupts. The team is taking heavy damage. One last chance to escape. Do you take it?",
        img: "assets/images/fight.webp",
        sound: "gunshot-sound",
        choices: [
            { text: "Escape through the tunnels", next: "escapeRoute" },
            { text: "Go down fighting", next: "dead" }
        ]
    },

    escapeRoute: {
        text: "You take a secret tunnel, evading the police. A hidden vehicle awaits. You disappear into the night.",
        img: "assets/images/escaperoute.webp",
        choices: [],
        ending: "The Great Escape"
    },

    hostages: {
        text: "Using hostages as leverage, you negotiate your way out.",
        img: "assets/images/Hostage.webp",
        choices: [],
        ending: "The Professor’s Legacy"
    },

    success: {
        text: "You grab the helicopter skid and hoist yourself in. The city shrinks below as you vanish into the night. A clean escape.",
        img: "assets/images/helicopterescape.webp",
        sound: "victory-sound",
        choices: [],
        ending: "The Perfect Getaway"
    },

    dead: {
        text: "The fight is over. Bullets fly. Your story ends here.",
        img: "assets/images/dead.webp",
        choices: [],
        ending: "A Bullet for Glory"
    }
};



let timerInterval; 

function startGame() {
    let gameContainer = document.getElementById("game");
    gameContainer.classList.remove("hidden"); 
    gameContainer.style.display = "flex"; 
    playScene("start");
    document.getElementById("background-music").play();
}

function playScene(scene) {
    let current = story[scene];

    let gameContainer = document.getElementById("game");
    gameContainer.style.backgroundImage = `url('${current.img}')`;

    document.getElementById("story-text").textContent = current.text;

    let choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = ""; 

    if (current.sound) {
        let sound = document.getElementById(current.sound);
        if (sound) sound.play();
    }

    if (current.ending) {
        choicesDiv.innerHTML = `<h2>${current.ending}</h2>`;

        let restartButton = document.createElement("button");
        restartButton.textContent = "Restart Game";
        restartButton.classList.add("choice-button");
        restartButton.onclick = () => {
            window.location.href = "intro.html"; 
        };
        choicesDiv.appendChild(restartButton);
        return;
    }

    clearInterval(timerInterval); 

    if (current.choices && current.choices.length > 0) {
        current.choices.forEach(choice => {
            let button = document.createElement("button");
            button.textContent = choice.text;
            button.classList.add("choice-button"); 
            button.onclick = () => {
                clearInterval(timerInterval);
                playScene(choice.next);
            };
            choicesDiv.appendChild(button);
        });

        startCountdown(); 
    } else {
        console.warn("No choices available for this scene:", scene);
    }
}

function startCountdown() {
    clearInterval(timerInterval); 
    let timeLeft = 30;
    let timerElement = document.getElementById("timer");
    updateTimerDisplay(timeLeft);

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay(timeLeft);

        if (timeLeft < 0) {
            clearInterval(timerInterval);
            showPopup();
        }
    }, 1000);
}

function updateTimerDisplay(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    document.getElementById("timer").textContent = 
        `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function showPopup() {
    clearInterval(timerInterval); 
    const popup = document.createElement("div");
    popup.classList.add("custom-popup");
    popup.innerHTML = `
        <div class="popup-content">
            <h2>Time's up!</h2>
            <p>You took too long to decide. Restarting the game...</p>
            <button onclick="closePopup()">OK</button>
        </div>
    `;
    document.body.appendChild(popup);
}

function closePopup() {
    document.querySelector(".custom-popup").remove();
    window.location.href = "intro.html";
}
