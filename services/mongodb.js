import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL;

export const dbConnect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL, {
      dbName: "eventry",
    });
    console.log("Mongo Connected successfully");
    return connection;
  } catch (error) {
    console.error("Mongo Connection Error:", error);
  }
};
