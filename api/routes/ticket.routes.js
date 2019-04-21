const router = require('express').Router();

const ticket = require('../controllers/ticket.controller.js');

// Retrive all tickets from database
router.get('/', ticket.findAll);

// Retrieve ticket with the given id from database
router.get('/:ticketId', ticket.findOne);

// Create ticket
router.post('/', ticket.create);

// Update ticket with given id in tth database
router.put('/:ticketId', ticket.update);

// Delete a ticket with the given id from database
router.delete('/:ticketId', ticket.delete);

module.exports = router;
