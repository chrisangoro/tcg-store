import { type NextPage } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";

import { api } from "~/utils/api";
import Link from "next/link";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const CardList: NextPage = () => {
    const { data } = api.card.getAll.useQuery();

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
                {/* content */}
                <div className="mx-auto flex max-w-5xl flex-wrap gap-[3.3%] p-6">
                    {data &&
                        data.map((card) => {
                            return (
                                <Link
                                    href={`/card/${card.card_id}`}
                                    key={card.id}
                                    className="mb-[3.3%] w-full md:w-[30%]"
                                >
                                    <div className="mb-4 flex h-full flex-col rounded-md bg-neutral-800 px-4 py-4 hover:bg-neutral-600">
                                        <span className="mb-2 font-mono text-sm text-neutral-400">
                                            {card.rarity}
                                        </span>
                                        <div className="mb-2">
                                            {card.image_url && (
                                                <img
                                                    src={card.image_url}
                                                    alt="Card"
                                                />
                                            )}
                                        </div>
                                        <h2 className="mb-2 text-2xl">
                                            {card.name}
                                        </h2>
                                        <div className="flex justify-between">
                                            <h4 className="text-sm">
                                                {card.set_code}
                                            </h4>
                                            <span className="font-mono text-sm">
                                                ${card.set_price}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    {/* <pre>
                        <code>{JSON.stringify(data, null, 2)}</code>
                    </pre> */}
                </div>
            </main>
        </>
    );
};

export default CardList;
