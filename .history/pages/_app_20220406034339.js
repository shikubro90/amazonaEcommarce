import '../styles/globals.css'

const clientSideEmotionCache = create

function MyApp({ Component, pageProps }) {
  return <Component 
    {...pageProps}
  />
}

export default MyApp
