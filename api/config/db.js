const mongoose = require('mongoose');
// Created the api routes for bookings and authentication and listing feauters

const connectWithDB = () => {
  mongoose.set('strictQuery', false);
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(`DB connected successfully`))
    .catch((err) => {
      console.log(`DB connection failed`);
      console.log(err);
      process.exit(1);
    });
};

module.exports = connectWithDB;
