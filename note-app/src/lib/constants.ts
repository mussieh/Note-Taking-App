import { ErrorState } from "@/types/ErrorState";
import { ToastOptions } from "react-toastify";

export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Note Taking App";
export const APP_DESCRIPTION =
    process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
    "A note taking app that can create, update, and delete notes";
export const SERVER_URL =
    process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

export const handleError = (
    error: unknown,
    defaultMessage: string
): ErrorState => {
    return { success: false, message: defaultMessage };
};

export const toastOptions: ToastOptions = {
    style: {
        background: "none",
        boxShadow: "none",
    },
    position: "top-center", // Use enum for position
    autoClose: 5000, // Auto close after 5 seconds
    hideProgressBar: true,
    closeButton: false, // Disable the default close button
};

export const shakeAnimation = {
    x: [0, -10, 10, -10, 10, 0], // Shake effect
    transition: { duration: 0.4, ease: "easeInOut" },
};
