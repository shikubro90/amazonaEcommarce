import '../styles/globals.css'

const clientSideEmotionCache = createCache({ key: 'css' });

function MyApp({ Component, pageProps }) {
  return <Component 
    {...pageProps}
  />
}

export default MyApp
