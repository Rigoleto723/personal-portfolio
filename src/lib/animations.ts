export const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 }
};

export const scrollReveal = {
    initial: {
        opacity: 0,
        scale: 0.95,
        zIndex: 0
    },
    animate: {
        opacity: 1,
        scale: 1,
        zIndex: 1,
        transition: {
            duration: 0.8,
            ease: [0.6, -0.05, 0.01, 0.99]
        }
    },
    exit: {
        opacity: 0,
        scale: 0.95,
        zIndex: 0,
        transition: {
            duration: 0.8,
            ease: [0.6, -0.05, 0.01, 0.99]
        }
    }
};

export const slideIn = {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 20, opacity: 0 },
    transition: { duration: 0.3 }
};

export const scaleIn = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.9, opacity: 0 },
    transition: { duration: 0.3 }
};

export const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export const staggerItem = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
    transition: { duration: 0.3 }
}; 