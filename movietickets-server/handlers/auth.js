const db = require('../models');
const jwt = require('jsonwebtoken');

exports.signin = async function (req, res, next) {
  try {
    const user = db.User.findOne({
      email: req.body.email,
    });
    const { id } = user;
    const isMatch = await user.comparePassword(req.body.password);
    if (isMatch) {
      const token = jwt.sign(
        {
          id,
        },
        process.env.SECRET_KEY,
      );
      return res.status(200).json({
        id,
        token,
      });
    }
    return next({
      status: 400,
      message: 'Invalid Email/Password.',
    });
  } catch (err) {
    return next({
      status: 400,
      message: 'Invalid Email/Password.',
    });
  }
};

exports.signup = async function (req, res, next) {
  try {
    const user = await db.User.create(req.body);
    const { id, email } = user;
    const token = jwt.sign(
      {
        id,
        email,
      },
      process.env.SECRET_KEY,
    );
    return res.status(200).json({
      id,
      email,
      token,
    });
  } catch (err) {
    if (err.code === 11000) {
      err.message = 'Sorry, that email is taken';
    }
    return next({
      status: 400,
      message: err.message,
    });
  }
};
