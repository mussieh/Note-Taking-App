import { CheckCircle, X, XCircle } from "@phosphor-icons/react/dist/ssr";

type CustomToastProps = {
    iconSize: number;
    toastType: string;
    message: string;
    dismissToast: () => void;
};

const CustomToast = ({
    iconSize,
    toastType,
    message,
    dismissToast,
}: CustomToastProps) => {
    return (
        <div className="flex justify-between items-center max-w-[39rem] sm:max-w-[27.4rem] w-full min-h-[3.2rem] shadow-[0_16px_32px_-12px_rgba(14,18,27,0.1)] bg-white border border-s-customNeutral-200 rounded-2xl p-[0.8rem]">
            <div className="flex items-center gap-[0.8rem] p-[0.8rem]">
                {toastType === "success" ? (
                    <CheckCircle fill="#21C16B" weight="fill" size={iconSize} />
                ) : (
                    <XCircle fill="#FB3748" weight="fill" size={iconSize} />
                )}
                <p className="text-preset-6 text-customNeutral-950 text-center">
                    {message}
                </p>
            </div>
            <X
                onClick={dismissToast}
                className="cursor-pointer"
                color="#9A9FAD"
                size={iconSize}
            />
        </div>
    );
};

export default CustomToast;
