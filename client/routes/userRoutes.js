const express = require('express');
const router = express.Router();

// Define your endpoints here
router.post('/create', /* Your create function */);
router.get('/read', /* Your read function */);
router.put('/update', /* Your update function */);
router.delete('/delete', /* Your delete function */);

module.exports = router;