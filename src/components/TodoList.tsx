import AuthLoader from "./loaders/AuthLoader";
import Hero from "./Hero";
import Modals from "./modals";

import { useLoginStore } from "~/store/login";

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
