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
                <div className="mx-auto max-w-7xl p-6">
                    {data &&
                        data.map((card) => {
                            return (
                                <Link
                                    href={`/card/${card.card_id}`}
                                    key={card.id}
                                >
                                    <div className="mb-4 grid w-full grid-cols-[250px_auto] gap-6 rounded-md bg-neutral-800 px-4 py-4 hover:bg-neutral-600">
                                        <div>
                                            {card.image_url && (
                                                <img
                                                    src={card.image_url}
                                                    alt="Card"
                                                />
                                            )}
                                        </div>
                                        <div>
                                            <h2 className="text-4xl">
                                                {card.name}
                                            </h2>
                                            <h4 className="text-2xl">
                                                {card.set_code}
                                            </h4>
                                            <span className="block">
                                                {card.rarity}
                                            </span>
                                            <span className="block font-mono">
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
