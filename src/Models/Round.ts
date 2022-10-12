const roundFormat = {
  roundName: { type: String },
  noOfQuestion: { type: Number },
  modeOfQuiz: { type: String },
  questionList: [
    {
      questionId: { type: String },
      marksAssigned: {
        onTrue: { type: Number },
        onFalse: { type: Number },
        onUnattempted: { type: Number },
      },
    },
  ],
  roundLeaderBoard: [{ userId: { type: String }, score: { type: Number } }],
};

export default roundFormat;