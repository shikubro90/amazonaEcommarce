import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sanity Amazona</title>
        <meta name="description" content="Ecommerce website next and sanity" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
    </div>
  )
}
