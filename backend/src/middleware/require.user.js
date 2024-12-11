const validateUser = (req, res) => {
    try {
        if (req.user) return next();
        res.json({ "error": "Unauthorized User!" }).status(401);
    } catch (error) {
        res.json({ "error": "Unauthorized User!" }).status(401);
    }
}

export default validateUser;