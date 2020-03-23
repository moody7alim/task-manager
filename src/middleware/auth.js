const User = require('../models/user')
const jwt = require('jsonwebtoken')
const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })
        if (!user) {
            throw new Error()
        }
        req.user = user
        req.token = token
        next()
    } catch (e) {
        res.send({ error: 'Please authenticate. auth.js' }).status(401)
    }


}
module.exports = auth