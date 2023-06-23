import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};

export default connectToDB;
