const path       = require('path');
const fs         = require('fs');
const express    = require('express');
const faceapi    = require('face-api.js');
const { canvas, faceDetectionNet, faceDetectionOptions, saveFile } = require('../commons');

const router  = express.Router();

router.get('/',async(req,res)=>{
  try {
    //Load weights and Network
    await faceDetectionNet.loadFromDisk('./weights');  
    await faceapi.nets.faceLandmark68Net.loadFromDisk('./weights');
    await faceapi.nets.faceRecognitionNet.loadFromDisk('./weights');
    
    /*
    Load Our Previously Saved Train Data
    */        
    delete require.cache[require.resolve('../model.json')]
    let modelState = require('../model.json');
           
    //Get faceDescriptors for each face  
     const labeledFaceDescriptors = await Promise.all(
       modelState.map(async model => {
    
         let ar=model._descriptors;
         let f32=new Array();
         for(let obj of ar){
          f32.push(Float32Array.from(Object.values(obj)));
         }
        return new faceapi.LabeledFaceDescriptors(model._label,f32);
    })
  );
    
    //Init faceMatcher
     const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors,0.7);     
    
    //Load Image
    const img = await canvas.loadImage('./tmp/uploads/Recognize.png');    
    
    // detect the face with the highest score in the image and compute it's landmarks and face descriptor
    const fullFaceDescription = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();
    if(!fullFaceDescription)
      throw new Error('Unable to detect Face! Try again with different image.');
    
    //Find Best Match of face with labeledFaceDescriptors
    const bestMatch = faceMatcher.findBestMatch(fullFaceDescription.descriptor);    
    
    //Save result image in public/out
    const outQuery = faceapi.createCanvasFromMedia(img);
    faceapi.drawDetection(outQuery, new faceapi.BoxWithText(fullFaceDescription.detection.box, bestMatch.toString()));
    saveFile('queryImage.jpg', outQuery.toBuffer('image/jpeg'));
    console.log('done, saved results to out/queryImage.jpg');
    

    /*
    Send Output predictions to html page
    */
    if(bestMatch._label!=='unknown'){
      //computeMeanDistance with all labeledFaceDescriptors
      const predictions=await Promise.all(
        modelState.map(async model => {
     
          let ar=model._descriptors;
          let f32=new Array();
          for(let obj of ar){
            f32.push(Float32Array.from(Object.values(obj)));
          }
     return {className:model._label,distance:faceMatcher.computeMeanDistance(fullFaceDescription.descriptor,f32)}
   }));
      res.send(predictions);
    }
    else{
      throw new Error('Could Not Detect Face, Please try another picture')      
    }
  } catch (e) {
    console.log(e);
    res.status(400).json({msg:e.message});
  } 
})



router.get('/mobile/:className',async(req,res)=>{

 

  try {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    const {className}=req.params;
    console.log(`Testing ${className}`);   
    //Load weights and Network
    await faceDetectionNet.loadFromDisk('./weights');  
    await faceapi.nets.faceLandmark68Net.loadFromDisk('./weights');
    await faceapi.nets.faceRecognitionNet.loadFromDisk('./weights');
    
    /*
    Load Our Previously Saved Train Data
    */        
    delete require.cache[require.resolve('../model.json')]
    let modelState = require('../model.json');
           
    //Get faceDescriptors for each face  
     const labeledFaceDescriptors = await Promise.all(
       modelState.map(async model => {
    
         let ar=model._descriptors;
         let f32=new Array();
         for(let obj of ar){
          f32.push(Float32Array.from(Object.values(obj)));
         }
        return new faceapi.LabeledFaceDescriptors(model._label,f32);
    })
  );
    
    //Init faceMatcher
     const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors,0.7);     
    
    //Load Image
    const img = await canvas.loadImage('./testing/uploads/'+ className +'.png');    
    
    // detect the face with the highest score in the image and compute it's landmarks and face descriptor
    const fullFaceDescription = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();
    if(!fullFaceDescription)
      throw new Error('Unable to detect Face! Try again with different image.');
    
    //Find Best Match of face with labeledFaceDescriptors
    const bestMatch = faceMatcher.findBestMatch(fullFaceDescription.descriptor);    
    
    //Save result image in public/out
    const outQuery = faceapi.createCanvasFromMedia(img);
    faceapi.drawDetection(outQuery, new faceapi.BoxWithText(fullFaceDescription.detection.box, bestMatch.toString()));
    saveFile('queryImage.jpg', outQuery.toBuffer('image/jpeg'));
    console.log('done, saved results to out/queryImage.jpg');
    

    /*
    Send Output predictions to html page
    */
    if(bestMatch._label!=='unknown'){
      //computeMeanDistance with all labeledFaceDescriptors
      const predictions=await Promise.all(
        modelState.map(async model => {
     
          let ar=model._descriptors;
          let f32=new Array();
          for(let obj of ar){
            f32.push(Float32Array.from(Object.values(obj)));
          }
     return {className:model._label,distance:faceMatcher.computeMeanDistance(fullFaceDescription.descriptor,f32)}
   }));
      res.send(predictions);
    }
    else{
      throw new Error('Could Not Detect Face, Please try another picture')      
    }
  } catch (e) {
    console.log(e);
    res.status(400).json({msg:e.message});
  } 
})

module.exports = router;