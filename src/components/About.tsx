import Section from "./wrapper/Section";

import { NavItems } from "~/constants";
import { getId } from "~/utils";

const About = () => {
    // by passing id ... it will be applied ... if not then also it will work without appplying id
    return (
        <Section
            title="About Section"
            id={getId(NavItems[1]?.name) ?? ""}
        >
            about container goes here
        </Section>
    );
};

export default About;
