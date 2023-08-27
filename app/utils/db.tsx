import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL as string);
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;
