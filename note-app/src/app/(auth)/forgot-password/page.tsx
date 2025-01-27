import Image from "next/image";

const ForgotPassword = () => {
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
                    Forgotten your password?
                </h1>
                <p className="text-customNeutral-600 text-[1.4rem] leading-[130%] tracking-[-0.02rem] text-center">
                    Enter your email below, and we&apos;ll send you a link to
                    reset it.
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
                    className="border border-customNeutral-300 outline-none focus:ring-2 focus:ring-customNeutral-500 focus:ring-offset-2 focus:bg-white focus:border-customNeutral-950 focus:ring-offset-white rounded-[0.8rem] px-[1.6rem] py-[1.2rem] placeholder:text-[1.4rem] text-[1.4rem] placeholder:text-customNeutral-500 leading-[130%] tracking-[-0.02rem] hover:bg-customNeutral-50 hover:cursor-pointer mb-[1.6rem]"
                    id="email"
                    name="email"
                    placeholder="email@example.com"
                />
                <button
                    type="submit"
                    className="px-[1.6rem] py-[1.2rem] bg-customBlue-500 font-semibold text-[1.6rem] leading-[120%] tracking-[-0.03rem] text-white rounded-[0.8rem] focus:ring-2 focus:ring-customNeutral-500 focus:ring-offset-2 hover:bg-customBlue-700"
                >
                    Send Reset Link
                </button>
            </form>
        </section>
    );
};
export default ForgotPassword;
