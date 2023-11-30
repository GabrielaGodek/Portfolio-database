import mongoose from 'mongoose'
import { app } from './index.js'
const uri =
    "mongodb+srv://g0gab1s:vaF3qpFqdmgl2wSO@portfolio.ix1kqev.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
    try {
        await mongoose.connect(uri, {
        });
        console.log(`connected to MongoDB 🏆`);
    } catch (error) {
        console.log(`Upsik 🚩: ${error}`);
    }
}
connect();
const PORT = 3000
const server = app.listen(PORT, () => {
    console.log(`App running on ${PORT}`);
})
