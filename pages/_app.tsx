import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  //`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7243897918486921`
  
  return (
    <>
      <Script 
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5048686927497654`}
        crossOrigin="anonymous"
        id="Adsense-id"
        async={true}
        strategy="beforeInteractive"
        onError={ (e) => { console.error('Adsense Script failed to load', e) }}
      />
      <Component {...pageProps} />
    </>
  )
   
}

export default MyApp
