import { Ring } from '@uiball/loaders';
import { motion } from 'framer-motion';

const AuthLoader: React.FC = () => {
    return (
        <motion.div 
            className='h-screen w-screen flex justify-center items-center bg-transparent backdrop-blur-md absolute top-0 left-0 z-[5] overflow-hidden'
            exit={{opacity: 0}}
        >
            <div  className='flex w-full justify-center items-center h-full gap-5 '>
                <div className='text-2xl uppercase font-semibold tracking-widest font-thunder translate-y-1 z-40 relative text-black'>
                    Authenticating 
                </div>
                <Ring 
                    size={30}
                    lineWeight={5}
                    speed={1} 
                    color="black" 
                />
            </div>
        </motion.div>
    )
}

export default AuthLoader;