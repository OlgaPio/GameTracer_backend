const express = require('express');
const { getGames, createGame, updateGame } = require('../controllers/gameController');

const router = express.Router();

router.get('/', getGames);
router.post('/', createGame);
router.put('/:id', updateGame);

module.exports = router;