import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import style from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={style.container}>
      <Head>
        <title>TaskYup</title>
        <meta name="description" content="Create notes, texts, and kanban to organize your day. Super easy and fast" />
        <meta property="title" content="Organize as suas notas e tarefas with TaskYup" />
        <meta property="type" content="website"/>
        <meta property="url" content="https://taskyup.vercel.app"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Image src="/taskyup.svg" alt="Logo TaskYup" width={125} height={50} />

        <nav>
          <a
            target="_blank"
            href="https://taskyup.com/auth/signin"
            rel="noopener noreferrer"
          >
            Sign in
          </a>
          <a
            target="_blank"
            href="https://taskyup.com/auth/signup"
            rel="noopener noreferrer"
          >
            <button>Sign up</button>
          </a>
        </nav>
      </header>

      <main>
        <section className={style.call_to_action_container}>
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
        </section>

        <section className={style.card_container}>
          <h2>Create and organize</h2>
          <div className={style.cards}>
            <div className={style.card}>
              <h3>Notes</h3>
              <p>Create notes to never forget your assignment</p>
            </div>
            <div className={style.card}>
              <div className={style.card_header}>
                <h3>Text</h3>
                <span className={style.badge}>Comming soon</span>
              </div>
              <p>
                Organize your text quickly using markdown, create lists, tables,
                to-do lists and more
              </p>
            </div>
            <div className={style.card}>
              <div className={style.card_header}>
                <h3>Kanban</h3>
                <span className={style.badge}>Comming soon</span>
              </div>
              <p>
                Control the flow of tasks and activities for your team or
                project
              </p>
            </div>
          </div>
        </section>

        <section className={style.quote}>
          <h2>
            For every minute spent
            <br /> organizing, an hour is earned
          </h2>
        </section>

        <footer>
          <hr color="#929292" />
          <div className="footer_container">
            <Image
              src="/taskyup.svg"
              alt="Logo TaskYup"
              width={125}
              height={50}
            />
          <nav>
            <a
              target="_blank"
              href="https://taskyup.com/auth/signin"
              rel="noopener noreferrer"
            >
              Sign in
            </a>
            <a
              target="_blank"
              href="https://taskyup.com/auth/signup"
              rel="noopener noreferrer"
            >
              <button>Sign up</button>
            </a>
          </nav>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Home;
