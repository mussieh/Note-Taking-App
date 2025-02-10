"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
    return (
        <motion.main
            initial={{ y: 50, opacity: 0 }}
            exit={{ opacity: 0, y: -20 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white w-screen h-screen flex justify-center items-center"
        >
            <section>
                <Image
                    src="/images/not-found.jpg"
                    alt="Not Found Page Vector Graphics"
                    width={800}
                    height={400}
                />
                <div className="text-center text-preset-1 text-[#452F88]">
                    <Link href="/">Return Home</Link>
                </div>
            </section>
        </motion.main>
    );
};

export default NotFound;
