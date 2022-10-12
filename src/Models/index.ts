//Imports
const mongoose = require("mongoose");
const { Schema } = mongoose;
import questionFormat from "./Question";
import tmpUserFormat from "./TmpUser";
import userFormat from "./User";
import quizFormat from "./Quiz";
import roundFormat from "./Round";

// Schema Creation
const questionSchema = new Schema(questionFormat);
const tmpUserSchema = new Schema(tmpUserFormat);
const userSchema = new Schema(userFormat);
const quizSchema = new Schema(quizFormat);
const roundSchema = new Schema(roundFormat);

//Exports
const TmpUser = mongoose.model("TmpUser",tmpUserSchema);
const User = mongoose.model("User", userSchema);
const Quiz = mongoose.model("Quiz", quizSchema);
const Question = mongoose.model("Question", questionSchema);
const Round = mongoose.model("Round",roundSchema);

export default {TmpUser,User,Quiz,Question,Round};