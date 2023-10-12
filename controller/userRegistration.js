const jwt = require("jsonwebtoken");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const { mailer } = require("../config/emailSender");
const cron = require("node-cron");

/******* User Creation  ***********/

async function registration(req, res) {
  try {
    let userDetails = {
      email: req.body.email,
      userName: req.body.userName,
      password: req.body.password,
      role: req.body.role,
    };
    if (
      !userDetails.email ||
      !userDetails.userName ||
      !userDetails.password ||
      !userDetails.role
    ) {
      res.send("All field are required");
    } else {
      const existingUser = await User.find({ email: userDetails.email }).select(
        "email"
      );
      if (existingUser.length > 0) {
        res.status(401).json({ Message: "Already Exist", Email: existingUser });
      } else {
        // res.send("verification Email has been sent");
        const salt = 10;
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        userDetails.password = hashPassword;
        const newUser = await User.create(userDetails);
        mailer(req.body.email, newUser._id);
        res.status(200).json({ newuser: newUser });
      }
    }
  } catch (error) {
    console.log(error.message);
  }
}

/****** verify User */

async function verification(req, res) {
  try {
    const status = await User.findOne({ _id: req.params.id });
    status.isActive = true;
    status.save();
    res.send("your Email has been verified");
  } catch (error) {
    console.log(error.message);
  }
}
/********** User Login ************/
async function login(req, res) {
  try {
    let { email, password, role } = req.body;
    if (!req.body.email || !req.body.password || !req.body.role) {
      //console.log(isActive);
      res.json({ Message: "All fileds are required" });
    } else {
      const foundUser = await User.findOne({ email: req.body.email });

      if (!foundUser) {
        res.status(404).json({ sucess: false, message: "User Does'nt exist" });
      }
      if (!foundUser.isActive) {
        res.send("User is not active");
      } else {
        // the user which we found to get that person ID
        var userValue = await User.findById(foundUser._id).select(
          "password role userName"
        );
        console.log(userValue.role);
        let result = await bcrypt.compare(
          req.body.password,
          userValue.password
        );
        if (!result) {
          return res.json({ Message: result });
        }
        if (userValue.role != req.body.role.toLowerCase()) {
          res.send("this user does'nt exist with this role");
        } else {
          const tokenData = {
            user_id: foundUser._id,
            email: foundUser.email,
            role: foundUser.role,
          };
          const value = jwt.sign(tokenData, process.env.JWT_SECRET);
          res.status(200).json({
            sucuess: true,
            message: `Welecome ${userValue.userName} and your role is ${userValue.role}`,
            token: value,
          });
        }
      }
    }
  } catch (Error) {
    res.status(500).json({ Message: Error.message });
  }
}
// ask old password
// comapare old password
// ask new password.
// hash new password
//replace with old password
// save into db
async function forgotPassword(req, res) {
  try {
    const user = await User.findById(req.tokenData.user_id).select("password");
    const result = await bcrypt.compare(req.body.oldpassword, user.password);
    console.log(result);
    if (!result) {
      res.send("your old password is wrong");
    } else {
      const salt = 10;
      const hashPassword = await bcrypt.hash(req.body.newpassword, salt);
      const upatedUser = await User.updateOne(
        { _id: req.tokenData.user_id },
        { password: hashPassword }
      );
      res.send("your password has been change");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
}

module.exports = { registration, login, forgotPassword, verification };
