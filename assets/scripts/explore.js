// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const button = document.querySelector('button');
  const inputTxt = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById("voice-select")
  const synth = window.speechSynthesis;
  const face = document.querySelector('img');
  let voices = [];
  // Function to populate voices in the dropdown
  function populateVoiceList() {
    if (typeof speechSynthesis === "undefined") {
      return;
    }
  
    const voices = speechSynthesis.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  populateVoiceList();
  if (typeof speechSynthesis !== "undefined" && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  button.addEventListener('click', () => {
    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    utterThis.onstart = () => {
      face.src = 'assets/images/smiling-open.png'; 
    };
    utterThis.onend = () => {
      face.src = 'assets/images/smiling.png'; 
    };

    synth.speak(utterThis);
  });
}
