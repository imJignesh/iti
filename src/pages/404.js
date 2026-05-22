import Head from 'next/head';
import Link from 'next/link';
import styles from './404.module.css';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found – Ignite Training Institute</title>
        <meta name="description" content="Oops! The page you are looking for does not exist. Navigate back to the homepage or explore our courses." />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>404</h1>
          <p className={styles.message}>Sorry, we can’t find the page you’re looking for.</p>
          <Link href="/" className={styles.homeLink}>← Back to Home</Link>
        </main>
      </div>
    </>
  );
}
