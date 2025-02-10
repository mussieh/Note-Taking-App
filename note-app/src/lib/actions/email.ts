"use server";

import { ErrorState } from "@/types/ErrorState";
import { forgotPasswordSchema } from "../validator";
import { handleError } from "../constants";
import Mailjet from "node-mailjet";
import { prisma } from "@/db/prisma";
import { v4 as uuidv4 } from "uuid";

const mailjet = Mailjet.apiConnect(
    process.env.MAILJET_API_KEY as string,
    process.env.MAILJET_API_SECRET as string
);

const RATE_LIMIT_MINUTES = 15;

export async function sendPasswordResetEmail(
    prevState: ErrorState,
    formData: FormData
): Promise<ErrorState> {
    try {
        const email = formData.get("email") as string;

        forgotPasswordSchema.parse({ email });

        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return { success: false, message: "Email not found" };
        }

        const lastResetRequest = await prisma.passwordResetRequest.findUnique({
            where: { userId: user.id },
        });

        if (lastResetRequest) {
            const timeDifference =
                new Date().getTime() - lastResetRequest.updatedAt.getTime();
            const timeDifferenceMinutes = timeDifference / (1000 * 60); // Convert milliseconds to minutes

            if (timeDifferenceMinutes < RATE_LIMIT_MINUTES) {
                return {
                    success: false,
                    message: `Please wait before requesting another password reset. You can try again in ${
                        RATE_LIMIT_MINUTES - Math.floor(timeDifferenceMinutes)
                    } minutes.`,
                };
            }
        }

        const token = uuidv4();
        const expiration = new Date(Date.now() + 60 * 60 * 1000); // Token expiration in 1 hour

        const resetLink = `${process.env.NEXT_PUBLIC_SERVER_URL}/reset-password/${token}`;

        const message = {
            From: {
                Email: process.env.SENDER_EMAIL,
                Name: "Notes",
            },
            To: [
                {
                    Email: email,
                },
            ],
            Subject: "Password Reset Request",
            TextPart: `You can reset your password by clicking on the following link: ${resetLink}`,
            HTMLPart: `<p>You can reset your password by clicking on the following link: <a href="${resetLink}">${resetLink}</a></p>`,
        };

        // Send the email first
        await mailjet
            .post("send", { version: "v3.1" })
            .request({ Messages: [message] });

        // Only store the reset request if email was sent successfully
        await prisma.passwordResetRequest.upsert({
            where: { userId: user.id },
            update: {
                token,
                expiresAt: expiration,
            },
            create: {
                userId: user.id,
                token,
                expiresAt: expiration,
            },
        });

        return {
            success: true,
            message: "Password reset email sent successfully",
        };
    } catch (error) {
        console.log(error);
        return handleError(error, "Error sending password reset email");
    }
}
