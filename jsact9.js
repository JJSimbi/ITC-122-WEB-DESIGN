const astroBot = document.getElementById('astroBot');
const body = document.body;
const astrobotText = document.querySelector('.astrobot-text');
const music = document.getElementById('astrobotMusic');

const states = [
    {
        botSrc: "Astro-Bot-Greet.gif",
        bgColor: "",
        bgImage: "url('robot-tech.gif')",
        textClass: "",
        playMusic: false,
        botSizeClass: "large"
    },
    {
        botSrc: "Astro-Bot-Dance.gif",
        bgColor: "",
        bgImage: "url('after-astrobot-bg.gif')",
        textClass: "",
        playMusic: true,
        botSizeClass: "enlarged"
    },
    {
        botSrc: "Astro-Bot-sleep.gif",
        bgColor: "#ffffff",
        bgImage: "none",
        textClass: "sleeping",
        playMusic: false,
        botSizeClass: "enlarged"
    }
];

let currentState = 0;

astroBot.addEventListener('click', () => {
    currentState = (currentState + 1) % states.length;
    const state = states[currentState];

    // Update Astrobot image
    astroBot.src = state.botSrc;

    // Update Astrobot size class
    astroBot.classList.remove("large", "enlarged");
    astroBot.classList.add(state.botSizeClass);

    // Background
    if (state.bgImage === "none") {
        body.style.backgroundImage = "none";
    } else {
        body.style.backgroundImage = state.bgImage || "";
    }

    body.style.backgroundColor = state.bgColor || "";

    // Text style
    astrobotText.className = `astrobot-text ${state.textClass}`;

    // Music handling
    if (state.playMusic) {
        music.currentTime = 0;
        music.play().catch(() => {
            console.warn("Music autoplay may be blocked.");
        });
    } else {
        music.pause();
    }
});