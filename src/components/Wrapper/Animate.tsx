import { motion } from "framer-motion";

import { AnimateProps } from "~/types";

const Animate = ({children, effect, className}: AnimateProps) => {
    return (
        <motion.div variants={effect} whileHover="whileHover" whileTap="whileTap" className={className}>
            {children}
        </motion.div>
    )
}

export default Animate;