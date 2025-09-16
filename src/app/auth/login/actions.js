'use server'
import { signIn } from "@/auth";
import { signOut } from "@/auth";

export async function logout() {
    try {
        await signOut({ redirectTo: '/auth/login' });
        return { success: true }
    } catch (error) {
        if (error.message === 'NEXT_REDIRECT') throw error;
        console.log(error)
        return { success: false, message: error.message || 'Something went wrong!' };
    }
}

export async function credentialsLogin(_, formData) {
    try {
        const credentials = Object.fromEntries(formData);
        await signIn("credentials", { redirectTo: '/', ...credentials });
        return { success: true }
    } catch (error) {
        if (error.message === 'NEXT_REDIRECT') throw error;
        if (error.code == 'credentials') {
            return { success: false, message: 'Invalid email or password!' };
        } else {
            return { success: false, message: error.message };
        }
    }
}

export async function googleLogin() {
    try {
        await signIn("google", { redirectTo: '/' });
        return { success: true }
    } catch (error) {
        if (error.message === 'NEXT_REDIRECT') throw error;
        console.log(error)
        return { success: false, message: error.message || 'Something went wrong!' };
    }
}



