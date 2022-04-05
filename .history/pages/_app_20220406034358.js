import '../styles/globals.css'
import { createEmotionServer } from '@emotion/server'
const clientSideEmotionCache = createCache({ key: 'css' });

function MyApp({ Component, pageProps }) {
  return <Component 
    {...pageProps}
  />
}

export default MyApp
