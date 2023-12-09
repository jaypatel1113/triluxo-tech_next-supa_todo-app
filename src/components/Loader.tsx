import { useLoaderLogic } from "~/hooks/useLoaderLogic";
import { useTodoStore } from "~/store/app";

const Loader: React.FC = (): React.ReactNode => {
    const { loadingPercentage } = useLoaderLogic();
    const { loaded } = useTodoStore();
    
    return (
        <section>
            {loaded ? <>Loaded succesfully</> : <>Loading... ${loadingPercentage}%</>}
        </section>
    );
};

export default Loader;