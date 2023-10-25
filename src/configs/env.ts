export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "mysupersecret";
export const DATABASE_HOST = process.env.DATABASE_HOST || "localhost";
export const DATABASE_PORT = parseInt(process.env.DATABASE_PORT || "5432", 10);
export const DATABASE_NAME = process.env.DATABASE_NAME || "sca";
export const DATABASE_USER = process.env.DATABASE_USER || "postgres";
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || "postgres";
