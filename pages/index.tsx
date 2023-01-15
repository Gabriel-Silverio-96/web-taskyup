import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import style from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={style.container}>
      <Head>
        <title>TaskYup | New way to organize</title>
        <meta
          name="description"
          content="Create notes, texts, and kanban to organize your day. Super easy and fast"
        />
        <meta
          property="title"
          content="Organize as suas notas e tarefas with TaskYup"
        />
        <meta property="type" content="website" />
        <meta property="url" content="https://taskyup.vercel.app" />
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
          <h1 className={style.title_main}>
            New way to <span className={style.title_emphasis}>organize</span>
          </h1>

          <p>Easily and quickly organize your day</p>
          <a
            target="_blank"
            href="https://taskyup.com/auth/signup"
            rel="noopener noreferrer"
          >
            <button>Get started</button>
          </a>
          <figure>
            <Image
              src="/images/image-main.png"
              alt="Background TaskYup"
              width={1085}
              height={645}
            />
          </figure>
        </section>

        <section className={style.card_container}>
          <h2>Create and organize</h2>
          <div className={style.cards}>
            <div className={style.card}>
              <div>
                <h2>Notes</h2>
                <p>Create notes to never forget your assignment</p>
                <a
                  target="_blank"
                  href="https://taskyup.com/auth/signup"
                  rel="noopener noreferrer"
                >
                  Get started
                </a>
              </div>
              <Image
                src="/images/image-notes.png"
                alt="Figure notes"
                width={334}
                height={531}
              />
            </div>
          </div>

          <div className={style.cards}>
            <div className={`${style.card} ${style.card_reverse}`}>
              <div>
                <h2>Texts</h2>
                <p>Organize your text quickly using markdown, create lists, tables, to-do lists and more</p>
                <a
                  target="_blank"
                  href="https://taskyup.com/auth/signup"
                  rel="noopener noreferrer"
                >
                  Get started
                </a>
              </div>
              <Image
                src="/images/image-text.png"
                alt="Figure texts"
                width={334}
                height={463}
              />
            </div>
          </div>

          <div className={style.cards}>
            <div className={style.card}>
              <div>
                <h2>Kanban</h2>
                <p>Control the flow of tasks and activities for your team or project</p>
                <a
                  target="_blank"
                  href="https://taskyup.com/auth/signup"
                  rel="noopener noreferrer"
                >
                  Get started
                </a>
              </div>
              <Image
                src="/images/image-kanban.png"
                alt="Figure kanban"
                width={470}
                height={460}
              />
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
