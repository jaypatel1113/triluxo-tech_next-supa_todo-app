import Head from "next/head";

import Layout from "~/layout";
import Navbar from "~/components/Navbar";
import { getStaticProps } from "~/utils";
import ProtectedRoute from "~/components/ProtectedRoute";
import TodoList from "~/components/TodoList";
import FetchLoader from "~/components/loaders/FetchLoader";
import { useLoginStore } from "~/store/login";

export default function Home() {
    const {message, apiLoading} = useLoginStore();

    return (
        <>
            <Head>
                <title>Create T3 App</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <Navbar />

                <ProtectedRoute redirect='login'>
                    {
                        apiLoading ? 
                            <FetchLoader message={message} /> :
                            <TodoList />
                    }
                </ProtectedRoute>
            </Layout>
        </>
    );
}

export { getStaticProps };