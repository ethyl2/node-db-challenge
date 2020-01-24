const express = require('express');
const Resources = require('./resources-model.js');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Connected to the resources router');
}
);

module.exports = router;