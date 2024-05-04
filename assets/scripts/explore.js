// explore.js

window.addEventListener('DOMContentLoaded', init);

window.speechSynthesis.onvoiceschanged = () => {
    const synthesis = window.speechSynthesis;

    const voices = synthesis.getVoices();

    const selections = document.getElementById("voice-select");
    for (let voice of voices) {
        const element = document.createElement("option");
        element.textContent = `${voice.name} - (${voice.lang})`;
        element.setAttribute("data-lang", voice.lang);
        element.setAttribute("data-name", voice.name);

        selections.appendChild(
            element
        )
    }
}

function init() {

    document.querySelector("button").addEventListener("click", event => {
       const speech = document.getElementById("text-to-speak").value;

        const synth = new SpeechSynthesisUtterance(speech);
        const selections = document.getElementById("voice-select");

        let selectedVoice = selections.selectedOptions[0].getAttribute("data-name");
        let selected = undefined;

        for (let voice of window.speechSynthesis.getVoices()) {
            console.log(voice.name, selectedVoice)
            if (voice.name === selectedVoice) {
                selected = voice;
                break;
            }
        }

        const icon = document.querySelector("img");

        synth.onstart = () => {
            icon.src = `assets/images/smiling-open.png`;
        }

        synth.onend = () => {
            icon.src = `assets/images/smiling.png`;
        }

        if (selected) {
            synth.voice = selected;
            window.speechSynthesis.speak(synth);
        }
    });
}