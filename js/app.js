import { sonido } from "./music.js";

document.addEventListener('DOMContentLoaded', (e)=>{
    sonido('assets/arjona2.mp3','#btn-play', '#btn-stop')
})