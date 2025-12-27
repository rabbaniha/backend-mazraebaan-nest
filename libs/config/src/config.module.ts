import { ConfigModule } from "@nestjs/config";
import { envSchema } from "./env.validation";

export const SharedConfigModule = ConfigModule.forRoot({
  isGlobal: true,
  envFilePath: [".env", `.env.${process.env.NODE_ENV}`],
  validationSchema: envSchema,
});
