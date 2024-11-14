// Sounds
const sounds = {
   'kick': new Howl({ src: ['sound/clean-kick.wav'] }),
   'snare': new Howl({ src: ['sound/rack-kick.wav'] }),
   'snare-drum': new Howl({ src: ['sound/snare-drum.wav'] }),
   'bass-hit': new Howl({ src: ['sound/bass-hit.wav'] }),
   'conga': new Howl({ src: ['sound/conga.wav'] }),
   'pop': new Howl({ src: ['sound/pop.wav'] }),
   'hi-hat': new Howl({ src: ['path/to/hi-hat.mp3'] }),
   'bell-ding': new Howl({ src: ['sound/bell-ding.wav'] }),
   'mixkit': new Howl({ src: ['sound/mixkit.wav'] }),

 };
 
 document.querySelectorAll('.buttons-container button').forEach(button => {
   button.addEventListener('click', () => {
     const soundType = button.getAttribute('data-sound');
     sounds[soundType]?.play();
   });
 });



 // Volume control
document.getElementById('volume').addEventListener('input', (e) => {
   const volume = e.target.value / 100; 
   Howler.volume(volume);
 });

 
// Power function
const powerSwitch = document.querySelector('input[type="checkbox"]');

document.querySelectorAll('.buttons-container button').forEach(button => {
  button.addEventListener('click', () => {
    if (powerSwitch.checked) { 
      const soundType = button.getAttribute('data-sound');
      sounds[soundType]?.play();
    }
  });
});

 
 
 