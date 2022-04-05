import '../styles/globals.css'
import { createCache } from '@emotion/cache'
const clientSideEmotionCache = createCache({ key: 'css' });

function MyApp({ Component, pageProps, emotionCa }) {
  return <Component 
    {...pageProps}
  />
}

export default MyApp
