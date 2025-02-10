import { auth } from "@/auth";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";
import { getPasswordResetRequest } from "@/lib/actions/user";
import { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "Reset Password",
};

const ResetPassword = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {
    const session = await auth();

    const passwordResetId = (await params).id;

    const resetRequest = await getPasswordResetRequest(passwordResetId);

    if (session) {
        return redirect("/notes");
    }

    if (!resetRequest || new Date(resetRequest.expiresAt) < new Date()) {
        return (
            <div>
                <Image
                    className="mx-auto rounded-2xl"
                    src="/images/password-reset-error.jpg"
                    alt="Password Reset Error Image"
                    width={400}
                    height={400}
                />
                <h1 className="text-preset-1 mt-8">
                    Error: Invalid or Expired Reset Link
                </h1>
            </div>
        );
    }

    return <ResetPasswordForm token={passwordResetId} />;
};
export default ResetPassword;
