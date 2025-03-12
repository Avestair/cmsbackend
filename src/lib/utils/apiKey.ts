import { randomBytes } from 'crypto';
import { createHash } from 'crypto';

export const generateApiKey = (): string => {
  return randomBytes(32).toString('hex');
};

export const hashedCredential = (apiKey: string): string => {
  return createHash('sha256').update(apiKey).digest('hex');
};