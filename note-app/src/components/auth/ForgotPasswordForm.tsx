"use client";

import { sendPasswordResetEmail } from "@/lib/actions/email";
import { forgotPasswordSchema } from "@/lib/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { startTransition, useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { ToastContainer } from "react-toastify";
import { z } from "zod";
import useToast from "@/hooks/useToast";
import { motion } from "motion/react";

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

const ForgotPasswordForm = () => {
    const [data, action, pending] = useActionState(sendPasswordResetEmail, {
        message: "",
        success: false,
    });
    const { showToast } = useToast();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ForgotPasswordFormData>({
        resolver: zodResolver(forgotPasswordSchema),
    });

    useEffect(() => {
        if (data.message) {
            showToast(data.message, data.success ? "success" : "error", 30);
        }
    }, [data, showToast]);

    const onSubmit = async (data: ForgotPasswordFormData) => {
        const formData = new FormData();
        formData.append("email", data.email);

        startTransition(() => {
            action(formData);
        });
    };

    return (
        <motion.section
            initial={{ y: 50, opacity: 0 }}
            exit={{ opacity: 0, y: -20 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="p-[4.8rem] md:py-[4.8rem] md:px-[3.2rem] sm:py-[4rem] sm:px-[1.6rem] bg-white max-w-[54rem] md:max-w-[52.2rem] sm:w-[90%] w-full rounded-[1.2rem] border border-customNeutral-200"
        >
            <Image
                className="mx-auto"
                src="/images/logo.svg"
                width={95}
                height={28}
                alt="Notes Logo"
            />
            <div className="my-[1.6rem]">
                <h1 className="text-customNeutral-950 font-bold text-[2.4rem] leading-[120%] tracking-[-0.05rem] mb-4 text-center">
                    Forgotten your password?
                </h1>
                <p className="text-customNeutral-600 text-[1.4rem] leading-[130%] tracking-[-0.02rem] text-center">
                    Enter your email below, and we&apos;ll send you a link to
                    reset it.
                </p>
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col mt-[2.4rem]"
            >
                <label
                    htmlFor="email"
                    className="font-medium text-[1.4rem] leading-[120%] tracking-[-0.02rem] mb-4"
                >
                    Email Address
                </label>
                <input
                    type="email"
                    className={`border ${
                        errors.email
                            ? "border-customRed-500"
                            : "border-customNeutral-300"
                    } outline-none focus:ring-2 focus:ring-customNeutral-500 focus:ring-offset-2 focus:bg-white focus:border-customNeutral-950 focus:ring-offset-white rounded-[0.8rem] px-[1.6rem] py-[1.2rem] placeholder:text-[1.4rem] text-[1.4rem] placeholder:text-customNeutral-500 leading-[130%] tracking-[-0.02rem] hover:bg-customNeutral-50 hover:cursor-pointer mb-[1.6rem] transition-all duration-300`}
                    id="email"
                    {...register("email")}
                    placeholder="email@example.com"
                />
                {errors.email && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-[0.8rem] mb-8"
                    >
                        <Image
                            className="info-icon-error"
                            src="/images/icon-info.svg"
                            alt="Info Icon"
                            height={16}
                            width={16}
                        />

                        <p className="text-customRed-500 text-preset-6">
                            {errors.email?.message}
                        </p>
                    </motion.div>
                )}

                <motion.button
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    disabled={pending}
                    type="submit"
                    className="px-[1.6rem] py-[1.2rem] bg-customBlue-500 font-semibold text-[1.6rem] leading-[120%] tracking-[-0.03rem] text-white rounded-[0.8rem] focus:ring-2 focus:ring-customNeutral-500 focus:ring-offset-2 hover:bg-customBlue-700"
                >
                    {pending ? (
                        <ClipLoader color="#fff" size={20} />
                    ) : (
                        "Send Reset Link"
                    )}
                </motion.button>
                <ToastContainer />
            </form>
        </motion.section>
    );
};

export default ForgotPasswordForm;
