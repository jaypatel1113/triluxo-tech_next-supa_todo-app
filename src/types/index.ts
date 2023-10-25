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

export type SectionProps = {
    children: React.ReactNode,
    title: string,
    id?: NavItemType["name"],
}

export type HeaderProps = {
    title: string,
}

export type NavItemType = {
    url: string | null,
    name: string,
}