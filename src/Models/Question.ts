const questionFormat = {
  questionStatement: { type: String, required: true },
  isMcq: { type: Boolean, required: true },
  options: [{ optName: { type: String }, optValue: { type: Number } }],
  answer: { type: String, required: true },
  createdBy: { type: String }
};


export default  questionFormat;
 