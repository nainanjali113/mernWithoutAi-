export const errorhandling = (err, res) => {
    if (err.name === 'ValidationError') return res.status(400).send({ status: false, success: false, message: err.message });
    if (err.name === 'CastError') return res.status(400).send({ status: false, success: false, message: 'Invalid ID format' });
    if (err.code === 11000) return res.status(409).send({ status: false, success: false, message: 'Duplicate value already exists' });
    if (err.name === 'JsonWebTokenError') return res.status(401).send({ status: false, success: false, message: 'Invalid token' });
    if (err.name === 'TokenExpiredError') return res.status(401).send({ status: false, success: false, message: 'Token has expired' });
    if (err.name === 'UnauthorizedError') return res.status(401).send({ status: false, success: false, message: 'Unauthorized access' });
    if (err.name === 'SyntaxError') return res.status(400).send({ status: false, success: false, message: 'Invalid JSON syntax' });
    if (err.status === 403) return res.status(403).send({ status: false, success: false, message: 'Access forbidden' });
    if (err.code === 'ENOENT') return res.status(404).send({ status: false, success: false, message: 'File not found' });
    if (err.status === 405) return res.status(403).send({ status: false, success: false, message: 'Method not allowed' });
    if (err.status === 409) return res.status(403).send({ status: false, success: false, message: err.message });
    if (err.status === 429) return res.status(403).send({ status: false, success: false, message: 'Too many requests' });

    return res.status(500).send({ status: false, success: false, message: err.message || 'Internal Server Error' });
};