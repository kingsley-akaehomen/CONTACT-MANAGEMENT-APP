const Joi = require("joi")


const registerSchema = (input) => {
    const schema = Joi.object({
        username: Joi.string().required(),
        email: Joi.email().string().required(),
        password: Joi.string().required()
    })
    return schema.validate(input)
}

module.exports = registerSchema