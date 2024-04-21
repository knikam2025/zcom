import mongoose  from "mongoose";
import dotenv from 'dotenv';

const connectDB = async() => {

    try {
        const comp = await mongoose.connect(process.env.MONGO_URL);
        console.log(`connected To Mongodb Database ${comp.connection.host}`.bgYellow.white);

    } catch(error){
        console.log([`error in mongodb ${error}`.bgRed])
    }

}


export default connectDB;