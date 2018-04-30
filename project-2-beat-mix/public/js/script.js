// Drum Arrays
let kicks = new Array(16).fill(false);
let snares = new Array(16).fill(false);
let hiHats = new Array(16).fill(false);
let rideCymbals = new Array(16).fill(false);

const toggleDrum = (soundName, index) => {
    let sound;
    switch(soundName) {
        case 'kicks':
            sound = kicks;  
            break;   
        case 'snares':
            sound = snares; 
            break; 
        case 'hiHats':
            sound = hiHats;
            break; 
        case 'rideCymbals':
            sound = rideCymbals;
            break;    
        default:
            break;
    }
    sound[index] = !sound[index];
};

const clear = (soundName) => {
    switch(soundName) {
        case 'kicks':
            kicks = new Array(16).fill(false);  
            break;   
        case 'snares':
            snares = new Array(16).fill(false); 
            break; 
        case 'hiHats':
            hiHats = new Array(16).fill(false);
            break; 
        case 'rideCymbals':
            rideCymbals = new Array(16).fill(false);
            break;    
        default:
            break;
    }
}

const invert = (soundName) => {
    let sound;
    switch(soundName) {
        case 'kicks':
            sound = kicks;  
            break;   
        case 'snares':
            sound = snares; 
            break; 
        case 'hiHats':
            sound = hiHats;
            break; 
        case 'rideCymbals':
            sound = rideCymbals;
            break;    
        default:
            break;
    }
    for(let index = 0; index < sound.length; index++){
        sound[index] = !sound[index];
    }
}