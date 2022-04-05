import '../styles/globals.css'
import { createCache } from '@emotion/cache'
import { CacheProvider } from '@emotion/core'

const clientSideEmotionCache = createCache({ key: 'css' });


function MyApp({ Component, pageProps, emotionCache=clientSideEmotionCache }) {
  return 
  <CacheProvider
    ca
  >
    <Component 
      {...pageProps}
    />
  </CacheProvider>
}

export default MyApp
