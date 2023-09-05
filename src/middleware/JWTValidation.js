const { getPayload } = require('../utils/handleToken');

const jwtValidation = (req, res, next) => {
    try {
        const { authorization } = req.body;

        if (!authorization) {
            return res.status(401).json({
                message: 'Token not found',
              });
        }

        const payload = getPayload(authorization);
        req.payload = payload;

        next();
    } catch (_error) {
        res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = jwtValidation;