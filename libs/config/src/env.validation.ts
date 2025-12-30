import * as Joi from "joi";

export const envSchema = Joi.object({
  NODE_ENV: Joi.string().required(),
  API_PORT: Joi.number(),
  AUTH_PORT: Joi.number(),
  FARM_PORT: Joi.number(),
  SUBSCRIPTION_PORT: Joi.number(),
  DB_HOST: Joi.string().required(),
});
