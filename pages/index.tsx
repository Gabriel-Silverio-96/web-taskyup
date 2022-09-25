import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import style from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={style.container}>
      <Head>
        <title>TaskYup</title>
        <meta name="description" content="Lorem ipsum" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Image src="/taskyup.svg" alt="Logo TaskYup" width={100} height={25} />

        <nav>
          <a
            target="_blank"
            href="https://app.taskyup.com/auth/signin"
            rel="noopener noreferrer"
          >
            Sign in
          </a>
          <a
            target="_blank"
            href="https://app.taskyup.com/auth/signup"
            rel="noopener noreferrer"
          >
            <button>Sign up</button>
          </a>
        </nav>
      </header>

      <main>
        <div className={style.call_to_action_container}>
          <h1>
            New way
            <br /> to <span>organize</span>
          </h1>
          <p>Easily and quickly organize your day</p>
          <button>Get started</button>
          <figure>
            <Image
              src="/background.png"
              alt="Background TaskYup"
              width={1034}
              height={909}
            />
          </figure>
        </div>
      </main>
    </div>
  );
};

export default Home;
