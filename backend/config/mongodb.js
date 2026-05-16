import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', () => console.log("Database Connected"))
    await mongoose.connect(process.env.MONGO_URI, {
        tls: true,
        retryWrites: true,
        w: "majority"
    })
        .then(() => console.log("Database Connected"))
        .catch((err) => console.log(err))

}

export default connectDB;
