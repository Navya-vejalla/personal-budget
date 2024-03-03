const mongoose = require('mongoose');

const chartEntrySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  relatedValue: {
    type: Number, 
    required: true,
  },
  color: {
    type: String,
    required: true,
    match: /^#([0-9a-f]{6})$/i,
  },
});

const ChartEntry = mongoose.model('ChartEntry', chartEntrySchema);

module.exports = ChartEntry;
