const story = {
    start: {
        text: "For years, you've studied the Central Bank of Spain—its security, its weaknesses, and its fortune. You were once an insider, a trusted employee who knew every vault, every guard shift, every blind spot. Then, they betrayed you. Framed for a crime you didn’t commit, you lost everything. But now, you’re back—not as a banker, but as a mastermind.\n\nYour crew is handpicked. Diego, the hacker, can crack any security system. Elena, the strategist, thinks three steps ahead. Lucas, the getaway driver, has never been caught. And then there’s The Professor, the one who orchestrates everything from the shadows. The plan is perfect… or so you thought.\n\nAn informant has leaked something. The police might already be onto you. Time is running out. The moment of truth is here.\n\nWill this be the greatest heist in history, or your final downfall?",
        img: "assets/images/chara intro.webp",
        sound: "background-music",
        choices: [
            { text: "Begin the Heist", next: "start1" }
        ]
    },
    
    start1: {
        text: "As you arrive at the bank, the city is eerily silent, the plan set in motion. But a shadow in the alley and flickering streetlights spark a sense of unease—something feels off.",
        img: "assets/images/Scene1.webp",
        sound: "alarm-sound",
        choices: [
            { text: "Proceed as planned", next: "insideBank" },
            { text: "Check with The Professor", next: "professorCall" }
        ]
    },
    

    insideBank: {
        text: "You entered the bank and took control. Suddenly, an alarm goes off! Someone triggered it. What now?",
        img: "assets/images/inside bank.webp",
        sound: "alarm-sound",
        choices: [
            { text: "Lock doors & continue", next: "lockDoors" },
            { text: "Abort mission & escape", next: "abort" }
        ]
    },    
    

    

    professorCall: {
        text: "The Professor warns you that the police are already onto you. You need to decide fast.",
        img: "assets/images/ProfessorCall.webp",
        choices: [
            { text: "Continue anyway", next: "insideBank" },
            { text: "Change escape route", next: "escapeRoute" }
        ]
    },

    lockDoors: {
        text: "The doors are locked, but the police are outside. You need a new exit plan.",
        img: "assets/images/lockdoors.webp",
        choices: [
            { text: "Dig through the vault", next: "vaultTunnel" },
            { text: "Negotiate with the police", next: "negotiate" }
        ]
    },

    abort: {
        text: "You try to escape, but someone betrays you. The armed policemen are waiting. You're caught.",
        img: "assets/images/abort.webp",
        choices: [],
        ending: "Betrayal & Capture"
    },

    escapeRoute: {
        text: "You take a secret tunnel and escape, but not without casualties. You reach safety.",
        img: "assets/images/escaperoute.webp",
        choices: [],
        ending: "The Great Escape"
    },

    vaultTunnel: {
        text: "The team tunnels through the vault, but security is tight. A shootout begins!",
        img: "assets/images/vault tunnel.webp",
        sound: "gunshot-sound",
        choices: [
            { text: "Fight your way out", next: "fight" },
            { text: "Surrender", next: "surrender" }
        ]
    },

    negotiate: {
        text: "You try negotiating, but the police aren’t buying it. They storm in.",
        img: "assets/images/negotiate.webp",
        choices: [
            { text: "Go out guns blazing", next: "fight" },
            { text: "Use hostages", next: "hostages" }
        ]
    },

    fight: {
        text: "Bullets fly. The team is going down. You see an opening to escape. Take it?",
        img: "assets/images/fight.webp",
        sound: "gunshot-sound",
        choices: [
            { text: "Yes, escape", next: "escapeRoute" },
            { text: "No, fight till the end", next: "dead" }
        ]
    },

    surrender: {
        text: "You surrender and go to jail, but your team escapes. The heist is a failure.",
        img: "images/jail.jpg",
        choices: [],
        ending: "Betrayal & Capture"
    },

    hostages: {
        text: "You use the hostages as leverage and manage to escape, but at a cost.",
        img: "images/escape.jpg",
        choices: [],
        ending: "The Professor’s Legacy"
    },

    dead: {
        text: "The shootout ends. You go down in a blaze of glory. The heist is over.",
        img: "images/death.jpg",
        choices: [],
        ending: "A Bullet for Glory"
    }
};
let timerInterval; // Global timer variable

function startGame() {
    let gameContainer = document.getElementById("game");
    gameContainer.classList.remove("hidden"); 
    gameContainer.style.display = "flex"; 
    playScene("start");
    document.getElementById("background-music").play();
}

function playScene(scene) {
    let current = story[scene];

    // Set background image dynamically
    let gameContainer = document.getElementById("game");
    gameContainer.style.backgroundImage = `url('${current.img}')`;

    // Update text content
    document.getElementById("story-text").textContent = current.text;

    let choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = ""; // Clear previous choices

    if (current.sound) {
        let sound = document.getElementById(current.sound);
        if (sound) sound.play();
    }

    if (current.ending) {
        choicesDiv.innerHTML = `<h2>${current.ending}</h2>`;
        return;
    }

    // Clear previous timer and remove warning effect
    clearInterval(timerInterval);
    let timerElement = document.getElementById("timer");
    timerElement.classList.remove("timer-warning");

    // If there are choices, display them and start the timer
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

        // Start countdown timer (15 seconds)
        startCountdown(scene);
    } else {
        console.warn("No choices available for this scene:", scene);
    }
}

function startCountdown() {
    let timeLeft = 15;
    let timerElement = document.getElementById("timer");
    timerElement.textContent = `Time: ${timeLeft}s`;

    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time left: ${timeLeft}s`;

        // Apply warning effect when 5 seconds remain
        if (timeLeft === 5) {
            timerElement.classList.add("timer-warning");
        }

        // If time runs out, show SweetAlert and restart game
        if (timeLeft === 0) {
            clearInterval(timerInterval);

            Swal.fire({
                title: "Time's up!",
                text: "You took too long to decide. Restarting the game...",
                icon: "warning",
                confirmButtonText: "OK"
            }).then(() => {
                startGame(); // Restart game
            });
        }
    }, 1000);
}