import '@/styles/globals.css'
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-Z32KHW8D9X"></Script>
      <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-Z32KHW8D9X');
        `}
      </Script>
      <Component {...pageProps} />      
    </>
  )
}
