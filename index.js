import "https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js"

var sound = new Howl({
    src: ['./songs/fight.mp3']
});

sound.play();