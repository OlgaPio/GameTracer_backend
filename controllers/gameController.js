const Game = require('../models/Game');

const getGames = async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener juegos' });
  }
};

const createGame = async (req, res) => {
  try {
    const game = new Game(req.body);
    await game.save();
    res.json(game);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear juego' });
  }
};

const updateGame = async (req, res) => {
  try {
    const game = await Game.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(game);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar juego' });
  }
};

const deleteGame = async (req, res) => {
  try {
    await Game.findByIdAndDelete(req.params.id);
    res.json({ message: 'Juego eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar juego' });
  }
};

module.exports = { getGames, createGame, updateGame, deleteGame};