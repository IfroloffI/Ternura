"use strict";

const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://@/ternura?retryWrites=true&w=majority&appName=';
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