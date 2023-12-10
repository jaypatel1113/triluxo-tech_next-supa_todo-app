import { RaceBy } from '@uiball/loaders';
import { motion } from 'framer-motion';

import { scaleVariant } from '~/motion';

const MainLoader: React.FC = () => {
    return (
        <motion.div 
            className='h-screen w-screen flex justify-center items-center bg-[#000] absolute top-0 left-0 z-[5] invert'
            exit={{opacity: 0}}
        >
            <motion.div  {...scaleVariant}>
                {/* <Ring 
                    size={40}
                    lineWeight={5}
                    speed={1} 
                    color="white" 
                /> */}
                <RaceBy 
                    size={140}
                    lineWeight={5}
                    speed={1.4} 
                    color="black" 
                />
            </motion.div>
        </motion.div>
    )
}

export default MainLoader;