// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (requestType, index, newPresetArray) => {
    
    if(index < 0 || index >= presets.length){
        return [404,[]];
    }
    if(requestType === 'PUT'){
        presets[index] = newPresetArray;
        return [200,presets[index]];
    }
    else if(requestType === 'GET'){
        return [200,presets[index]];
    }
    else{
        return [400,[]];
    }
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
