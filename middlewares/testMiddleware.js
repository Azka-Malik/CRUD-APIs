require('dotenv').config()

const token = process.env.BASIC_TOKEN;

const CheckBasicToken = (request, response, next) => {
    if(request.headers && request.headers['authorization'] && request.headers['authorization'].split(' ')[1] === token)
        next();
    else
        response.status(401).json({
            "error": "Invalid token"
        })
}
module.exports = CheckBasicToken;