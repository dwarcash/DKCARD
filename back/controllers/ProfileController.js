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

    res.json(existingUser.toObject({ getters: true }))
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

    res.json(createdUser.toObject({ getters: true }))
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

const addFeedback = async (req, res, next) => {
    const { loginEmail, feedback } = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({ loginEmail });
    } catch (err) {
        return next(new HttpError('login failed, try again later', 500));
    }

    existingUser.feedbacks.push(feedback)

    await existingUser.save();

    res.json(existingUser.toObject())
}

const addEnquiry = async (req, res, next) => {
    const { loginEmail, enquiry } = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({ loginEmail });
    } catch (err) {
        return next(new HttpError('login failed, try again later', 500));
    }

    existingUser.enquiries.push(enquiry)

    await existingUser.save();

    res.json(existingUser.toObject())
}

const fetchUser = async (req, res, next) => {
    const { uid } = req.body;

    let existingUser;
    try {
        existingUser = await User.findById(uid);
    } catch (err) {
        return next(new HttpError('login failed, try again later', 500));
    }

    console.log(existingUser)
    if (existingUser) {
        res.json(existingUser.toObject({ getters: true }))
    }
}



exports.login = login;
exports.signUp = signUp;
exports.addBusiness = addBusiness;
exports.editBusiness = editBusiness;
exports.addProduct = addProduct;
exports.addGallery = addGallery;
exports.addLogo = addLogo;
exports.addFeedback = addFeedback;
exports.addEnquiry = addEnquiry;
exports.fetchUser = fetchUser;