const jwt = require("jsonwebtoken");

export default generateToken = (userInfo) => {
  const payload = {
    email: userInfo.email,
    role: userInfo.role,
  };

  const access_token = jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: "7days",
  });

  return access_token;
};
