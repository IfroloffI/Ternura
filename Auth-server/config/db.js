const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://Hitler:1488_SS_Hitler@ternura.wlbw2.mongodb.net/ternura?retryWrites=true&w=majority&appName=Ternura';

let db;

const connectDB = async () => {
    try {
        const client = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        
        await client.connect();
        db = client.db(); // Получаем базу данных
        console.log('MongoDB connected');
    } catch (error) {
        console.error(error.message);
        process.exit(1); // Выход с фатальной ошибкой
    }
};

const getDB = () => {
    if (!db) {
        throw new Error('Database not initialized');
    }
    return db;
};

module.exports = { connectDB, getDB };
