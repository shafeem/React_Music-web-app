const jwt = require("jsonwebtoken");

const adminLogin = async (req, res) => {
  try {
    const email = process.env.ADMIN_EMAIL;
    const pw = process.env.ADMIN_PASSWRD;

    console.log(req.query, "this is the datas");
    const { Email, password } = req.query;
    console.log(Email, password, "datas");

    if (Email !== undefined && password !== undefined) {
      if (Email == email) {
        console.log("email and password are equal");
        if (pw == password) {
          console.log("password are equal");

          const admin = {
            email: Email,
          };

          const token = jwt.sign({ admin }, process.env.JWT_SECREAT_KEY, {
            expiresIn: 86400,
          });

          res.json({ message: "Login SuccessFull", token: token });
        } else {
          res.json({ message: "Password Error" });
        }
      } else {
        res.json({ message: "Email Error" });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  adminLogin,
};
