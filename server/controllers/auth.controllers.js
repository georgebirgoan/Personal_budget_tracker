
// import User from '../models/model.user.js';
// import bcryptjs from 'bcryptjs';
// import { errorHandler } from '../utils/error.js';
// import jwt from 'jsonwebtoken';

const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/model.user.js');
const { errorHandler } = require('../utils/error.js');

const signUp = async (req, res, next) => {
  console.log('ajunge in signUp');
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    next(error);
  }
};

const signIn = async (req, res, next) => {
  console.log("ajunge sign in")
  const { email, password } = req.body;
  console.log("email, pas back", email, password);

  try {
    const validUser = await User.findOne({ email });
    console.log("valid user", validUser);

    if (!validUser) {
      console.log("eroare valid")
      return next(errorHandler(404, 'User not found'));
    }

    const validPassword = bcryptjs.compareSync(password, validUser.password);

    if (!validPassword) {
      return next(errorHandler(401, 'wrong credentials'));
    }

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: hashedPassword, ...rest } = validUser._doc;
    const expiryDate = new Date(Date.now() + 3600000); // 1 hour
    res
    .cookie('access_token', token, { httpOnly: true, expires: expiryDate })
    .status(200)
    .json({ user: rest, token });
      
  } catch (error) {
    next(error);
  }
};



const google = async (req, res, next) => {
  console.log("ajunge in Google")
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log("user google", user);

    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password: hashedPassword, ...rest } = user._doc;
      const expiryDate = new Date(Date.now() + 3600000); // 1 hour
      console.log(token);
      res
      .cookie('access_token', token, { httpOnly: true, expires: expiryDate })
      .status(200)
      .json({ user: rest, token });


    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new User({
        username:
          req.body.name.split(' ').join('').toLowerCase() +
          Math.random().toString(36).slice(-8),
        email: req.body.email,
        password: hashedPassword,
        profilePicture: req.body.photo,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password: hashedPassword2, ...rest } = newUser._doc;
      const expiryDate = new Date(Date.now() + 3600000); // 1 hour
      console.log("token back",token);
      res
      .cookie('access_token', token, { httpOnly: true, expires: expiryDate })
      .status(200)
      .json({ user: rest, token });
        
    }
  } catch (error) {
    next(error);
  }
};

const signOutUser = (req, res) => {
  console.log("ajunge in signout back")
  res.clearCookie('access_token').status(200).json('Signout success back!');
};

module.exports = {
  signUp,
  signIn,
  google,
  signOutUser
};


