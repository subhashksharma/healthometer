import express, { Request, Response, NextFunction } from 'express';
import { body } from 'express-validator';
import jwt from 'jsonwebtoken';

import {
  validateRequest,
  BadRequestError,
  curretlyLoggerUser,
} from '@commonauth/common';
import { UserModel } from '../../models/userModel/usermodel';
import { Password } from '../../models/userModel/password';

const router = express.Router();

router.post(
  '/user/signin',
  [
    body('email').isEmail().withMessage('Email is not valid'),
    body('password')
      .trim()
      .notEmpty()
      .withMessage('Password should not be empty'),
  ],
  validateRequest,
  async (req: Request, res: Response, next: NextFunction) => {
    console.log(`/auth/api/users/signin`);

    const { email, password } = req.body;
    const userData = await UserModel.findOne({ email });
    if (!userData) {
      res.status(401).send({ error: 'This is not a valid user credentials' });
      throw new BadRequestError('This is not a valid user credentials');
    }
    const matchPassword = await Password.compare(userData.password, password);
    if (!matchPassword) {
      res
        .status(401)
        .send({ error: 'something wrong with your username or password' });
      throw new BadRequestError('Password is not valid');
    }
    // Generate JWT and send back to user upon successful signup
    const userJwt = jwt.sign(
      {
        id: userData.id,
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
      },
      process.env.JWT_KEY!
    );

    // @ts-ignore
    req.session = {
      jwt: userJwt,
    };

    let role = '';
    if (userData.email === 'subhash.bvb@gmail.com') {
      role = 'Admin';
    }
    // console.log(req.session);
    res.status(200).send({
      id: userData.id,
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      token: userJwt,
      role,
    });
  }
);

router.post(
  '/user/signup',
  [
    body('firstName')
      .trim()
      .isLength({ min: 1, max: 50 })
      .withMessage('First Name should not be empty'),
    body('lastName')
      .trim()
      .isLength({ min: 1, max: 20 })
      .withMessage('Last Name should not be empty'),
    body('email').isEmail().withMessage('Email is not valid'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage(
        'Password should be greater or equal than 4 and less than or equal to 20.'
      ),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    console.log(`/auth/api/users/signup called`);
    const { firstName, lastName, email, password } = req.body;

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      console.log(`User with the email : ${email} already exist in database.`);
      throw new BadRequestError('Email is already in use');
    }

    const userData = UserModel.buildUser({
      firstName,
      lastName,
      email,
      password,
    });
    await userData.save();

    // Generate JWT and send back to user upon successful signup
    const userJwt = jwt.sign(
      {
        id: userData.id,
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
      },
      process.env.JWT_KEY!
    );

    // @ts-ignore
    req.session = {
      jwt: userJwt,
    };

    res.status(201).send({
      id: userData.id,
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      token: userJwt,
    });
  }
);

router.post('/user/signout', (req, res) => {
  console.log(`/auth/api/users/signout called`);
  req.session = null;

  res.send({});
});

router.get(
  '/user/currentlyloggedin',
  // curretlyLoggerUser,

  (req, res) => {
    console.log(`auth/api/users/currentuser called`);

    // console.log(req.session);

    if (!req.session || !req.session.jwt) {
      return res.send({ currentUser: null });
    }
    try {
      const payLoad = jwt.verify(req.session.jwt, process.env.JWT_KEY!);
      return res.send({ currentUser: payLoad });
    } catch (err) {
      return res.send({ currentUser: null });
    }

    // console.log(
    //   `Currently logged user information  ::: ${JSON.stringify(
    //     req.currentUser
    //   )} `
    // );
    // return res.send({ currentUser: req.currentUser });
  }
);

export { router as authenticationRouter };
