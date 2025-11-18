const Review = require('../models/Review');
const Game = require('../models/Game');

const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    const games = await Game.find();
    
    const reviewsWithGames = reviews.map(review => {
      const game = games.find(g => g._id.toString() === review.gameId);
      return {
        ...review._doc,
        gameTitle: game ? game.title : 'Juego no encontrado'
      };
    });
    
    res.json(reviewsWithGames);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener reseñas' });
  }
};

const createReview = async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.json(review);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear reseña' });
  }
};

module.exports = { getReviews, createReview };