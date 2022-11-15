import Joi from "joi";

const userSchema = Joi.object({
  name: Joi.string().required().max(255).min(3),

  last_name: Joi.string().required().max(255).min(3),

  password: Joi.string().required().min(6).max(50),

  email: Joi.string().email().required().max(255),

  address: Joi.string().required().max(255).min(3),

  tel: Joi.string().optional().max(255),

  age: Joi.number().required().max(100),
});

export default userSchema;
