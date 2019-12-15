// /*
//  * Licensed to the Apache Software Foundation (ASF) under one
//  * or more contributor license agreements.  See the NOTICE file
//  * distributed with this work for additional information
//  * regarding copyright ownership.  The ASF licenses this file
//  * to you under the Apache License, Version 2.0 (the
//  * "License"); you may not use this file except in compliance
//  * with the License.  You may obtain a copy of the License at
//  *
//  * http://www.apache.org/licenses/LICENSE-2.0
//  *
//  * Unless required by applicable law or agreed to in writing,
//  * software distributed under the License is distributed on an
//  * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
//  * KIND, either express or implied.  See the License for the
//  * specific language governing permissions and limitations
//  * under the License.
//  */
// var app = {
//     // Application Constructor
//     initialize: function() {
//         document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
//     },

//     // deviceready Event Handler
//     //
//     // Bind any cordova events here. Common events are:
//     // 'pause', 'resume', etc.
//     onDeviceReady: function() {
//         this.receivedEvent('deviceready');
//     },

//     // Update DOM on a Received Event
//     receivedEvent: function(id) {
//         var parentElement = document.getElementById(id);
//         var listeningElement = parentElement.querySelector('.listening');
//         var receivedElement = parentElement.querySelector('.received');

//         listeningElement.setAttribute('style', 'display:none;');
//         receivedElement.setAttribute('style', 'display:block;');

//         console.log('Received Event: ' + id);
//     }
// };

// app.initialize();


// https://www.npmjs.com/package/cordova-plugin-camera

var app = {
    image: null,
	imgOptions:null,
    
    initialize: function() {
      // Use deviceready on a device in in the emulator
           //     document.addEventListener('deviceready', this.onDeviceReady, false);
      // Use DOMContentLoaded in a browser
        document.addEventListener("DOMContentLoaded", this.onDeviceReady, false);
    },
    
    onDeviceReady: function() {
        document.querySelector("#btn").addEventListener("click", app.callCamera);
		console.log("button listener added");
		app.image = document.querySelector("#image");
    },
    
    callCamera: function ( ) {
		app.imgOptions = {quality : 100,
				destinationType: Camera.DestinationType.DATA_URL,
  				sourceType: Camera.PictureSourceType.CAMERA,
				allowEdit : false,
				encodingType : Camera.EncodingType.JPEG,
				mediaType: Camera.MediaType.PICTURE,
				targetWidth : 700,
				cameraDirection : Camera.Direction.FRONT,
				saveToPhotoAlbum : false
			   };
        
        navigator.camera.getPicture( app.imgSuccess, app.imgFail, app.imgOptions );
    },
    
	imgSuccess: function ( imageData ) {
		//got an image back from the camera
		app.image.src = "data:image/jpeg;base64," + imageData;
		nativePathToJpegImage = "/data/data/io.onsen.sampleapp/files/" + imageData;
		window.cordova.plugins.imagesaver.saveImageToGallery(nativePathToJpegImage, onSaveImageSuccess, onSaveImageError);
		// console.log("Image loaded into interface");
		//clear memory in app
		navigator.camera.cleanup();
	},
    
	imgFail: function ( msg ) {
		console.log("Failed to get image: " +  msg);
	}
    
};

app.initialize();


function onSaveImageSuccess() {
	console.log('--------------success');
	alert('success');
}
                                            
function onSaveImageError(error) {
	console.log('--------------error: ' + error);
	alert('error ' + error);
}
