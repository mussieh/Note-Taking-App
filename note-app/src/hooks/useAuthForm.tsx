import { useState, useEffect, useActionState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { startTransition } from "react";
import { signInFormSchema } from "@/lib/validator";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { ErrorState } from "@/types/ErrorState";
import useToast from "./useToast";

type SignInFormData = z.infer<typeof signInFormSchema>;

const useAuthForm = (
    serverAction: (
        prevState: ErrorState,
        formData: FormData
    ) => Promise<ErrorState>
) => {
    const router = useRouter();
    const { status } = useSession();
    const [showPassword, setShowPassword] = useState(false);
    const [isGoogleAuthLoading, setIsGoogleAuthLoading] = useState(false);
    const { showToast } = useToast();

    // Custom hook for action state
    const [data, action, pending] = useActionState(serverAction, {
        message: "",
        success: false,
    });

    // Form initialization with react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInFormData>({
        resolver: zodResolver(signInFormSchema),
    });

    // Handle the successful form submission and redirect logic
    useEffect(() => {
        if (data.success) {
            router.replace("/notes");
        } else {
            if (data.message) {
                showToast(data.message, "error", 16);
            }
        }
    }, [data, router, showToast]);

    // Handle Google Auth loading state
    useEffect(() => {
        if (status === "authenticated" || status === "unauthenticated") {
            setIsGoogleAuthLoading(false);
        }
    }, [status]);

    // Submit form data and trigger the server action
    const onSubmit = async (formData: SignInFormData) => {
        const form = new FormData();
        form.append("email", formData.email);
        form.append("password", formData.password);

        startTransition(() => {
            action(form);
        });
    };

    return {
        register,
        pending,
        handleSubmit,
        errors,
        showPassword,
        setShowPassword,
        isGoogleAuthLoading,
        setIsGoogleAuthLoading,
        onSubmit,
    };
};

export default useAuthForm;
