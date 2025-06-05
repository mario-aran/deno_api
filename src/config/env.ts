import { load } from "https://deno.land/std@0.203.0/dotenv/mod.ts";

// Load environment variables
await load({ envPath: "./.env", export: true });

// Utils
const getEnv = (name: string) => {
  const value = Deno.env.get(name);
  if (!value) throw new Error(`Environment variable ${name} is required`);

  return value;
};

// Constants
export const SERVER_PORT: number = Number(getEnv("SERVER_PORT"));
export const MONGODB_URI: string = getEnv("MONGODB_URI");
