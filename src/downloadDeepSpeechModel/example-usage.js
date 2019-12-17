const path = require('path');
const downloadDeepSpeechModel = require('./index.js');
// TODO: try different path 
// eg 
// deepspeech-0.6.0-models
const modelTarName = 'deepspeechmodels.tar.gz';
const outputPath = path.join('/Users/passarellip/Desktop', modelTarName)


downloadDeepSpeechModel(outputPath, '0.6.0').then((res)=>{
    console.log('res',res)
}).catch((error)=>{
    console.error('error',error)
})