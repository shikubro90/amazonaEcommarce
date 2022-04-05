import '../styles/globals.css'
import { createCache } from '@emotion/cache'
import { CacheProvider } from '@emotion/re'

const clientSideEmotionCache = createCache({ key: 'css' });


function MyApp({ Component, pageProps, emotionCache=clientSideEmotionCache }) {
  return 
  <CacheProvider
    value={emotionCache}
  >
    <Component 
      {...pageProps}
    />
  </CacheProvider>
}

export default MyApp
