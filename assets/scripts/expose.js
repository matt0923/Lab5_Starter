// expose.js
window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti();

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('img'); 
  const hornAudio = document.querySelector('audio'); 
  const volumeSelect = document.getElementById('volume'); 
  const volumeImage = document.querySelector('#expose > #volume-controls > img'); 
  const sound = document.querySelector('button');

  hornSelect.addEventListener('change', function() {
    const horn = this.value;
    if (horn == 'air-horn') {
      hornImage.src = 'assets/images/air-horn.svg'; 
      hornAudio.src = 'assets/audio/air-horn.mp3'; 
    }

    else if (horn == 'car-horn') {
      hornImage.src = 'assets/images/car-horn.svg'; 
      hornAudio.src = 'assets/audio/car-horn.mp3'; 
    }

    else if(horn == 'party-horn'){
      hornImage.src = 'assets/images/party-horn.svg'; 
      hornAudio.src = 'assets/audio/party-horn.mp3'; 
    }
  });

  volumeSelect.addEventListener('input', function() {
    const volume = this.value;
    if (volume == 0) {
      volumeImage.src = 'assets/icons/volume-level-0.svg';

    } else if ((volume >= 1) && (volume < 33)) {
        volumeImage.src = 'assets/icons/volume-level-1.svg';

    } else if ((volume >= 33) && (volume < 67)) {
        volumeImage.src = 'assets/icons/volume-level-2.svg';

    } else if (volume >= 67){
        volumeImage.src = 'assets/icons/volume-level-3.svg';
    }
  });

  sound.addEventListener('click', function() {
    hornAudio.play();
    if (hornSelect.value == 'party-horn') {
        jsConfetti.addConfetti();
    }
});
}