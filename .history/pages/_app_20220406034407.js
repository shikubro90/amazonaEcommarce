import '../styles/globals.css'
import { createEmotionServer } from '@emotion/ca
const clientSideEmotionCache = createCache({ key: 'css' });

function MyApp({ Component, pageProps }) {
  return <Component 
    {...pageProps}
  />
}

export default MyApp
