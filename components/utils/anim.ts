const transition = {
    staggerChildren: 0.2,
    type: "spring",
    ease: [0.76, 0, 0.24, 1]
}
export const developerText = {
    hidden: {
        opacity: 0,
        x: -60
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 1.6,
            type: "spring",
            duration: 1.4,
            ease: "easeInOut"
        }
    }
};

export const projectContainer = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition
    }
};

export const projectAni = {
    hidden: {
        opacity: 0,
        x: -120
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 4,
            type: "spring",
            ease: "easeInOut"
        }
    }
}

export const projectAniRight = {
    hidden: {opacity: 0, x: 120},
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 4,
            type: "spring",
            ease: "easeInOut"
        }
    }
};

export const navContainer = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition
    }
};


export const navItem = {
    hidden: {
        opacity: 0,
        y: -60
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 2,
            type: "spring",
            ease: "easeInOut"
        }
    }
}