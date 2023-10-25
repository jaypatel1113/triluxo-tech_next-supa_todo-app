import type { HeaderProps } from "~/types";

const Header = ({title}: HeaderProps) => {
    return (
        <header>
            heading : {title}
        </header>
    )
}

export default Header;