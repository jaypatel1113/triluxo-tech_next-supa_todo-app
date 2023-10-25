import Header from "../Header";

import type { SectionProps } from "~/types";

// rest can contains id of particular section to scroll in to section 
const Section = ({title, children, id}: SectionProps) => {
    return (
        <section className="relative mt-[60px] md:mt-[80px] w-full min-h-screen" id={id}>
            <Header title={title}/>

            {children}
        </section>
    )
}

export default Section;