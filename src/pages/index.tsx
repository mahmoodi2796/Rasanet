import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Landing from "../features/Landing";

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
        <title>Rasanet</title>
      </Head>
      <div className="w-full h-full">
        <Landing />
      </div>
    </div>
  );
};

export default IndexPage;
