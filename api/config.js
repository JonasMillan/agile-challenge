const config = {
  port: process.env.PORT || 3001,
  MONGO_DB: process.env.MONGODB_URI || 'mongodb://localhost:27017/agile',
};
module.exports = config;
