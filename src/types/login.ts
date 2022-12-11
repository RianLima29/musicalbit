import { UserCredential } from "firebase/auth";

export type LoginWithCredentials = {
  email: string;
  password: string;
};

export type UserRole = "admin" | "customer";

export interface User extends UserCredential {
    role: UserRole
}

