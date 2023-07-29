const btn = document.getElementById('btn');

btn.addEventListener('click', textToSpeech);

function textToSpeech() {
    const inputValue = document.getElementById('text-to-read').value;
    let speech = new SpeechSynthesisUtterance();

    speech.lang = "en-US";
    speech.text = inputValue;
    speech.rate = 1; 
    speech.pitch = 1;
    speech.volume = 1;

    window.speechSynthesis.speak(speech);
}