"use client";

import useToast from "@/hooks/useToast";
import { resetUserPassword } from "@/lib/actions/user";
import { shakeAnimation } from "@/lib/constants";
import { resetPasswordSchema } from "@/lib/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { startTransition, useActionState, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";

import { z } from "zod";

type ResetPasswordFormProps = {
    token: string;
};

type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

const ResetPasswordForm = ({ token }: ResetPasswordFormProps) => {
    const router = useRouter();

    const [data, action, pending] = useActionState(resetUserPassword, {
        message: "",
        success: false,
    });
    const { showToast } = useToast();

    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<ResetPasswordFormData>({
        resolver: zodResolver(resetPasswordSchema),
    });

    useEffect(() => {
        setValue("token", token);
    }, [token, setValue]);

    useEffect(() => {
        if (data.success) {
            router.replace("/login");
        } else {
            if (data.message) {
                showToast(data.message, "error", 16);
            }
        }
    }, [data, router, showToast]);

    const onSubmit = async (data: ResetPasswordFormData) => {
        const formData = new FormData();
        formData.append("token", data.token!);
        formData.append("password", data.password);
        formData.append("confirmPassword", data.confirmPassword);

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
                    Reset Your Password
                </h1>
                <p className="text-customNeutral-600 text-center text-[1.4rem]">
                    Choose a new password to secure your account.
                </p>
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col mt-[2.4rem]"
            >
                <label
                    htmlFor="password"
                    className="font-medium text-[1.4rem] leading-[120%] tracking-[-0.02rem] mb-4 mt-[1.6rem]"
                >
                    New Password
                </label>
                <motion.div
                    animate={errors.password ? shakeAnimation : {}}
                    className={`flex group border ${
                        errors.password
                            ? "border-customRed-500"
                            : "border-customNeutral-300"
                    } hover:bg-customNeutral-50 rounded-[0.8rem] px-[1.6rem] py-[1.2rem] leading-[130%] tracking-[-0.02rem] cursor-pointer`}
                >
                    <input
                        type={showPassword ? "text" : "password"}
                        className="w-full group-hover:bg-customNeutral-50 outline-none hover:cursor-pointer text-[1.4rem] leading-[130%] tracking-[-0.02rem]"
                        id="password"
                        {...register("password")}
                    />
                    <button
                        type="button"
                        onClick={() =>
                            setShowPassword((shouldShow) => !shouldShow)
                        }
                    >
                        {showPassword ? (
                            <Image
                                className="eye-icon"
                                src="/images/icon-hide-password.svg"
                                alt="Hide Password Icon"
                                width={20}
                                height={20}
                            />
                        ) : (
                            <Image
                                className="eye-icon"
                                src="/images/icon-show-password.svg"
                                alt="Show Password Icon"
                                width={20}
                                height={20}
                            />
                        )}
                    </button>
                </motion.div>
                {errors.password ? (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-[0.8rem] mt-4 mb-8"
                    >
                        <Image
                            className="info-icon-error"
                            src="/images/icon-info.svg"
                            alt="Info Icon"
                            height={16}
                            width={16}
                        />

                        <p className="text-customRed-500 text-preset-6">
                            {errors.password?.message}
                        </p>
                    </motion.div>
                ) : (
                    <div className="flex items-center gap-[0.8rem] mt-4">
                        <Image
                            className="info-icon"
                            src="/images/icon-info.svg"
                            alt="Info Icon"
                            height={16}
                            width={16}
                        />
                        <p className="text-preset-6 text-customNeutral-600">
                            At least 8 characters
                        </p>
                    </div>
                )}

                <label
                    htmlFor="confirmPassword"
                    className="font-medium text-[1.4rem] leading-[120%] tracking-[-0.02rem] mb-4 mt-[1.6rem]"
                >
                    Confirm New Password
                </label>
                <motion.div
                    animate={errors.confirmPassword ? shakeAnimation : {}}
                    className={`flex group border ${
                        errors.confirmPassword
                            ? "border-customRed-500"
                            : "border-customNeutral-300"
                    } hover:bg-customNeutral-50 rounded-[0.8rem] px-[1.6rem] py-[1.2rem] leading-[130%] tracking-[-0.02rem] cursor-pointer mb-[1.6rem]`}
                >
                    <input
                        type={showPassword ? "text" : "password"}
                        className="w-full group-hover:bg-customNeutral-50 outline-none hover:cursor-pointer text-[1.4rem] leading-[130%] tracking-[-0.02rem]"
                        id="confirmPassword"
                        {...register("confirmPassword")}
                    />
                    <button
                        type="button"
                        onClick={() =>
                            setShowPassword((shouldShow) => !shouldShow)
                        }
                    >
                        {showPassword ? (
                            <Image
                                className="eye-icon"
                                src="/images/icon-hide-password.svg"
                                alt="Hide Password Icon"
                                width={20}
                                height={20}
                            />
                        ) : (
                            <Image
                                className="eye-icon"
                                src="/images/icon-show-password.svg"
                                alt="Show Password Icon"
                                width={20}
                                height={20}
                            />
                        )}
                    </button>
                </motion.div>
                {errors.confirmPassword && (
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
                            {errors.confirmPassword?.message}
                        </p>
                    </motion.div>
                )}

                <motion.button
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    disabled={pending}
                    type="submit"
                    className="px-[1.6rem] py-[1.2rem] bg-customBlue-500 font-semibold text-[1.6rem] leading-[120%] tracking-[-0.03rem] text-white rounded-[0.8rem] focus:ring-2 focus:ring-customNeutral-500 focus:ring-offset-2 mb-[1.6rem] hover:bg-customBlue-700"
                >
                    {pending ? (
                        <ClipLoader color="#fff" size={20} />
                    ) : (
                        "Reset Password"
                    )}
                </motion.button>
            </form>
        </motion.section>
    );
};

export default ResetPasswordForm;
