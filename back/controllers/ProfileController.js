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
        return res.status(403).json({ message: 'user doesnt exis, sign up instead' })
        /* return next(new HttpError('user doesnt exis, sign up instead', 403)); */
    }

    if (password !== existingUser.password) {
        return res.status(403).json({ message: 'invalid password' })
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
        return res.status(403).json({ message: 'User already exist.' })
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


const addBusiness = async (req, res, next) => {
    const { loginEmail, ...rest } = req.body;

    console.log(rest)
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

const editBusiness = async (req, res, next) => {
    const { loginEmail, ...rest } = req.body;

    console.log(rest)
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




const addProduct = async (req, res, next) => {
    const { loginEmail, name, image } = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({ loginEmail });
    } catch (err) {
        return next(new HttpError('login failed, try again later', 500));
    }

    existingUser.products.push({
        name, image
    })

    await existingUser.save();

    res.json(existingUser.toObject())
}


const addGallery = async (req, res, next) => {
    const { loginEmail, urls } = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({ loginEmail });
    } catch (err) {
        return next(new HttpError('login failed, try again later', 500));
    }

    existingUser.gallery.push(...urls)

    await existingUser.save();

    res.json(existingUser.toObject())
}

const addLogo = async (req, res, next) => {
    const { loginEmail, url } = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({ loginEmail });
    } catch (err) {
        return next(new HttpError('login failed, try again later', 500));
    }

    existingUser.companyLogoUrl = url

    await existingUser.save();

    res.json(existingUser.toObject())
}



exports.login = login;
exports.signUp = signUp;
exports.addBusiness = addBusiness;
exports.editBusiness = editBusiness;
exports.addProduct = addProduct;
exports.addGallery = addGallery;
exports.addLogo = addLogo;