import { PrismaAdapter } from "@auth/prisma-adapter";
import type { NextAuthConfig } from "next-auth";
import { prisma } from "./db/prisma";

export const authConfig = {
    pages: {
        signIn: "/login",
    },
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
    },

    callbacks: {
        async jwt({ token, user }) {
            // If user object is available, add user info to the token
            if (user) {
                token.id = user.id;
                token.email = user.email;
            }
            return token;
        },
        async session({ session, token }) {
            // Attach user info from token to session
            if (token) {
                session.user = {
                    id: token.id as string,
                    email: token.email as string,
                    emailVerified: null,
                };
            }
            return session;
        },
    },
    adapter: PrismaAdapter(prisma),
    providers: [],
} satisfies NextAuthConfig;
