import { useEffect, useRef } from "react";

const useClickOutside = (callback: () => void) => {
    const ref = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            callback();
        }
    };

    const handleEscKey = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscKey);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscKey);
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [callback]);

    return ref;
};

export default useClickOutside;
