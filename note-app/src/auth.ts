import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { signInFormSchema } from "./lib/validator";
import { prisma } from "./db/prisma";
import { compareSync } from "bcrypt-ts-edge";
import Google from "next-auth/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                if (
                    credentials == null ||
                    !credentials.email ||
                    !credentials.password
                ) {
                    return null;
                }

                const parsedCredentials =
                    signInFormSchema.safeParse(credentials);
                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const user = await prisma.user.findFirst({
                        where: {
                            email: email as string,
                        },
                    });
                    if (!user) return null;
                    const passwordsMatch = compareSync(
                        password,
                        user.password!
                    );
                    if (passwordsMatch) return user;
                }

                return null;
            },
        }),
        Google,
    ],
});
