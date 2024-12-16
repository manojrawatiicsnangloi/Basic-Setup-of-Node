const validateUser = (schema) => async (req, res, next) => {
    try {        
        schema.validate({
            body: req.body,
            params: req.params,
            query: req.query
        });
        return next();
    } catch (error) {
        console.log('------------------------------------Hii_______________-------------------');
        console.log(error);
        res.json({"error" : `${error}`}).status(400);
    }
}

export default validateUser;