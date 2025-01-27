import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
    content: [
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],

    theme: {
        screens: {
            xxl: { max: "2560px" },
            xl: { max: "1440px" },
            lg: { max: "1024px" },
            md: { max: "768px" },
            sm: { max: "425px" },
            xs: { max: "375px" },
            xxs: { max: "320px" },
        },
        extend: {
            fontFamily: {
                sans: ["var(--font-inter)"],
                serif: ["var(--font-noto-serif)"],
                mono: ["var(--font-source-code-pro)"],
            },
            colors: {
                customNeutral: {
                    0: "#FFFFFF",
                    50: "#F5F7FA",
                    100: "#F3F5F8",
                    200: "#E0E4EA",
                    300: "#CACFD8",
                    400: "#232530",
                    500: "#717784",
                    600: "#525866",
                    700: "#2B303B",
                    800: "#232530",
                    900: "#191B25",
                    950: "#0E121B",
                },
                customBlue: {
                    50: "#EBF1FF",
                    500: "#335CFF",
                    700: "#2547D0",
                },
                customGreen: {
                    100: "#191B25",
                    500: "#21C16B",
                },
                customRed: {
                    100: "#FFD5D8",
                    500: "#FB3748",
                },
            },
        },
    },
    plugins: [
        plugin(function ({ addBase }) {
            addBase({
                html: { fontSize: "10px" },
            });
        }),
    ],
} satisfies Config;
