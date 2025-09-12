import { signOut } from "next-auth/react";

export async function logout() {
    signOut({ redirectTo: '/auth/login' });
}