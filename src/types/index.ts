// animate props
export type AnimateProps = {
    children: React.ReactNode,
    effect: {
        whileHover: {
            scale?: number,
            scaleX?: number,
        }, 
        whileTap: {
            scale?: number,
            scaleX?: number,
        }
    },
    className?: string,
}