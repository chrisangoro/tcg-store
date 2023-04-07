import Head from "next/head";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import { useQuery } from "@tanstack/react-query";
import { getCard } from "~/utils/ygoapi";
import Link from "next/link";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export default function CardPage() {
    const router = useRouter();
    const { id } = router.query;

    const { data, status } = useQuery([`card-info`, Number(id)], () =>
        getCard(Number(Number(id)))
    );

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
                    {status === "loading" && <div>Loading...</div>}
                    {status === "error" && <div>Error</div>}
                    {status === "success" && (
                        <div className="flex justify-center">
                            <div className="grid grid-rows-2 gap-4 md:max-w-5xl md:grid-cols-[25%_auto] md:grid-rows-none">
                                <div className="rounded-md bg-neutral-800 p-4">
                                    <img
                                        src={
                                            data.data[0].card_images[0]
                                                .image_url
                                        }
                                        alt="Card"
                                    />
                                </div>
                                <div className="rounded-md bg-neutral-800 p-4">
                                    <h2 className="mb-2 text-3xl">
                                        {`${data.data[0].card_sets[0].set_code}: ${data.data[0].name}`}
                                    </h2>
                                    <div className="flex justify-between">
                                        <h4 className="mb-2 text-sm">
                                            {data.data[0].type}
                                        </h4>
                                        <h4 className="mb-2 text-sm">
                                            {
                                                data.data[0].card_sets[0]
                                                    .set_rarity
                                            }
                                        </h4>
                                    </div>
                                    <p className="mb-4 text-lg">
                                        {data.data[0].desc}
                                    </p>
                                    <span className="text-right font-mono text-sm">
                                        ${data.data[0].card_sets[0].set_price}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </>
    );
}
