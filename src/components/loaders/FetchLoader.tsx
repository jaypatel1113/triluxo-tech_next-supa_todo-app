import { Ring } from '@uiball/loaders';
import { motion } from 'framer-motion';

type LoaderType = {
    message: string;
}

const FetchLoader: React.FC<LoaderType> = ({message}) => {
    return (
        <motion.div 
            className='relative h-full w-full flex justify-center items-center bg-transparent backdrop-blur-md z-[5] overflow-hidden'
            exit={{opacity: 0}}
        >
            <div  className='flex w-full justify-center items-center h-full gap-5 '>
                <div className='text-3xl uppercase font-semibold tracking-widest font-thunder translate-y-1'>
                    {message} 
                </div>
                <Ring 
                    size={30}
                    lineWeight={5}
                    speed={1} 
                    color="white" 
                />
            </div>
        </motion.div>
    )
}

export default FetchLoader;