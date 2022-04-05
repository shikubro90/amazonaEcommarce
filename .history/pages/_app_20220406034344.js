import '../styles/globals.css'

const clientSideEmotionCache = createCache

function MyApp({ Component, pageProps }) {
  return <Component 
    {...pageProps}
  />
}

export default MyApp
