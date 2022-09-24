import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>TaskYup</title>
        <meta name="description" content="Lorem ipsum" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Image src="/taskyup.svg" alt="Logo TaskYup" width={150} height={50} />
      </header>

      <main>
        <div className="call-to-action-container">
          <h1>New way<br /> to <span>organize</span></h1>
        </div>
      </main>
    </div>
  );
};

export default Home;
