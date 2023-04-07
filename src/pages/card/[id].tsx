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

    console.log(data);

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
                {/* content */}
                <div className="mx-auto max-w-7xl p-6">
                    {status === "loading" && <div>Loading...</div>}
                    {status === "error" && <div>Error</div>}
                    {status === "success" && (
                        <>
                            <div className="grid grid-cols-[250px_auto] gap-4">
                                <div>
                                    <img
                                        src={
                                            data.data[0].card_images[0]
                                                .image_url
                                        }
                                    />
                                </div>
                                <div>
                                    <h2 className="mb-2 text-4xl">
                                        {data.data[0].name}
                                    </h2>
                                    <h4 className="mb-2 text-sm">
                                        {data.data[0].type}
                                    </h4>
                                    <p className="text-lg">
                                        {data.data[0].desc}
                                    </p>
                                    {/* "race": "Fiend",
                                        "attribute": "DARK", */}
                                </div>
                            </div>
                            {/* <div>
                                <pre>
                                    <code>{JSON.stringify(data, null, 2)}</code>
                                </pre>
                            </div> */}
                        </>
                    )}
                    {/* {id} */}
                </div>
            </main>
        </>
    );
}
