import z from "zod";

const envSchema = z.object({
  APP_PORT: z.string().transform((value) => parseInt(value)),
});

export const env = envSchema.parse(process.env);
