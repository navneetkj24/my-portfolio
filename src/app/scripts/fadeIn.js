import { useEffect } from "react";

export default function useScrollEffect() {
    useEffect(() => {
        const handleScroll = () => {
            const nav = document.querySelector("nav");
            if (window.scrollY > 50) {
                nav?.classList.add("scrolled");
            } else {
                nav?.classList.remove("scrolled");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
}
