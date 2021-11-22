import Player from '@vimeo/player';
import  throttle  from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const STORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(onVimeo, 1000));

player.setCurrentTime(Number.parseFloat(localStorage.getItem(STORAGE_KEY)));

function onVimeo(e) {
    const timeUpDate = e.seconds === e.duration ? 0 : e.seconds;
    localStorage.setItem(STORAGE_KEY, timeUpDate);
    
}


