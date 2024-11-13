// Sounds
const sounds = {
   'kick': new Howl({ src: ['sounds/clean-kick.wav'] }),
   'snare': new Howl({ src: ['sounds/rack-kick.wav'] }),
   'snare-drum': new Howl({ src: ['sounds/snare-drum.wav'] }),
   'conga': new Howl({ src: ['sounds/conga.wav'] }),
   'pop': new Howl({ src: ['sounds/pop.wav'] }),
   'hi-hat': new Howl({ src: ['path/to/hi-hat.mp3'] })

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

 
 
 