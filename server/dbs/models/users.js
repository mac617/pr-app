const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let usersSchema = new Schema({
  username: {
    type: String,
    unique: true,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  email: {
    type: String,
    unique: true,
    require: true
  },
  collect: {
    type: [
      {
        comicId: String,
        comicDetail: {
          bookImg: String,
          bookTitle: String,
          bookStatus: String,
          bookAuthor: String,
          bookYear: String,
          bookCountry: String,
          bookUpdataNum: String,
          bookUpdateTime: String
        }
      }
    ]
  }
});

module.exports = mongoose.model("users", usersSchema);
