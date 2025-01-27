import Image from "next/image";
import Link from "next/link";

const Signup = () => {
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
                <h1 className="text-customNeutral-950 font-bold text-[2.4rem] leading-[120%] tracking-[-0.05rem] text-center">
                    Create Your Account
                </h1>
                <p className="text-customNeutral-600 text-[1.4rem] mt-[0.8rem] text-center">
                    Sign up to start organizing your notes and boost your
                    productivity.
                </p>
            </div>
            <form className="flex flex-col mt-[2.4rem]">
                <label
                    htmlFor="email"
                    className="font-medium text-[1.4rem] leading-[120%] tracking-[-0.02rem] mb-4"
                >
                    Email Address
                </label>
                <input
                    type="email"
                    className="border border-customNeutral-300 outline-none focus:ring-2 focus:ring-customNeutral-500 focus:ring-offset-2 focus:bg-white focus:border-customNeutral-950 focus:ring-offset-white rounded-[0.8rem] px-[1.6rem] py-[1.2rem] placeholder:text-[1.4rem] text-[1.4rem] placeholder:text-customNeutral-500 leading-[130%] tracking-[-0.02rem] hover:bg-customNeutral-50 hover:cursor-pointer"
                    id="email"
                    name="email"
                    placeholder="email@example.com"
                />
                <label
                    htmlFor="password"
                    className="font-medium text-[1.4rem] leading-[120%] tracking-[-0.02rem] mb-4 mt-[1.6rem]"
                >
                    Password
                </label>
                <div className="flex group hover:bg-customNeutral-50 hover:cursor-pointer border border-customNeutral-300 rounded-[0.8rem] px-[1.6rem] py-[1.2rem] leading-[130%] tracking-[-0.02rem] cursor-pointer">
                    <input
                        type="password"
                        className="w-full group-hover:bg-customNeutral-50 outline-none hover:cursor-pointer text-[1.4rem] leading-[130%] tracking-[-0.02rem]"
                        id="password"
                        name="password"
                    />
                    <button type="button">
                        <Image
                            className="eye-icon"
                            src="/images/icon-show-password.svg"
                            alt="Show Password Icon"
                            width={20}
                            height={20}
                        />
                    </button>
                </div>
                <div className="flex items-center gap-[0.8rem] mt-4 mb-[1.6rem]">
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
                <button
                    type="submit"
                    className="px-[1.6rem] py-[1.2rem] bg-customBlue-500 font-semibold text-[1.6rem] leading-[120%] tracking-[-0.03rem] text-white rounded-[0.8rem] focus:ring-2 focus:ring-customNeutral-500 focus:ring-offset-2 mb-[1.6rem] hover:bg-customBlue-700"
                >
                    Sign up
                </button>
            </form>
            <hr className="border-customNeutral-200" />
            <p className="text-preset-5 text-customNeutral-600 mt-[2.4rem] mb-[1.6rem] text-center">
                Or log in with:
            </p>
            <div
                tabIndex={0}
                className="px-[1.2rem] py-[1.6rem] border border-customNeutral-300 cursor-pointer flex justify-center items-center hover:bg-customNeutral-50 rounded-[1.2rem]"
            >
                <Image
                    src="images/icon-google.svg"
                    alt="Google Icon"
                    height={24}
                    width={25}
                />
                <p className="px-[1.6rem] font-medium text-[1.6rem] leading-[100%] tracking-[0.05rem]">
                    Google
                </p>
            </div>
            <hr className="border-customNeutral-200 my-[1.6rem]" />
            <p className="text-preset-5 text-customNeutral-600 text-center">
                Already have an account?{" "}
                <Link href="/login">
                    <span className="text-customNeutral-950 hover:text-customBlue-500">
                        Login
                    </span>
                </Link>
            </p>
        </section>
    );
};

export default Signup;
