const userSchema = require("../model/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userlogin = async (req, res) => {
  try {
    let userId;

    console.log(
      req.body.datas.data.email,
      "this is the main data shafeem shan"
    );
    const { name, email } = req.body.datas.data;

    const user = await userSchema.findOne({ email: email });

    if (user) {
      console.log("user already exist");
      console.log(user);
      userId = user._id;
    } else {
      console.log("user not exist ");
      const newUser = new userSchema({
        name: name,
        email: email,
        number: null,
      });
      await newUser.save();

      const user = await userSchema.findOne({ email: email });
      userId = user._id;
    }
    const token = jwt.sign({ userId }, process.env.JWT_SECREAT_KEY, {
      expiresIn: 86400,
    });

    res.json({
      auth: true,
      token: token,
      name: name,
      email:email,
      status: "success",
      message: "new user",
    });
  } catch (error) {
    console.log(error.message);
  }
};

const verifyNumber = async (req, res) => {
  const number = req.body.number;
  console.log(number, "this is the number here");

  const user = await userSchema.findOne({ number: number });
  let userId;

  if (user) {
    console.log("existing user here");
    userId = user._id;
  } else {
    console.log("user not existing here");
    const newUser = new userSchema({
      name: null,
      email: null,
      number: number,
    });
    await newUser.save();

    const user = await userSchema.findOne({ number: number });
    userId = user._id;
  }
  const token = jwt.sign({ userId }, process.env.JWT_SECREAT_KEY, {
    expiresIn: 86400,
  });

  res.json({ auth: true, token: token, status: "success" });
};

module.exports = {
  userlogin,
  verifyNumber,
};
