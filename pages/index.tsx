import Head from 'next/head';
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Board from "../components/Board";


export default function Home() {
  return (
    <>
      <Head>
        <title>Chess Board - Moonshot</title>
        <meta name="Chessboard" content="Moonshot" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <Board />
      </main>
    </>
  )
}
