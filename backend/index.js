const express = require('express');
const app = express();
const multer = require('multer');
const port = process.env.PORT || 3000;
// const formData = new FormData();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname);
    }
  })
  
const upload = multer({ storage });

app.get('/files', (req, res) => {

    res.send(`<center><h1 style={bgcolor="red"}><b> This is the files page </b></h1></center>`);
    console.log("GET request successful !")
});

app.post('/files/upload', upload.array('file'),(req, res) => {

    // // we can access file options using the request object
    // console.log(`params`)
    // console.log(req.params);
    // console.log('body');
    // console.log(req.body);
    // res.send(`Files uploaded successfully !`);
    res.json(req.file);
    console.log("POST reqeust successful !");
});

app.listen(port, () => {
    console.log(`Server listening at port : ${port}`);
});