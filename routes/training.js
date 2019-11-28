const express    = require('express');
const path       = require('path');
const fs         = require('fs');
const faceapi    = require('face-api.js');
const { canvas, faceDetectionNet, faceDetectionOptions, saveFile } = require('../commons');

const router  = express.Router();
router.get('/',(req,res)=>{  
  res.render('train');  
});
router.get('/model',(req,res)=>{
  const modelState = require('../model.json');
  res.json(modelState);  
});

router.get('/class/:className',async(req,res)=>{
  try {
    const {className}=req.params;
    console.log(`Train ${className}`);   
    
    //Load weights and Network
    await faceDetectionNet.loadFromDisk('./weights');  
    await faceapi.nets.faceLandmark68Net.loadFromDisk('./weights');
    await faceapi.nets.faceRecognitionNet.loadFromDisk('./weights');
    
    //load image 
    const img = await canvas.loadImage('./tmp/uploads/Train.png');    
    
    // detect the face with the highest score in the image and compute it's landmarks and face descriptor
    const fullFaceDescription = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();
    if(!fullFaceDescription)
      throw new Error('Unable to detect Face! Try again with different image.');
    
    //Save Detection Image in public/out/faceDetection.jpg (Just for Reference)
    const out = faceapi.createCanvasFromMedia(img);
    await faceapi.drawDetection(out, new faceapi.BoxWithText(fullFaceDescription.detection.box, className));
    saveFile('faceDetection.jpg', out.toBuffer('image/jpeg'))
    
    const faceDescriptors = [fullFaceDescription.descriptor];
    const lfd = new faceapi.LabeledFaceDescriptors(className, faceDescriptors);  
    console.log('done, saved results to out/faceDetection.jpg')   
    
    /*
    Load Our Previously Saved Train Data
    */        
    delete require.cache[require.resolve('../model.json')]
    let modelState = require('../model.json');

    let objFound = modelState.find((obj, i) => {
    if (obj._label === className) {
        obj._descriptors.push(lfd._descriptors[0]);
        return true; // stop searching
    }
    });
    if(!objFound){
      modelState.push(lfd);
    }
    /*
    Save Our Trained Data
    */
    fs.writeFileSync('model.json', JSON.stringify(modelState));    
    
    res.status(200).json({Trained:'success'});
  } catch (e) {
    console.log(e);
    res.status(400).send({ error:e.message });
  }     
});

module.exports = router;