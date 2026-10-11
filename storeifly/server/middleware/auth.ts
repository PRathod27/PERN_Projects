export interface AuthUser {
  id: String;
  name: string;
  email: string;
  role: "admin" | "merchant" | "customer";
  store_id?: number | null;
}

export interface AuthenticateRequest extends Request {
  user?: AuthUser;
}

const NEON_AUTH_JWKS_URL = process.env.NEON_AUTH_JWKS_URL;

const NEON_AUTH_BASE_URL = process.env.NEON_AUTH_BASE_URL;
