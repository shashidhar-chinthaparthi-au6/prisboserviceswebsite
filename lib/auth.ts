import { NextRequest } from 'next/server';
import bcrypt from 'bcryptjs';

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin';

// Simple session-based auth (for production, use proper session management)
export function verifyAdminCredentials(username: string, password: string): boolean {
  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
}

export function getAdminSession(request: NextRequest): boolean {
  const session = request.cookies.get('admin_session');
  return session?.value === 'authenticated';
}

export function setAdminSession(): string {
  return 'authenticated';
}
