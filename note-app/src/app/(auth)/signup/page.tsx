import { auth } from "@/auth";
import SignupForm from "@/components/auth/SignupForm";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "Sign Up",
};

const Signup = async () => {
    const session = await auth();

    if (session) {
        return redirect("/notes");
    }

    return <SignupForm />;
};

export default Signup;
