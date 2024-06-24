import { Module } from '@nestjs/common';
import Joi from 'joi';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 使配置模块全局可用
      envFilePath: [`.env.${process.env.NODE_ENV || 'development'}`, '.env'], // 加载不同环境的配置文件
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production')
          .default('development'),
        DB_MYSQL_URL: Joi.string().required(), // MySQL配置
        REDIS_HOST: Joi.string().required(), // Redis配置
        REDIS_PORT: Joi.number().default(6379),
        REDIS_PASSWORD: Joi.string().allow('', null), // 允许为空字符串或null
        REDIS_DB: Joi.number().default(0),
        JWT_SECRET_KEY: Joi.string().required(), // JWT配置
        APP_PORT: Joi.number().default(3210), // 应用设置
        APP_LOG_ENABLED: Joi.boolean()
          .truthy('true')
          .falsy('false')
          .default(true),
        APP_ERROR_FILTER_ENABLED: Joi.boolean()
          .truthy('true')
          .falsy('false')
          .default(true),
        APP_CORS_ENABLED: Joi.boolean()
          .truthy('true')
          .falsy('false')
          .default(true),
        APP_API_PREFIX: Joi.string().default('/api'),
        APP_API_VERSION: Joi.string().default('1'),
        EMAIL_ENABLED: Joi.boolean()
          .truthy('true')
          .falsy('false')
          .default(false), // 邮件配置
        EMAIL_TRANSPORT: Joi.string().required().when('EMAIL_ENABLED', {
          is: true,
          then: Joi.required(),
          otherwise: Joi.optional(),
        }),
        EMAIL_DEFAULT_SENDER_NAME: Joi.string()
          .required()
          .when('EMAIL_ENABLED', {
            is: true,
            then: Joi.required(),
            otherwise: Joi.optional(),
          }),
        EMAIL_DEFAULT_SENDER_ADDRESS: Joi.string()
          .email()
          .required()
          .when('EMAIL_ENABLED', {
            is: true,
            then: Joi.required(),
            otherwise: Joi.optional(),
          }),
        ROLE_DEFAULT_ID: Joi.number().default(2), // 角色配置
        ROLE_WHITELIST_ID: Joi.string().default('1'),
      }),
    }),
  ],
})
export class ConfigurationModule {}
