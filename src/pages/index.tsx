/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/heme.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Eadafonso | Home</title>
      </Head>

      <main className={styles.contentContainer}>
        <div>
          <section className={styles.hero}>
            <span>👏 Hey, welcome</span>

            <h1>
              News about the
              <br />
              <span>Front-End </span>world
            </h1>

            <p>
              Get acess to all the publications <br />
              <span>Sign to newslaters</span>
            </p>

            {/* <input placeholder="Digite o seu email" /> */}
          </section>

          <img src="/image/avatar.svg" alt="the girl cod" />
        </div>
      </main>
    </>
  );
};

export default Home;
