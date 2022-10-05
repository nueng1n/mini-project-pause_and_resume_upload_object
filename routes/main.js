const express = require('express')
const router = express.Router()
const Busboy = require('busboy');
const hash = require('object-hash');


let memory_db = {};
let chunks = [];

router.get('/status', (req, res) => {
    res.send('Server available')
});


//========CHECK============//
router.get('/data', (req, res) => {
    res.status(200).send(Buffer.concat(chunks));
});

router.get('/resume_position', (req, res) => {
    let size = 0;
    for (let s of chunks) {
        size = size + s.length;
    }
    // console.log(size);
    res.send(
        {
            message: "OK",
            position: size.toString(),
        }
    );
});

router.get('/memory_db', (req, res) => {
    res.status(200).send(memory_db);
});


//========END=============//


router.post('/upload-request', (req, res) => {
    let hash_obj = req.body.hash;

    if (!(hash_obj in memory_db)) {
        memory_db[hash_obj] = [];

    }

    console.log(JSON.stringify(memory_db, null, 4));

    res.status(200).send('OK');
});



router.post('/upload', (req, res) => {
    let hash_obj = req.headers.hash;

    if (!(hash_obj in memory_db)) {
        res.status(404).send("do not match");
    }

    const busboy = new Busboy({ headers: req.headers });

    busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
        console.log('Uploading: ' + filename);

        file.on('data', (data) => {
            console.log(data);
            memory_db[hash_obj].push(data);
            chunks.push(data);
        });

    });

    busboy.on('finish', function () {
        console.log(hash(Buffer.concat(chunks)));

        if (hash_obj == hash(Buffer.concat(chunks))) {
            console.log('Upload complete');
            res.send('complete');
        } else {
            console.log('upload not complete');
            res.send('ncomplete');
        }
    });
    return req.pipe(busboy);
});





module.exports = router
