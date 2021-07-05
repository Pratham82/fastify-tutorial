const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      default: 'IN',
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('user', UserSchema)
