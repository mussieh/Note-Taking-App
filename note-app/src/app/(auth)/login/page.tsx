import { auth } from "@/auth";
import LoginForm from "@/components/auth/LoginForm";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "Login",
};

const Login = async () => {
    const session = await auth();

    if (session) {
        return redirect("/notes");
    }

    return <LoginForm />;
};
export default Login;
