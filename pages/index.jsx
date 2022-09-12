import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Firebase NextJS</title>
        <meta
          name="description"
          content="trying to create a chat app with firebase and nextjs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Hello</div>
    </div>
  );
}
