const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AnchorSchema = new Schema({
  anchor: {
    type: String,
  },
});
module.exports = mongoose.model('Anchor', AnchorSchema);
