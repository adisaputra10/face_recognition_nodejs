var express    = require('express');
var bodyparser = require('body-parser');
var routes     = require('./routes/routes.js');
var path       = require('path');
var http       = require('http');

// rest upload file 3rd party lib <- jgn lp install/ unduh
var multer     = require('multer');

var app = express();
app.use(bodyparser.urlencoded({extended:true}))
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/temp/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({storage: storage})



app.set('views',path.join(__dirname,'views'));
app.engine('html',require('ejs').renderFile);
app.set('view engine','html');
app.use(bodyparser.json());
app.use('/',routes);
app.use(express.static(path.join(__dirname, 'public')));

var server = http.createServer(app);


// pakek instance app exisiting atau export module baru (yang baru sudah support multiple files)
app.post("/uploadfile", upload.array('photo', 12), (req, res, next) => {
  const files = req.files;
  if(!files){
    return next(error)
  }else{
    res.send(files);
  }
});


server.listen(2000,function(){
  console.log('Server Started on Port 2000 ...');
});

/*
Image Upload Socket
*/
var io  = require('socket.io')(server); //for Socket.io

  io.on('connection',function(socket){
    console.log('A user Connected');

    socket.on('disconnect',function(){
      console.log('user Disconnected');
      });

    socket.on('imageUpload',function(info){
      /*image is transfered in websockets in base64 format from client to server*/
      var base64Data=null;
      
      if(info.format!=='png'&&info.format!=='jpg'&&info.format!=='peg')
        socket.emit('UploadSuccess','false');
      else
        base64Data = info.buffer.replace(/^data:image\/\w+;base64,/, "");

      console.log(info.format);

      /*if data is not null*/
      if(base64Data){
        /*save image to disk*/
        require("fs").writeFile(`./tmp/uploads/${info.role}.png`, base64Data, 'base64', function(err) {
          if(err){
            console.log(err);
            socket.emit('UploadSuccess','false');//return upload failure
            }
            else{
            socket.emit('UploadSuccess','true');//return upload success
            }
          });
      }
    });

  });
