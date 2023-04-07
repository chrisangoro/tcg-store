import { type NextPage } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";

import { api } from "~/utils/api";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const Home: NextPage = () => {
    const hello = api.example.hello.useQuery({ text: "from tRPC" });

    return (
        <>
            <Head>
                <title>T3 TCG</title>
                <meta name="description" content="TCG Store" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${inter.variable}`}>
                {/* header */}
                <div className="flex w-full bg-neutral-200 px-4 py-8">
                    <h1 className="text-xl text-rose-950">TCG STORE TEST</h1>
                </div>
                {/* menu */}
                <div className="flex w-full bg-neutral-950 px-4 py-6">
                    <Link
                        href={`/cards`}
                        className="font-mono text-neutral-500"
                    >
                        Cards
                    </Link>
                </div>
                {/* image / slider? */}
                <div className="w-full bg-rose-950 px-8 py-16">
                    <h4 className="mb-2 text-2xl font-bold text-[#EAD3C1]">
                        Test CTA
                    </h4>
                    <p className="mb-4 text-xl text-[#FFF6F7]">
                        Lorem ipsum dolor sit amet.
                    </p>
                    <a
                        href="#"
                        className="rounded-lg bg-[#EAD3C1] px-4 py-2 text-lg font-bold text-rose-900"
                    >
                        Buy now
                    </a>
                </div>
                {/* content */}
                <div className="mx-auto max-w-7xl p-6">
                    {hello.data ? hello.data.greeting : "Loading tRPC query..."}
                </div>
            </main>
        </>
    );
};

export default Home;
