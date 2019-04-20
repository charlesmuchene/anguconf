const router = require('express').Router();

const ticket = require('../controllers/ticket.controller.js');

// Retrive all tickets
router.get('/', ticket.findAll);

// Retrieve ticket with the given id
router.get('/:ticketId', ticket.findOne);

// Create ticket
router.post('/', ticket.create);

// Update ticket with given id
// router.put('/:ticketId', ticket.update);

// Delete a ticket with the given id
// router.delete('/:ticketId', ticket.delete);

module.exports = router;
