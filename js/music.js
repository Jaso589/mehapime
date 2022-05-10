const d = document;

export function sonido(sound,btnPlay,btnStop){
    let soundTempo;
    const $sound = d.createElement("audio")
    $sound.src=sound;

    d.addEventListener('click', (e)=>{
        if(e.target.matches(btnPlay)){
            soundTempo = setTimeout(()=>{
                $sound.play();
            },1000);
            e.target.disabled = true;
        }
        if(e.target.matches(btnStop)){
            clearTimeout(soundTempo);
            $sound.pause();
            $sound.currentTime= 0;
            d.querySelector(btnPlay).disabled= false;
        }
    })
    
}