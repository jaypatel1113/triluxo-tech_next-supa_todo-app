import { useLoaderLogic } from "~/hooks/useLoaderLogic";
import { useAppStore } from "~/store/app";

const Loader: React.FC = (): React.ReactNode => {
    const { loadingPercentage } = useLoaderLogic();
    const { loaded } = useAppStore();
    
    return (
        <section>
            {loaded ? <>Loaded succesfully</> : <>Loading... ${loadingPercentage}%</>}
        </section>
    );
};

export default Loader;