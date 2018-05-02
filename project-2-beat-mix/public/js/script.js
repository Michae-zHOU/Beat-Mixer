// Drum Arrays
let kicks = new Array(16).fill(false);
let snares = new Array(16).fill(false);
let hiHats = new Array(16).fill(false);
let rideCymbals = new Array(16).fill(false);

const toggleDrum = (soundName, index) => {
    if(soundName === undefined || index === undefined || index < 0 || index >= 16)
        return;

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
    if(soundName === undefined)
        return;

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
            return;
    }
    for(let index = 0; index < sound.length; index++){
        sound[index] = !sound[index];
    }
}

const getNeighborPads = (x, y, size) => {
  const neighborPads = [];
  if (x >= size || y >= size || x < 0 || y < 0 || size < 1) {
    return neighborPads;
  }
  neighborPads.push([x - 1, y]);
  neighborPads.push([x, y - 1]);
  neighborPads.push([x + 1, y]);
  neighborPads.push([x, y + 1]);
  return neighborPads.filter((neighbor) => {
    return neighbor.every((val) => {
      return val >= 0 && val < size;
    });
  });
};
