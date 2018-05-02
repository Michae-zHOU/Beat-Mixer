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


const DIRECTION = 4;
const LEFT = 0;
const RIGHT = 1;
const ABOVE = 2;
const BELOW = 3;
const WIDTH = 5;
const HEIGHT = 5;

const checkValidPosition = (posX, posY) => {
    return !(posX === undefined || posY === undefined || posX < 0 || posX >= WIDTH || posY < 0 || posY >= HEIGHT);
}

const getNeighborPads = (x , y, size) => {
    let result = [];

    if(!checkValidPosition(x,y))
        return result;

    for(var index = 0; index < size-1; index++) {
        let xValue = x;
        let yValue = y;
        if( index % DIRECTION === LEFT) {
            xValue = x - Math.floor(index / DIRECTION) - 1;
        }
        else if( index % DIRECTION === RIGHT) {
            xValue = x + Math.floor(index / DIRECTION) + 1;
        }
        else if( index % DIRECTION === ABOVE) {
            yValue = y + Math.floor(index / DIRECTION) + 1;
        }
        else{
            yValue = y - Math.floor(index / DIRECTION) - 1;
        }

        if(checkValidPosition(xValue, yValue))
            result.push([xValue,yValue]);

    }
    
    return result;
}