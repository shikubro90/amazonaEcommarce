import '../styles/globals.css'
import { createCache } from '@emotion/cache'
const clientSideEmotionCache = createCache({ key: 'css' });

function MyApp({ Component, pageProps, emotionCache=clientSideEmotionCache }) {
  return 
  <CacheProvider
  >
    <Component 
      {...pageProps}
    />
  </CacheProvider>
}

export default MyApp
