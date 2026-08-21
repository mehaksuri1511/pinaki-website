import { createConnection } from "mysql2/promise";
import dotenv from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dirname = path.dirname(fileURLToPath(import.meta.url));

dotenv.config({ path: path.join(dirname, "..", ".env") });

export function requiredEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing ${name} in scripts/wp-export/.env`);
  }
  return value;
}

export function tablePrefix() {
  return process.env.WP_TABLE_PREFIX || "wp_";
}

export function table(name) {
  return `\`${tablePrefix()}${name}\``;
}

export async function connectReadOnly() {
  const connection = await createConnection({
    host: requiredEnv("WP_DB_HOST"),
    port: Number(process.env.WP_DB_PORT || 3306),
    user: requiredEnv("WP_DB_USER"),
    password: requiredEnv("WP_DB_PASSWORD"),
    database: requiredEnv("WP_DB_NAME"),
    multipleStatements: false,
  });

  await connection.query("SET SESSION TRANSACTION READ ONLY");
  return connection;
}
