import '../styles/globals.css'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'

const clientSideEmotionCache = createCache({ key: 'css' });


function MyApp({ 
  Component,
  pageProps,
  emotionCache=clientSideEmotionCache 
 })
  {
  return 
  <CacheProvidervalue={emotionCache}>
    <Component 
      {...pageProps}
    />
  </CacheProvider>
}

export default MyApp
