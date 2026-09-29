export const errorhandling = (err, res) => {
    return res.status(500).send({ status: false, success: false, message: err.message })
}