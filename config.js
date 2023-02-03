const path = require('path')
const mongoose = require('mongoose');

require('dotenv-safe').config({
    path: path.join(__dirname, './.env'),
    example: path.join(__dirname, './.env.example'),
});

module.exports = {
    port: process.env.PORT,
};

mongoAtlas = {
    uri: process.env.MONGO_URI,
}

module.exports.mongo = async function () {
    mongoose.set('strictQuery', false);
    await mongoose.connect(mongoAtlas.uri);
    console.log('DataBase connected');
}
