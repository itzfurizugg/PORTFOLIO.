import { useReducedMotion, type Easing, type Variants } from "framer-motion";

export const EASE: Easing = [0.22, 1, 0.36, 1];

export const inView = { once: true, amount: 0.3 } as const;

interface FadeUpOptions {
    distance?: number;
    duration?: number;
    delay?: number;
}

export function useFadeUp({
    distance = 24,
    duration = 0.5,
    delay = 0,
}: FadeUpOptions = {}): Variants {
    const reduce = useReducedMotion();

    if (reduce) {
        return {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: { duration: 0.05, delay: 0 },
            },
        };
    }

    return {
        hidden: { opacity: 0, y: distance },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration, delay, ease: EASE },
        },
    };
}

export function useStagger(stagger = 0.08): Variants {
    const reduce = useReducedMotion();

    return {
        hidden: {},
        visible: {
            transition: { staggerChildren: reduce ? 0 : stagger },
        },
    };
}

export const heroSpring = { stiffness: 150, damping: 20, mass: 1 } as const;

interface SpringRevealOptions {
    distance?: number;
    delay?: number;
    blur?: number;
    scale?: number;
}

export function useSpringReveal({
    distance = 16,
    delay = 0,
    blur = 6,
    scale,
}: SpringRevealOptions = {}): Variants {
    const reduce = useReducedMotion();

    if (reduce) {
        return {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.05, delay: 0 } },
        };
    }

    return {
        hidden: {
            opacity: 0,
            y: distance,
            filter: `blur(${blur}px)`,
            ...(scale ? { scale } : {}),
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            ...(scale ? { scale: 1 } : {}),
            transition: { type: "spring", ...heroSpring, delay },
        },
    };
}

export function useMaskLine(blur = 4): (delay: number) => Variants {
    const reduce = useReducedMotion();

    if (reduce) {
        return () => ({
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.05, delay: 0 } },
        });
    }

    return (delay: number): Variants => ({
        hidden: {
            y: "100%",
            opacity: 0.001,
            filter: `blur(${blur}px)`,
        },
        visible: {
            y: "0%",
            opacity: 1,
            filter: "blur(0px)",
            transition: { type: "spring", ...heroSpring, delay },
        },
    });
}
