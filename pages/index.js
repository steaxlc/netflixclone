import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

//api requests
import {categoryListURL} from '../util/api';

export default function Home({ 
  listNetflix,
  listTrending,
  listToprated,
  listAction,
  listComedy,
  listHorror,
  listRomance,
  listDocumentary }) {
  
  
  const categoryList = [{
    title: 'Netflix Originals',
    items: listNetflix.results,
  }, {
    title: 'Trending',
    items: listTrending.results,
    },
    {
      title: 'Top Rated',
      items: listToprated.results,
    },
    {
      title: 'Action',
      items: listAction.results,
    },
    {
      title: 'Comedy',
      items: listComedy.results,
    },
    {
      title: 'Horror',
      items: listHorror.results,
    },
    {
      title: 'Romance',
      items: listRomance.results,
    },
    {
      title: 'Documentary',
      items: listDocumentary.results,
      },]
  
  console.log(categoryList)

  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  
  let res = await fetch(`${categoryListURL.netflix}`);
  const listNetflix = await res.json();
  res = await fetch(`${categoryListURL.trending}`);
  const listTrending = await res.json();
  res = await fetch(`${categoryListURL.toprated}`);
  const listToprated = await res.json();
  res = await fetch(`${categoryListURL.action}`);
  const listAction = await res.json();
  res = await fetch(`${categoryListURL.comedy}`);
  const listComedy = await res.json();
  res = await fetch(`${categoryListURL.horror}`);
  const listHorror = await res.json();
  res = await fetch(`${categoryListURL.romance}`);
  const listRomance = await res.json();
  res = await fetch(`${categoryListURL.documentary}`);
  const listDocumentary = await res.json();

  return {
    props: {
      listNetflix,
      listTrending,
      listToprated,
      listAction,
      listComedy,
      listHorror,
      listRomance,
      listDocumentary
    }
  }
}