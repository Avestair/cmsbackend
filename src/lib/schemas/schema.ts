export interface InsertPost {
    id: string;
    content: string;
    description: string;
    title: string;
    category: string;
    slug: string;
    userId: string;
    status: string;
  }


  export interface User {
    id: string;
    email: string;
    fullName: string;
    phoneNumber: string;
    description: string;
    password: string;
    userName: string;
  }

  export interface ApiKey {
    id: string;
    userId: string;
    keyHash: string;
    createdAt: Date;
    expiresAt: Date;
  }