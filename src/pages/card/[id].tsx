import Head from "next/head";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import { useQuery } from "@tanstack/react-query";
import { getCard } from "~/utils/ygoapi";

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

    // const { data, status } = useQuery({
    //     queryKey: [`card-${id}`, Number(id)],
    //     queryFn: getCard,
    // });

    return (
        <>
            <Head>
                <title>T3 TCG</title>
                <meta name="description" content="TCG Store" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${inter.variable}`}>
                {/* header */}
                <div className="flex w-full bg-neutral-200 px-4 py-10"></div>
                {/* menu */}
                <div className="flex w-full bg-neutral-950 px-4 py-6"></div>
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
                    {status === "loading" && <div>Loading...</div>}
                    {status === "error" && <div>Error</div>}
                    {status === "success" && (
                        <div>
                            <pre>
                                <code>{JSON.stringify(data, null, 2)}</code>
                            </pre>
                        </div>
                    )}
                    {id}
                </div>
            </main>
        </>
    );
}
