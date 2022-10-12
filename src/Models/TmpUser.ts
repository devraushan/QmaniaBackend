const tmpUserFormat = {
  userName: String,
  userId: { type: String, unique: true, required: true },
  displayName: String,
};

export default tmpUserFormat;