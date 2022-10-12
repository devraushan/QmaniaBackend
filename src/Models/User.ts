const userFormat = {
  displayName: { type: String, required: true },
  userName: { type: String, required: true, unique: true },
  email: { type: String, unique: true },
  dateOfJoining: { type: Date, default: Date.now },
  password: { type: String, requird: true },
  ownedQuizzes: [{ quizId: { type: String } }],
};

export default userFormat;
