import Hero from "./Hero";
import AuthLoader from "./loaders/AuthLoader";
import { useLoginStore } from "~/store/login";
import Modals from "./modals";

const TodoList: React.FC = (): React.ReactNode => {
    const { user } = useLoginStore();

    if(!user) return <AuthLoader />

    return (
        <section className="relative flex justify-start items-center w-full min-h-screen flex-col py-[35px] md:py-[80px] font-thunder">
            {/* <Loader />      remove this and add to actual place */}
            <Hero />
            <Modals />
        </section>
    );
};

export default TodoList;
