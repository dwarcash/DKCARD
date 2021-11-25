const User = require('../models/User');
const HttpError = require('../models/http-error');
/* import User from '../models/User' */


const login = async (req, res, next) => {
    const { loginEmail, password } = req.body;
    console.log(loginEmail)

    let properEmail = loginEmail.trim().toLowerCase()

    let existingUser;
    try {
        existingUser = await User.findOne({ loginEmail: properEmail });
    } catch (err) {
        return next(new HttpError('login failed, try again later', 500));
    }

    if (!existingUser) {
        return res.status(403).json({message: 'user doesnt exis, sign up instead'})
        /* return next(new HttpError('user doesnt exis, sign up instead', 403)); */
    }

    if (password !== existingUser.password) {
        return res.status(403).json({message: 'invalid password'})
        /* return next(new HttpError('invalid password', 403)); */
    }

    res.json(existingUser)
}

const signUp = async (req, res, next) => {
    const { loginEmail, password } = req.body;

    let properEmail = loginEmail.trim().toLowerCase()

    let existingUser;
    try {
        existingUser = await User.findOne({ loginEmail: properEmail });
    } catch (err) {
        return next(new HttpError('signup failed, try again later', 500));
    }

    if (existingUser) {
        return res.status(403).json({message: 'User already exist.'})
        /* return next(new HttpError('User already exist.', 403)); */
    }

    const createdUser = new User({
        loginEmail: properEmail,
        password,
    });

    try {
        /* const sess = await mongoose.startSession();
        sess.startTransaction(); */
        await createdUser.save(/* { session: sess } */);
        /* await sess.commitTransaction(); */
    } catch (err) {
        return next(new HttpError('Creating user failed', 500));
    }

    res.json(createdUser.toObject())
}


const postCard = async (req, res, next) => {
    const { loginEmail, ...rest } = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({ loginEmail });
    } catch (err) {
        return next(new HttpError('login failed, try again later', 500));
    }

    for (const key in rest) {
        console.log(key, rest.key)
        existingUser[key] = rest[key]
    }

    await existingUser.save();

    console.log(existingUser.toObject())

    res.json(existingUser.toObject())
}

exports.login = login;
exports.signUp = signUp;
exports.postCard = postCard;