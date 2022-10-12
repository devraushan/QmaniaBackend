import mongoose, { connect } from "mongoose";

export default async (url: string) => {
  try {
    await mongoose.connect(url);
    console.log("Connected to mongo");
  } catch (e) {
    console.log(e);
  }
};
