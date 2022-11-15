import Joi from "joi";

const categoriSchema = Joi.object({
  name: Joi.string().required().min(3).max(255),
  description: Joi.string().required().min(3).max(255),
});

export default categoriSchema;
