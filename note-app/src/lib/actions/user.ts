"use server";

import { signIn } from "@/auth";
import { resetPasswordSchema, signInFormSchema } from "../validator";
import { prisma } from "@/db/prisma";
import { hashSync } from "bcrypt-ts-edge";
import { ErrorState } from "@/types/ErrorState";
import { handleError } from "../constants";

// Helper function to validate user form data
function validateUserCredentials(formData: FormData) {
    return signInFormSchema.parse({
        email: formData.get("email"),
        password: formData.get("password"),
    });
}

export async function signInWithCredentials(
    prevState: ErrorState,
    formData: FormData
): Promise<ErrorState> {
    try {
        const user = validateUserCredentials(formData);

        // Await signIn and check for errors
        const result = await signIn("credentials", {
            ...user,
            redirect: false, // Important to prevent NextAuth from redirecting automatically
        });

        if (result?.error) {
            return { success: false, message: result.error };
        }

        return { success: true, message: "Signed in successfully" };
    } catch (error) {
        return handleError(error, "Invalid email or password");
    }
}

export async function signInWithGoogle() {
    await signIn("google");
}

// Sign up a new user
export async function signUp(
    prevState: ErrorState,
    formData: FormData
): Promise<ErrorState> {
    try {
        const user = validateUserCredentials(formData);

        // Hash the password before saving
        const plainPassword = user.password;
        user.password = hashSync(user.password, 10);

        // Save the new user to the database
        await prisma.user.create({
            data: {
                email: user.email,
                password: user.password,
            },
        });

        // Await signIn and check for errors
        const result = await signIn("credentials", {
            ...{
                email: user.email,
                password: plainPassword,
            },
            redirect: false,
        });

        if (result?.error) {
            return { success: false, message: result.error };
        }

        return { success: true, message: "User created successfully" };
    } catch (error) {
        return handleError(error, "We couldn't create your account");
    }
}

export const getPasswordResetRequest = async (token: string) => {
    return prisma.passwordResetRequest.findUnique({
        where: {
            token,
        },
    });
};

export async function resetUserPassword(
    prevState: ErrorState,
    formData: FormData
): Promise<ErrorState> {
    try {
        const token = formData.get("token")?.toString();
        const plainPassword = formData.get("password")?.toString();

        resetPasswordSchema.parse({
            password: plainPassword,
            confirmPassword: formData.get("confirmPassword"),
        });

        // Find the password reset request by token
        const resetRequest = await prisma.passwordResetRequest.findUnique({
            where: { token },
        });

        if (!resetRequest) {
            throw new Error("Invalid or expired reset token");
        }

        // Hash the new password
        const hashedPassword = hashSync(plainPassword!, 10);

        // Use transaction for atomicity
        await prisma.$transaction([
            prisma.user.update({
                where: { id: resetRequest.userId },
                data: { password: hashedPassword },
            }),
            prisma.passwordResetRequest.delete({
                where: { token },
            }),
        ]);

        return { success: true, message: "Password reset successfully" };
    } catch (error) {
        return handleError(error, "Error resetting password");
    }
}
