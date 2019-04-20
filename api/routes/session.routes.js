const router = require('express').Router();

const session = require('../controllers/session.controller.js');

// Retrive all sessions
router.get('/', session.findAll);

// Retrieve session with the given id
router.get('/:sessionId', session.findOne);

// Create session
router.post('/', session.create);

// Update session with given id
router.put('/:sessionId', session.update);

// Delete a session with the given id
router.delete('/:sessionId', session.delete);

module.exports = router;
