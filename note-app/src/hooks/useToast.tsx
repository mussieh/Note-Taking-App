import CustomToast from "@/components/shared/CustomToast";
import { toastOptions } from "@/lib/constants";
import { useCallback } from "react";
import { toast } from "react-toastify";

const useToast = () => {
    const showToast = useCallback(
        (message: string, toastType: "success" | "error", iconSize: number) => {
            toast.dismiss();
            toast(
                <CustomToast
                    iconSize={iconSize}
                    toastType={toastType}
                    message={message}
                    dismissToast={() => toast.dismiss()}
                />,
                toastOptions
            );
        },
        []
    );

    return { showToast };
};

export default useToast;
