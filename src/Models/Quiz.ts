const quizFormat = {
  owner: String,
  editors: String,
  quizName: { type: String, required: true },
  rounds: [String],
  //   joiningKey: { type: String, required: true, unique: true },
  // assignedUsers: [{ userId: { type: String } }],
  // blockList: [{ userId: { type: String } }],
  //   isActive: { type: Boolean },

  //   overallLeaderBoard: [{ userId: { type: String }, score: { type: Number } }],
};

export default quizFormat;
