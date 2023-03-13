import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { HomeView } from '@/components/HomeView'

interface Iprops {
  articles?: any
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Space Tourism App</title>
        <meta name="description" content="Space Tourism App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomeView/>
      </main>
    </>
  )
}

// export const getStaticProps = async () => {
//   const res = await fetch(`http://jsonplaceholder.typicode.com/posts?_limit=6`);
//   const articles = await res.json();

//   return {
//     props: {
//       articles
//     }
//   }
// }