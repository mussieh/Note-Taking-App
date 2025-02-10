import { z } from "zod";

// Schema for signing in a user
export const signInFormSchema = z.object({
    email: z
        .string()
        .email("Please enter a valid email address.")
        .min(8, "Email must be at least 8 characters."),
    password: z.string().min(8, "Password must be at least 8 characters."),
});

export const forgotPasswordSchema = z.object({
    email: z
        .string()
        .email("Please enter a valid email address.")
        .min(8, "Email must be at least 8 characters."),
});

export const resetPasswordSchema = z
    .object({
        token: z.string().optional(),
        password: z
            .string()
            .min(8, "Password must be at least 8 characters long."),

        confirmPassword: z.string().min(1, "Confirm password is required."),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match.",
        path: ["confirmPassword"], // Path to show error on confirmPassword field
    });
