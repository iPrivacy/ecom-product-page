import Head from "next/head";
import styles from "./layout.module.scss";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Frontend Mentor</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
}
