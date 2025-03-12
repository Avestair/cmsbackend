import { generateApiKey, hashedCredential } from "../lib/utils/apiKey";
import { createUser, createApiKey, ValidateByEmailPassword, getApiKeyById } from "../drizzle/queries/user";
import { User, ApiKey } from "../lib/schemas/schema";
import { randomUUIDv7 } from "bun";

export const createUserService = async (email: string, fullName: string, phoneNumber: string, description: string, password: string, userName: string) => {
  const userId = randomUUIDv7();
  const apiKey = generateApiKey();
  const hashedApiKey = hashedCredential(apiKey);
  const hashedPassword = hashedCredential(password);

  const user: User = {
    id: userId,
    email,
    fullName,
    phoneNumber,
    description,
    password: hashedPassword,
    userName,
  };

  const apiKeyRecord: ApiKey = {
    id: randomUUIDv7(),
    userId,
    keyHash: hashedApiKey,
    createdAt: new Date(),
    expiresAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 year expiration
  };
console.log(apiKeyRecord);
console.log(user);

  await createUser(user);
  await createApiKey(apiKeyRecord);

  return {
    userId,
    apiKey,
  };
};



export const ValidateUser = async (email: string, password: string) => {
  // Hash the input password to compare with stored hash
  console.log(email);
  console.log(password);

  const hashedPassword = hashedCredential(password);
  console.log(hashedPassword);


  const user = await ValidateByEmailPassword(email);
  console.log(user);
  

  if (!user) {
    throw new Error("User not found");
  }

  if (user.password !== hashedPassword) {
    throw new Error("Invalid password");
  }

  const apiKeyRecord = await getApiKeyById(user.id);

  if (!apiKeyRecord) {
    throw new Error("API key not found");
  }

  return apiKeyRecord.keyHash; // Return the API key hash
};