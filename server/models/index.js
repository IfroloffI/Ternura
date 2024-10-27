"use strict";

const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://Hitler:1488_SS_Hitler@ternura.wlbw2.mongodb.net/ternura?retryWrites=true&w=majority&appName=Ternura';
const client = new MongoClient(uri);

let db;

const connectDB = async () => {
    if (!db) {
        await client.connect();
        db = client.db('ternura'); // Название базы данных
    }
    return db;
};

module.exports = { connectDB, client };