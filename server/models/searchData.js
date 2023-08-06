const mongoose = require("mongoose");

const searchDataSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  searchText: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const searchData = mongoose.model("searchData", searchDataSchema);

module.exports = { searchData };
