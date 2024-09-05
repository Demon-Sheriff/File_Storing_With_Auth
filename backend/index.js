const express = require('express');
const app = express();
const multer = require('multer');
const port = process.env.PORT || 3000;
// const formData = new FormData();

const upload = multer({dest: 'uploads/'});

app.get('/files', (req, res) => {

    res.send(`<center><h1 style={bgcolor="red"}><b> This is the files page </b></h1></center>`);
    console.log("GET request successful !")
});

app.post('/files/upload', upload.single('file'),(req, res) => {

    // we can access file options using the request object

    res.send(`Files uploaded successfully !`);
    console.log("POST reqeust successful !")
})

app.listen(port, () => {
    console.log(`Server listening at port : ${port}`);
});