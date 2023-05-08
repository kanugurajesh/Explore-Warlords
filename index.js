import "https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js"

var sound = new Howl({
    src: ['./songs/fight.mp3']
});

const itemImg = document.querySelectorAll('.item-img');

// get all the images with class item-img and add event listener

itemImg.forEach(function (img) {
    img.addEventListener('click', () => {
        sound.stop();
        sound = new Howl({
            src: ['./songs/fight.mp3']
        });
        sound.play();
    });

    img.addEventListener('mouseover', () => {
        sound.stop();
        sound = new Howl({
            src: ['./songs/fight.mp3']
        });
        sound.play();
    });

    img.addEventListener('mouseout', () => {
        sound.stop();
        sound = new Howl({
            src: ['./songs/fight.mp3']
        });
        sound.stop();
    });
});