import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { HomeView } from '@/components/HomeView'


export default function Home() {
  return (
    <>
      <Head>
        <title>Space Tourism App</title>
        <meta name="description" content="GSpace Tourism App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomeView/>
      </main>
    </>
  )
}
