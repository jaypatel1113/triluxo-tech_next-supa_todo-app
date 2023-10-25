// scroll to section
// export const handleScroll = (id) => {
//     const section = document.querySelector(`#${id}`);
//     section?.scrollIntoView({ behavior: "smooth" });
// };
export const handleScroll = (id: string): void => {
    const section = document.querySelector(`#${id}`);

    // adjust as per size of navbar
    let offset;

    if (window.innerWidth >= 768) {
        // For laptop screens (viewport width greater than or equal to 768px)
        offset = 120;
    } else {
        // For mobile screens (viewport width less than 768px)
        offset = 135;
    }

    const sectionTop = section?.getBoundingClientRect().top;
    const bodyRect = document.body.getBoundingClientRect().top;
    
    const offsetTop: number = sectionTop ? sectionTop - bodyRect - offset : 0;

    window.scrollTo({
        top: offsetTop,
        behavior: "smooth", // Use 'auto' for instant scroll
    });
};