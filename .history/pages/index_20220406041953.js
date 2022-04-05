import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Typography from '@mui/material'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sanity Amazona</title>
        <meta name="description" content="Ecommerce website next and sanity" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography >Sanity</Typography>
    </div>
  )
}
