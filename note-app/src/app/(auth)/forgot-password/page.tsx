import { auth } from "@/auth";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "Forgot Password",
};

const ForgotPassword = async () => {
    const session = await auth();

    if (session) {
        return redirect("/notes");
    }

    return <ForgotPasswordForm />;
};

export default ForgotPassword;
