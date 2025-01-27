import Image from "next/image";
import Link from "next/link";

const Login = () => {
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
                    Welcome to Note
                </h1>
                <p className="text-customNeutral-600 text-[1.4rem] text-center">
                    Please log in to continue
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
                <div className="flex justify-between items-center">
                    <label
                        htmlFor="password"
                        className="font-medium text-[1.4rem] leading-[120%] tracking-[-0.02rem] mb-4 mt-[1.6rem]"
                    >
                        Password
                    </label>
                    <Link href="/forgot-password">
                        <p className="text-[1.2rem] text-customNeutral-600 underline leading-[140%] tracking-[0%] hover:text-customBlue-500">
                            Forgot
                        </p>
                    </Link>
                </div>
                <div className="flex mb-[1.6rem] group hover:bg-customNeutral-50 hover:cursor-pointer border border-customNeutral-300 rounded-[0.8rem] px-[1.6rem] py-[1.2rem] leading-[130%] tracking-[-0.02rem] cursor-pointer">
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
                <button
                    type="submit"
                    className="px-[1.6rem] py-[1.2rem] bg-customBlue-500 font-semibold text-[1.6rem] leading-[120%] tracking-[-0.03rem] text-white rounded-[0.8rem] focus:ring-2 focus:ring-customNeutral-500 focus:ring-offset-2 mb-[1.6rem] hover:bg-customBlue-700"
                >
                    Login
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
                No account yet?{" "}
                <Link href="/signup">
                    <span className="text-customNeutral-950 hover:text-customBlue-500">
                        Sign Up
                    </span>
                </Link>
            </p>
        </section>
    );
};
export default Login;
