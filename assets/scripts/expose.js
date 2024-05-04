// explore.js

window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti();

const SELECT_ASSETS = {
    "select": {
        icon: "no-image.png",
        audio: undefined
    },
    "party-horn": {
        icon: "party-horn.svg",
        audio: "party-horn.mp3"
    },
    "car-horn": {
        icon: "car-horn.svg",
        audio: "car-horn.mp3"
    },
    "air-horn": {
        icon: "air-horn.svg",
        audio: "air-horn.mp3"
    }
}

function init() {
    document.getElementById("horn-select").addEventListener("change", event => {
        const value = event.target.value;

        const { icon, audio } = SELECT_ASSETS[value];

        const audioElement = document.querySelector("audio");
        audioElement.src = `assets/audio/${audio}`;

        const iconElement = document.querySelector("#expose > img");
        iconElement.src = `assets/images/${icon}`;
    });

    document.querySelector("#expose > button").addEventListener("click", event => {
        const audioElement = document.querySelector("audio");
        audioElement.play();

        const selectedHorn = document.getElementById("horn-select").value;
        if (selectedHorn === "party-horn") {
            jsConfetti.addConfetti()
        }
    });

    document.querySelector("#volume-controls > input").addEventListener("change", event => {
        const value = event.target.value;

        let icon = undefined;
        if (value <= 0) icon = "volume-level-0.svg";
        else if (value >= 1 && value < 33) icon = "volume-level-1.svg";
        else if (33 <= value && value < 67) icon = "volume-level-2.svg";
        else {
            icon = "volume-level-3.svg";
        }

        const iconElement = document.querySelector("#volume-controls > img");
        iconElement.src = `assets/icons/${icon}`;

        const audioElement = document.querySelector("audio");
        audioElement.volume = value / 100.0;
    });
}