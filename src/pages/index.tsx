import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>T3 TCG</title>
        <meta name="description" content="TCG Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-neutral-900">
        {/* header */}
        <div className="flex w-full px-4 py-10 bg-neutral-200"></div>
        {/* menu */}
        <div className="flex w-full px-4 py-6 bg-neutral-950"></div>
        {/* image / slider? */}
        <div className="flex w-full px-4 py-36 bg-rose-900"></div>
        {/* content */}
        <div className=" "></div>
      </main>
    </>
  );
};

export default Home;
