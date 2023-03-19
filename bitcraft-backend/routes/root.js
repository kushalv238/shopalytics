const express = require('express');
const router = express.Router();
const path = require('path');

router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
})

// router.all('*', (req, res) => {
//     res.status(404);

//     if(req.accepts('html')) {
//         res.sendFile(path.join(__dirname, '..', 'views', '404.html'));
//     } else if(req.accepts('json')) {
//         res.json({ message: '404 not found' })
//     } else {
//         res.type('text').send('404 not found');
//     }
// })

module.exports = router