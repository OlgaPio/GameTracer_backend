const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  title: String,
  platform: String,
  hoursPlayed: Number,
  completed: Boolean,
  rating: Number,
  image: String
});

module.exports = mongoose.model('Game', gameSchema);