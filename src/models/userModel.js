const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      require: [true, 'Pls add your username'],
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'Pls add your email'],
      min: 5,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Pls add your password'],
      min: 6,
      max: 20,
    },
    about: {
      type: String,
      max: 250,
      default: 'x',
    },
    pic: {
      type: String,
      default:
        'https://i.guim.co.uk/img/media/6250d4b4a7cd53be055867155f3a4596578001f6/0_277_5940_3564/master/5940.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=41d7293715615099b8318a1fc5ef5530',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', UserSchema);
