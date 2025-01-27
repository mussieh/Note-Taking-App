import Image from "next/image";

const ResetPassword = () => {
    return (
        <section className="p-[4.8rem] md:py-[4.8rem] md:px-[3.2rem] sm:py-[4rem] sm:px-[1.6rem] bg-white max-w-[54rem] md:max-w-[52.2rem] sm:w-[90%] w-full rounded-[1.2rem] border border-customNeutral-200">
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
            <form className="flex flex-col mt-[2.4rem]">
                <label
                    htmlFor="password"
                    className="font-medium text-[1.4rem] leading-[120%] tracking-[-0.02rem] mb-4 mt-[1.6rem]"
                >
                    New Password
                </label>
                <div className="flex group hover:bg-customNeutral-50 hover:cursor-pointer border border-customNeutral-300 rounded-[0.8rem] px-[1.6rem] py-[1.2rem] leading-[130%] tracking-[-0.02rem] cursor-pointer">
                    <input
                        type="password"
                        className="w-full group-hover:bg-customNeutral-50 outline-none hover:cursor-pointer text-[1.4rem] leading-[130%] tracking-[-0.02rem]"
                        id="password"
                        name="password"
                    />
                    <button>
                        <Image
                            className="eye-icon"
                            src="/images/icon-show-password.svg"
                            alt="Show Password Icon"
                            width={20}
                            height={20}
                        />
                    </button>
                </div>
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
                <label
                    htmlFor="confirm-password"
                    className="font-medium text-[1.4rem] leading-[120%] tracking-[-0.02rem] mb-4 mt-[1.6rem]"
                >
                    Confirm New Password
                </label>
                <div className="flex group hover:bg-customNeutral-50 hover:cursor-pointer border border-customNeutral-300 rounded-[0.8rem] px-[1.6rem] py-[1.2rem] leading-[130%] tracking-[-0.02rem] cursor-pointer mb-[1.6rem]">
                    <input
                        type="password"
                        className="w-full group-hover:bg-customNeutral-50 outline-none hover:cursor-pointer text-[1.4rem] leading-[130%] tracking-[-0.02rem]"
                        id="confirm-password"
                        name="confirm-password"
                    />
                    <button>
                        <Image
                            className="eye-icon"
                            src="/images/icon-show-password.svg"
                            alt="Show Password Icon"
                            width={20}
                            height={20}
                        />
                    </button>
                </div>
                <button
                    type="submit"
                    className="px-[1.6rem] py-[1.2rem] bg-customBlue-500 font-semibold text-[1.6rem] leading-[120%] tracking-[-0.03rem] text-white rounded-[0.8rem] focus:ring-2 focus:ring-customNeutral-500 focus:ring-offset-2 mb-[1.6rem] hover:bg-customBlue-700"
                >
                    Reset Password
                </button>
            </form>
        </section>
    );
};
export default ResetPassword;
