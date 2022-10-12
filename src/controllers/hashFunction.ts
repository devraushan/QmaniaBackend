const bcrypt = require("bcrypt");

const encryptPass = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hashPass = await bcrypt.hash(password, salt);
  return hashPass;
};

const checkPass = async (receivedPass: string,hashedPass: string)=>{
  const result = await bcrypt.compare(receivedPass,hashedPass); 
  return result;
}
export = {encryptPass,checkPass};