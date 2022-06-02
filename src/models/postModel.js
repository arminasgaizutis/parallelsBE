const mongoose = require('mongoose');

const PostSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, 'Cannot leave this blank'],
    },
    img: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Post', PostSchema);
