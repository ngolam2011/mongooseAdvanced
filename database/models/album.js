const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlbumSchema = Schema({
  title: String,
  date: Date,
  copiesSolid: Number,
  numberTracks: Number,
  image: String,
  revenue: Number
});

module.exports = AlbumSchema;
